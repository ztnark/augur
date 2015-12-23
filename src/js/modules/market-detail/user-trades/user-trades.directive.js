define((require) => {
    "use strict";

    return [function () {
        return {
            controller: require("modules/market-detail/user-trades/user-trades.controller"),
            controllerAs: "userTrades",
            restrict: "EA",
            link,
            template: require("text!modules/market-detail/user-trades/user-trades.tpl.html")
        };

        function link() {
            console.log("user-trades.directive.js:");
        }
    }];
});