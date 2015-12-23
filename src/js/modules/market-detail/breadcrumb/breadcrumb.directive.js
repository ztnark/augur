/**
 * Author: priecint
 */
define((require) => {
    "use strict";

    return [function () {
        return {
            controller: require("modules/market-detail/breadcrumb/breadcrumb.controller"),
            controllerAs: "breadcrumb",
            restrict: "EA",
            link,
            template: require("text!modules/market-detail/breadcrumb/breadcrumb.tpl.html")
        };

        function link() {
            console.log("breadcrumb.directive.js:");
        }
    }];
});