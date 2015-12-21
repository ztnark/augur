define((require) => {
    "use strict";

    return {
        controller: require("modules/market-detail/trade-interface/trade-interface.controller"),
        controllerAs: "tradeInterface",
        restrict: "EA",
        link,
        template: require("text!modules/market-detail/trade-interface/trade-interface.tpl.html")
    };

    function link() {
        console.log("trade-interface.directive.js:");
    }
});