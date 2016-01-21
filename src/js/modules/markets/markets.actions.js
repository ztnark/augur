/**
 * Author: priecint
 */
define((require) => {
    "use strict";

    const REQUEST_ALL_MARKETS = "REQUEST_ALL_MARKETS";
    const REQUEST_ALL_MARKETS__SUCCESS = "REQUEST_ALL_MARKETS__SUCCESS";
    const REQUEST_ALL_MARKETS__FAILURE = "REQUEST_ALL_MARKETS__FAILURE";
    const REQUEST_MARKET = "REQUEST_MARKET";
    const REQUEST_MARKET__SUCCESS = "REQUEST_MARKET__SUCCESS";
    const REQUEST_MARKET__FAILURE = "REQUEST_MARKET__FAILURE";

    return ["$q", "augurApi", function ($q, augurApi) {
        return {
            REQUEST_ALL_MARKETS,
            REQUEST_ALL_MARKETS__SUCCESS,
            REQUEST_ALL_MARKETS__FAILURE,
            REQUEST_MARKET,
            REQUEST_MARKET__SUCCESS,
            REQUEST_MARKET__FAILURE,
            downloadAllMarkets,
            requestAllMarkets,
            requestAllMarketsSuccessful,
            requestAllMarketsFailed
        };

        function downloadMarketInfo(marketId) {
            return dispatch => {
                dispatch(requestMarketInfo(marketId));

                return augurApi.getMarketInfo(marketId)
                    .then(marketInfo => {
                        dispatch(requestMarketInfoSuccessful(marketInfo));
                        return marketInfo;
                    })
                    .then(null, error => {
                        dispatch(requestMarketInfoFailed(error));
                        return error;
                    });
            };
        }

        function downloadAllMarkets() {
            return dispatch => {
                dispatch(requestAllMarkets());

                return _loadAllMarkets()
                    .then(branches => {
                        dispatch(requestAllMarketsSuccessful(branches));
                        return branches;
                    })
                    .then(null, error => {
                        dispatch(requestAllMarketsFailed(error));
                        return error;
                    });
            };
        }

        function requestAllMarkets() {
            return {
                type: REQUEST_ALL_MARKETS
            };
        }

        function requestAllMarketsSuccessful(branches) {
            return {
                type: REQUEST_ALL_MARKETS__SUCCESS,
                branches
            };
        }

        function requestAllMarketsFailed(error) {
            return {
                type: REQUEST_ALL_MARKETS__FAILURE,
                error
            };
        }

        function requestMarketInfo(marketId) {
            return {
                type: REQUEST_MARKET,
                marketId
            };
        }

        function requestMarketInfoSuccessful(marketInfo) {
            return {
                type: REQUEST_MARKET__SUCCESS,
                marketInfo
            };
        }

        function requestMarketInfoFailed(error) {
            return {
                type: REQUEST_MARKET__FAILURE,
                error
            };
        }

        function _loadAllMarkets() {
            return augurApi.getBranches()
                .then((branchIds) => {
                    return $q.all(
                        branchIds.map(_getBranchData, this)
                    );
                })
                .then(function (branchValues) {
                    console.log("markets.service.js: finished %o", branchValues);
                    return branchValues;
                }, (error) => {
                    console.error("markets.service.js: something bad happened %o", error);
                    return error;
                });
        }

        function _getBranchData(branchId) {
            return $q
                .all({
                    description: augurApi.getDescription(branchId),
                    markets: _getMarketsForBranch(branchId)
                })
                .then(function (results) {
                    return {
                        // to be consistent with market info
                        _id: branchId,
                        description: results.description,
                        markets: results.markets
                    };
                });
        }

        function _getMarketsForBranch(branchId) {
            return augurApi
                .getMarkets(branchId)
                .then(function (marketIds) {
                    return $q.all(
                        marketIds.map(function (marketId) {
                            return augurApi.getMarketInfo(marketId);
                        })
                    );
                })
                .then(function (marketInfos) {
                    console.log("markets.service.js: marketInfos: %o", marketInfos);
                    return marketInfos;
                });
        }
    }];
});