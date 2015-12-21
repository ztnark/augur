define((require) => {
    "use strict";

    return {
        controller: require("modules/market-detail/stats-and-charts/stats-and-charts.controller"),
        controllerAs: "statsAndCharts",
        restrict: "EA",
        link,
        template: require("text!modules/market-detail/stats-and-charts/stats-and-charts.tpl.html")
    };

    function link() {
        console.log("stats-and-charts.directive.js:");
    }
});