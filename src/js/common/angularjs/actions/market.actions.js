/**
 * Author: priecint
 */
define((require) => {
    "use strict";

    let marketActionsConstants = require("common/angularjs/actions/market-actions.constants");

    return ["$q", "augurApi", function ($q, augurApi) {
        return Object.assign({
            downloadMarket,
            requestMarket,
            requestMarketSuccessful,
            requestMarketFailed
        }, marketActionsConstants);

        function downloadMarket(marketId) {
            return dispatch => {
                dispatch(requestMarket(marketId));

                return augurApi.getMarketInfo(marketId)
                    .then(marketInfo => {
                        dispatch(requestMarketSuccessful(marketInfo));
                        return marketInfo;
                    })
                    .then(null, error => {
                        dispatch(requestMarketFailed(error));
                        return error;
                    });
            };
        }

        function requestMarket(marketId) {
            return {
                type: marketActionsConstants.REQUEST_MARKET,
                marketId
            };
        }

        function requestMarketSuccessful(market) {
            return {
                type: marketActionsConstants.REQUEST_MARKET__SUCCESS,
                market
            };
        }

        function requestMarketFailed(error) {
            return {
                type: marketActionsConstants.REQUEST_MARKET__FAILURE,
                error
            };
        }
    }];
});