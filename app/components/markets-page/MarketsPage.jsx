let React = require("react");
let abi = require("augur-abi");
let _ = require("lodash");
let moment = require("moment");
let Pagination = require("react-bootstrap/lib/Pagination");
let FluxMixin = require("fluxxor/lib/flux_mixin")(React);
let StoreWatchMixin = require("fluxxor/lib/store_watch_mixin");
let Navigation = require("react-router/lib/Navigation");
let Link = require("react-router/lib/components/Link");
let Button = require("react-bootstrap/lib/Button");
let Select = require('react-select');
let MarketRow = require("./MarketRow");
let AddMarketModal = require("../AddMarketModal");
let constants = require("../../libs/constants");
let utils = require("../../libs/utilities");

let MarketsPage = React.createClass({

    // assuming only one branch and all markets in store are of that branch
    mixins: [FluxMixin, StoreWatchMixin("market", "search", "branch", "config"), Navigation],

    getInitialState() {
        return {
            marketsPerPage: constants.MARKETS_PER_PAGE,
            visiblePages: 3,
            // zero-based
            pageNum: this.props.query.page ? this.props.query.page - 1 : 0,
            sortValue: null,
            addMarketModalOpen: false
        };
    },

    getStateFromFlux: function () {
        var flux = this.getFlux();
        var marketState = flux.store("market").getState();
        var searchState = flux.store("search").getState();
        var currentBranch = flux.store("branch").getCurrentBranch();
        var account = flux.store("config").getAccount();

        return {
            searchKeywords: searchState.keywords,
            markets: searchState.results,
            pendingMarkets: marketState.pendingMarkets,
            currentBranch: currentBranch,
            account: account,
            tourMarketKey: abi.bignum(utils.getTourMarketKey(searchState.results))
        };
    },

    handlePageChanged: function (event, selectedEvent) {
        let selectedPage = selectedEvent.eventKey;
        this.transitionTo('markets', null, {page: (parseInt(selectedPage)), expired: this.props.query.expired});
        this.setState({pageNum: selectedPage - 1});
    },

    onChangeSearchInput: function (event) {
        this.setState({searchKeywords: event.target.value});
        this.debounceSearchInput(event.target.value);
    },

    onChangeSortBy: function (newValue) {
        this.setState({
            sortValue: newValue
        });
        this.handlePageChanged({selected: 0});
        var sortInput = newValue.value.split('|');
        this.getFlux().actions.search.sortMarkets(sortInput[0], parseInt(sortInput[1]));
    },
    onMarketsPerPageChange(option) {
        this.setState({
            marketsPerPage: option.value
        });
    },

    debounceSearchInput: _.debounce(function (val) {
        this.handlePageChanged({selected: 0});
        this.getFlux().actions.search.updateKeywords(val);
    }, 500),

    componentWillReceiveProps(nextProps) {
        if (this.props.query.expired !== nextProps.query.expired) {
            // when switching from one tab to another restart pagination
            this.setState(_.merge({}, this.state, {
                pageNum: 0
            }));
        }
    },

    /**
     * Returns filtered markets (expired or not) and data for pagination
     * todo: filtering logic should probably be part of SearchStore ?
     */
    getMarketsData() {
        let currentBranch = this.props.branch.currentBranch;
        let currentPeriod = currentBranch != null ? currentBranch.currentPeriod : null;
        let filteredMarkets = _(this.state.markets)
            .filter((market => {
                if (currentBranch == null) {
                    // at least display something
                    return true;
                }

                if (this.props.query.expired === "true") {
                    return currentPeriod >= market.tradingPeriod;
                } else {
                    return currentPeriod < market.tradingPeriod;
                }
            }));

        let firstItemIndex = this.state.pageNum * this.state.marketsPerPage;
        let marketsCount = filteredMarkets.size();
        let lastItemIndex = firstItemIndex + this.state.marketsPerPage;
        lastItemIndex = Math.min(lastItemIndex, marketsCount);

        let markets = filteredMarkets
            .map()
            .slice(firstItemIndex, lastItemIndex)
            .value();

        return {
            markets, marketsCount, firstItemIndex, lastItemIndex
        };
    },

    toggleAddMarketModal: function (event) {
        this.setState({addMarketModalOpen: !this.state.addMarketModalOpen});
    },

    render() {
        let flux = this.getFlux();
        let myOpenOrders = flux.augur.orders.get(flux.augur.from);
        let tourMarketKey = this.state.tourMarketKey;
        let tourMarketId;
        if (tourMarketKey) tourMarketId = this.state.markets[tourMarketKey]._id;

        let {markets, marketsCount, firstItemIndex, lastItemIndex} = this.getMarketsData();

        let tourMarketRow = <span />;
        if (tourMarketId && this.state.pageNum === 0) {
            tourMarketRow = <MarketRow
                                key={tourMarketKey}
                                market={this.state.markets[tourMarketKey]}
                                tour={true}
                                numOpenOrders={(myOpenOrders && tourMarketId && myOpenOrders[tourMarketId] && myOpenOrders[tourMarketId][1] && myOpenOrders[tourMarketId][1].length) || 0} />
        }

        let pagesCount = Math.ceil(marketsCount / this.state.marketsPerPage);
        let pagination = (
            <div className="row" style={{marginBottom: "1.7rem"}}>
                <div className="col-xs-12 pagination-row">
                    <div className="pagination-section">
                        <span style={{paddingRight: "20px"}}>View</span>
                        <Select style={{ width: "4.6rem" }}
                                value={this.state.marketsPerPage}
                                name="markets-paginationItemsPerPage"
                                searchable={false}
                                clearable={false}
                                onChange={this.onMarketsPerPageChange}
                                options={[
                                    {value: constants.MARKETS_PER_PAGE, label: constants.MARKETS_PER_PAGE},
                                    {value: 50, label: "50"},
                                    {value: 100, label: "100"}
                                ]}
                            />
                    </div>
                    <div className="pagination-section">
                        <span style={{paddingRight: "20px"}} className='showing'>{ firstItemIndex + 1 } - { lastItemIndex } of { marketsCount }</span>

                        { pagesCount > 1 &&
                            <Pagination
                                prev
                                next
                                ellipsis={false}
                                items={ pagesCount }
                                maxButtons={-1} // hide page numbers (not documented but works)
                                activePage={this.state.pageNum + 1}
                                onSelect={this.handlePageChanged}
                                />
                        }
                    </div>
                </div>
            </div>
        );

        let submitMarketAction;
        if (this.state.account) {
            submitMarketAction = (
                <Button
                  className="pull-right btn-primary btn-success"
                  onClick={this.toggleAddMarketModal}>
                  New Market
                </Button>
            );
        } else {
            submitMarketAction = <span />;
        }

        return (
            <div className="marketsPage">
                <h1>
                    Markets
                    {submitMarketAction}
                </h1>

                <div className="row submenu">
                    <a className="collapsed" data-toggle="collapse" href="#collapseSubmenu"
                       aria-expanded="false"
                       aria-controls="collapseSubmenu">
                        <h2>Navigation</h2>
                    </a>

                    <div id="collapseSubmenu" className="col-xs-12 collapse" aria-expanded="false">
                        <ul className="list-group" role="tablist" id="tabpanel">
                            <li role="presentation" className={`list-group-item ${this.props.query.expired !== 'true' ? 'active' : ''}`}>
                                <Link to='markets' role="tab" activeClassName="">
                                    Open Markets
                                </Link>
                            </li>
                            <li role="presentation" className={`list-group-item ${this.props.query.expired === 'true' ? 'active' : ''}`}>
                                <Link to="markets" activeClassName="" query={{expired: true}} role="tab">
                                    Expired Markets
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row search-sort-row">
                    <div className="col-sm-4 col-xs-6">
                        <Select className="sort-control"
                                value={this.state.sortValue}
                                name="markets-sort"
                                searchable={false}
                                clearable={false}
                                placeholder="Sort markets"
                                onChange={this.onChangeSortBy}
                                options={[
                                    {value: "creationBlock|1", label: "Creation date (newest first)"},
                                    {value: "creationBlock|0", label: "Creation date (oldest first)"},
                                    {value: "endBlock|0", label: "End date (soonest first)"},
                                    {value: "endBlock|1", label: "End date (farthest first)"},
                                    {value: "description|0", label: "Description"}
                                ]}>
                        </Select>
                    </div>
                    <div className="col-sm-4 col-xs-6 col-sm-offset-4 search-container">
                        <input type="search"
                               className="form-control search-control"
                               value={this.state.searchKeywords}
                               placeholder="Search"
                               tabIndex="0"
                               onChange={this.onChangeSearchInput}/>
                    </div>
                </div>
                {pagination}
                <div className="row">
                    <div className="col-xs-12">
                        {tourMarketRow}
                        {markets.map(market => {
                            if (!tourMarketKey.eq(market.id)) {
                                return (
                                    <MarketRow
                                        key={market.id}
                                        market={market}
                                        numOpenOrders={(myOpenOrders && myOpenOrders[market._id] && myOpenOrders[market._id][1] && myOpenOrders[market._id][1].length) || 0} />
                                );
                            }
                        })}
                    </div>
                </div>
                {pagination}
                <AddMarketModal
                    show={this.state.addMarketModalOpen}
                    onHide={this.toggleAddMarketModal} />
            </div>
        );
    }

});

module.exports = MarketsPage;
