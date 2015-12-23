/**
 * Controller for the whole market detail page
 *
 * Author: priecint
 */
define(function MarketDetailControllerModule() {
    "use strict";

    return ["$stateParams", "marketsService", function MarketDetailController($stateParams, marketsService) {
        let vm = this;
        vm.market = null;
        vm.branch = null;

        activate();

        function activate() {
            marketsService
                .getDataForId($stateParams.marketId)
                .then(market => {
                    vm.market = market;
                    return market.branchId;
                })
                .then(branchId => marketsService.getDataForId(branchId))
                .then(branch => vm.branch = branch);
        }
    }];
});