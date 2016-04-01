let React = require("react");
let classnames = require("classnames");
let abi = require("augur-abi");
let _ = require("lodash");
let moment = require("moment");
let Paginate = require("react-paginate");
let FluxMixin = require("fluxxor/lib/flux_mixin")(React);
let StoreWatchMixin = require("fluxxor/lib/store_watch_mixin");
let Navigation = require("react-router/lib/Navigation");
let Link = require("react-router/lib/components/Link");
let Button = require("react-bootstrap/lib/Button");
let Select = require('react-select');
let MarketRow = require("./MarketRow");
let constants = require("../../libs/constants");
let utils = require("../../libs/utilities");
let marketUtils = require("../../libs/market-utilities");
let InputClear = require('../layout/InputClear');

let MarketsPage = React.createClass({

    // assuming only one branch and all markets in store are of that branch
    mixins: [FluxMixin, StoreWatchMixin("market", "branch", "config"), Navigation],

    getInitialState() {
        var initialSearchQuery = this.props.query.search || "";
        return {
            searchQuery: initialSearchQuery,
            searchKeywords: this.getSearchKeywords(initialSearchQuery),
            marketsPerPage: constants.MARKETS_PER_PAGE,
            visiblePages: 3,
            addMarketModalOpen: false
        };
    },

    getStateFromFlux: function () {
        var flux = this.getFlux();
        var marketState = flux.store("market").getState();
        var currentBranch = flux.store("branch").getCurrentBranch();
        var account = flux.store("config").getAccount();

        return {
            markets: marketState.markets,
            pendingMarkets: marketState.pendingMarkets,
            currentBranch: currentBranch,
            account: account,
            tourMarket: marketState.tourMarket
        };
    },

    componentWillMount() {
        this.onChangeSearchInputDebounced = _.debounce(() => {
            this.transitionTo('markets', null, {
                search: this.state.searchQuery,
                expired: this.props.query.expired,
                sort: this.props.query.sort
            });
        }, 300);
    },
    componentWillUnmount() {
        this.onChangeSearchInputDebounced.cancel();
    },

    /**
     * @param {object} data
     */
    handlePageChanged: function (data) {
        this.transitionTo('markets', null, {
            page: (parseInt(data.selected) + 1),
            expired: this.props.query.expired,
            search: this.props.query.search,
            sort: this.props.query.sort
        });
    },

    /**
     * @param {String} searchQuery
     */
    onChangeSearchInput: function (searchQuery) {
        this.setState({
            searchQuery,
            searchKeywords: this.getSearchKeywords(searchQuery)
        });

        this.onChangeSearchInputDebounced();
    },

    /**
     * @param {object} option
     */
    onChangeSortBy: function (option) {
        this.transitionTo('markets', null, {
            search: this.props.query.search,
            sort: option.value,
            expired: this.props.query.expired
        });
    },

    /**
     * @param {object} option
     */
    onChangeMarketStatus: function (option) {
        this.transitionTo('markets', null, {
            search: this.props.query.search,
            expired: option.value === "expired",
            sort: this.props.query.sort
        });
    },

    resolvePageNumber() {
        return this.props.query.page ? this.props.query.page - 1 : 0;
    },
    resolveSort() {
        return this.props.query.sort || "startingSortOrder|desc";
    },
    getSearchKeywords(searchQuery) {
        return searchQuery.trim().toLocaleLowerCase().split(" ");
    },

    /**
     * Does all the filtering and sorting
     */
    getMarketsData() {
        let currentBranch = this.props.branch.currentBranch;
        let currentPeriod = currentBranch != null ? currentBranch.currentPeriod : null;

        let showExpiredMarkets = this.props.query.expired === "true";
        let sortBy = this.resolveSort().split("|");
        let sortByFieldName = sortBy[0] || "startingSortOrder";
        let sortOrder = sortBy[1] || "desc";

        let filteredSortedMarkets = _(this.state.markets)
            .filter((market) => {
                return this.state.searchKeywords.every(function (keyword) {
                    return marketUtils.isDescriptionMatch(market, keyword) || marketUtils.isTagsMatch(market, keyword);
                }, this);
            })
            .filter(market => {
                if (currentPeriod == null) {
                    // at least display something
                    return true;
                }

                return showExpiredMarkets ? (currentPeriod >= market.tradingPeriod) : (currentPeriod < market.tradingPeriod);
            })
            .sortByOrder([sortByFieldName], [sortOrder])
            .value();

        let firstItemIndex = this.resolvePageNumber() * this.state.marketsPerPage;
        let marketsCount = filteredSortedMarkets.length;
        let lastItemIndex = firstItemIndex + this.state.marketsPerPage;
        lastItemIndex = (lastItemIndex > marketsCount ? marketsCount : lastItemIndex);

        let markets = filteredSortedMarkets
            .slice(firstItemIndex, lastItemIndex);

        return {
            markets, marketsCount, firstItemIndex, lastItemIndex
        };
    },

    render() {
        let flux = this.getFlux();
        let account = this.state.account;
        let myOpenOrders = flux.augur.orders.get(account);
        let isVisibleTourMarket = this.state.tourMarket && !localStorage.getItem("marketRowTourComplete") && !localStorage.getItem("tourComplete");
        let {markets, marketsCount, firstItemIndex, lastItemIndex} = this.getMarketsData();
        let numPages = Math.ceil(marketsCount / this.state.marketsPerPage);
        let pagination;
        let tourMarketRow;

        if (isVisibleTourMarket) {
            tourMarketRow = <MarketRow
                                key={this.state.tourMarket.id}
                                account={account}
                                market={this.state.tourMarket}
                                tour={ true }
                                numOpenOrders={(myOpenOrders && myOpenOrders[this.state.tourMarket._id] && myOpenOrders[this.state.tourMarket._id][1] && myOpenOrders[this.state.tourMarket._id][1].length) || 0} />;
        }

        if (this.props.isSiteLoaded) {
            pagination = (
                <div className="row">
                    <div className="col-xs-12">
                        <span className='showing'>Showing { marketsCount > 0 ? firstItemIndex + 1 : 0 } - { lastItemIndex } of { marketsCount }</span>
                        { numPages >= 2 &&
                            <Paginate
                                previousLabel={ <i className='fa fa-chevron-left'></i> }
                                nextLabel={ <i className='fa fa-chevron-right'></i> }
                                breakLabel={ <li className="break">...</li> }
                                pageNum={ numPages }
                                marginPagesDisplayed={ 2 }
                                pageRangeDisplayed={ 5 }
                                forceSelected={ this.resolvePageNumber() }
                                clickCallback={ this.handlePageChanged }
                                containerClassName={ 'paginator' }
                                subContainerClassName={ 'pages' }
                                activeClass={ 'active' } />
                        }
                    </div>
                </div>
            );
        }

        let submitMarketAction = null;
        if (this.state.account) {
            submitMarketAction = (
                <Link to="market-create"
                      className="pull-right btn btn-primary btn-success">
                    Create New Market
                </Link>
            );
        }

        return (
            <div className="marketsPage">
                <h1>
                    Markets
                    {submitMarketAction}
                </h1>
                <div className="search-container">
                    <InputClear
                           value={this.state.searchQuery}
                           onChange={this.onChangeSearchInput}/>
                </div>

                <div className="row dropdowns">
                    <Select className="sort-control"
                            value={this.resolveSort()}
                            name="markets-sort"
                            searchable={false}
                            clearable={false}
                            placeholder="Sort markets"
                            onChange={this.onChangeSortBy}
                            options={[
                                {value: "volume|desc", label: "Volume"},
                                {value: "startingSortOrder|desc", label: "Creation date (newest first)"},
                                {value: "startingSortOrder|asc", label: "Creation date (oldest first)"},
                                {value: "endBlock|asc", label: "End date (soonest first)"},
                                {value: "endBlock|desc", label: "End date (farthest first)"},
                                {value: "description|asc", label: "Description"}
                            ]}>
                    </Select>

                    <Select className="market-status"
                            value={ this.props.query.expired === "true" ? "expired" : "open" }
                            name="market-status"
                            searchable={false}
                            clearable={false}
                            onChange={this.onChangeMarketStatus}
                            options={[
                                {value: "open", label: "Open Markets"},
                                {value: "expired", label: "Expired Markets"}
                            ]}>
                    </Select>
                </div>
                {pagination}
                <div className="row market-rows">
                    { this.props.isSiteLoaded &&
                        <div className="col-xs-12">
                            { tourMarketRow }
                            {markets.map(market => {
                                if (!isVisibleTourMarket || market !== this.state.tourMarket) {
                                    return (
                                        <MarketRow
                                            key={market.id}
                                            account={account}
                                            market={market}
                                            numOpenOrders={(myOpenOrders && myOpenOrders[market._id] && myOpenOrders[market._id][1] && myOpenOrders[market._id][1].length) || 0} />
                                    );
                                }
                            })}
                        </div>
                    }
                    { !this.props.isSiteLoaded &&
                        <div className="loader"></div>
                    }
                </div>
                {marketsCount > 0 && pagination}
            </div>
        );
    }

});

module.exports = MarketsPage;
