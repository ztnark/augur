/**
 * Author: priecint
 */
define((require) => {
    "use strict";

    let marketActionsConstants = require("common/angularjs/actions/market-actions.constants");

    let defaultState = {
        items: {},
        error: null,
        isLoading: false
    };

    return function marketsReducers(state = defaultState, action) {
        switch (action.type) {
            case marketActionsConstants.REQUEST_MARKET:
                return Object.assign({}, state, {
                    isLoading: true,
                    error: null
                });
            case marketActionsConstants.REQUEST_MARKET__SUCCESS:
                let copy = state.items.slice();
                copy.push(action.market);
                return Object.assign({}, state, {
                    isLoading: false,
                    error: null,
                    items: copy // todo: what if it already exists?
                });
            case marketActionsConstants.REQUEST_MARKET__FAILURE:
                return Object.assign({}, state, {
                    isLoading: false,
                    error: action.error
                });
            default:
                return state;
        }
    };
});