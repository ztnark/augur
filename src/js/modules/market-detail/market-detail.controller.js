/**
 * Controller for the whole market detail page
 *
 * Author: priecint
 */
define(function MarketDetailControllerModule() {
    "use strict";

    return ["$scope", "$stateParams", "$ngRedux", function MarketDetailController($scope, $stateParams, $ngRedux) {
        let vm = this;

        _activate();

        function _activate() {
            let unsubscribe = $ngRedux.connect(_mapState)(vm);
            $scope.$on('$destroy', unsubscribe);
        }

        function _mapState(state) {
            console.log("market-detail.controller.js: %o", state);
            let market = state.markets.items[$stateParams.marketId];
            return {
                market: market,
                branch: market != null ? state.branches[market.branchId] : null
            };
        }
    }];
});