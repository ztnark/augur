define((require) => {
    "use strict";

    return [function () {
        return {
            controller: require("modules/market-detail/frozen-funds/frozen-funds.controller"),
            controllerAs: "frozenFunds",
            restrict: "EA",
            link,
            template: require("text!modules/market-detail/frozen-funds/frozen-funds.tpl.html")
        };

        function link() {
            console.log("frozen-funds.directive.js:");
        }
    }];
});