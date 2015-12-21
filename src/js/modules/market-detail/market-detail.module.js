/**
 * Author: priecint
 */
define(function marketDetailModule(require) {
    "use strict";

    let angular = require("angular");
    require("ui.router");
    let module = angular.module("augur.marketDetail", ["ui.router"]);

    module.controller("MarketDetailController", require("modules/market-detail/market-detail.controller"));

    //module.directive("breadcrumb", require("modules/market-detail/breadcrumb/breadcrumb.directive"));
    //module.directive("frozenFunds", require("modules/market-detail/frozen-funds/frozen-funds.directive"));
    //module.directive("mainInfo", require("modules/market-detail/main-info/main-info.directive"));
    //module.directive("rules", require("modules/market-detail/rules/rules.directive"));
    //module.directive("statsAndCharts", require("modules/market-detail/stats-and-charts/stats-and-charts.directive"));
    //module.directive("tradeInterface", require("modules/market-detail/trade-interface/trade-interface.directive"));
    //module.directive("userTrades", require("modules/market-detail/user-trades/user-trades.directive"));

    module.config(["$stateProvider", function configureAppStates($stateProvider) {
        $stateProvider
            .state("marketDetail", {
                url: "/markets/:marketId",
                controller: "MarketDetailController as marketDetail",
                template: require("text!modules/market-detail/market-detail.tpl.html"),
                resolve: {
                    marketId: ["$stateParams", function ($stateParams) {
                        return $stateParams.marketId;
                    }]
                }
            });
    }]);
});