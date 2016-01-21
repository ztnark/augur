/**
 * Author: priecint
 */
define((require) => {
    "use strict";

    let actions = require("modules/markets/markets.actions");

    let defaultState = {
        markets: [],
        error: null,
        isLoading: false
    };

    return function marketsReducers(state = defaultState, action) {
        switch (action.type) {
            case actions.REQUEST_ALL_MARKETS:
                return Object.assign({}, state, {
                    isLoading: true,
                    error: null
                });
            case actions.REQUEST_ALL_MARKETS__SUCCESS:
                return Object.assign({}, state, {
                    isLoading: false,
                    error: null,
                    markets: action.markets
                });
            case actions.REQUEST_ALL_MARKETS__FAILURE:
                return Object.assign({}, state, {
                    isLoading: false,
                    error: action.error
                });
            default:
                return state;
        }
    };
});