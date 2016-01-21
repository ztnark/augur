/**
 * Author: priecint
 */
define(function MarketsControllerModule(require) {
    "use strict";

    return ["$scope", "$stateParams", "$ngRedux", "$state", function MarketsController($scope, $stateParams, $ngRedux, $state) {
        let vm = this;

        activate();

        function activate() {
            console.log("markets.controller.js");
        }
    }];
});