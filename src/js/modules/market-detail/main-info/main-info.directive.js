define((require) => {
    "use strict";

    return {
        controller: require("modules/market-detail/main-info/main-info.controller"),
        controllerAs: "mainInfo",
        restrict: "EA",
        link,
        template: require("text!modules/market-detail/main-info/main-info.tpl.html")
    };

    function link() {
        console.log("main-info.directive.js:");
    }
});