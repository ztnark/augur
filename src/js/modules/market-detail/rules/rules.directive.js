define((require) => {
    "use strict";

    return [function () {
        return {
            controller: require("modules/market-detail/rules/rules.controller"),
            controllerAs: "rules",
            restrict: "EA",
            link,
            template: require("text!modules/market-detail/rules/rules.tpl.html")
        };

        function link() {
            console.log("rules.directive.js:");
        }
    }];
});