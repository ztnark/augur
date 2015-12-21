/**
 * Author: priecint
 */
define(function homeModule(require) {
    "use strict";

    let angular = require("angular");
    require("ui.router");

    let module = angular.module("augur.home", ["ui.router"]);

    module
        .config(["$stateProvider", function configureAppStates($stateProvider) {
            $stateProvider
                .state("home", {
                    url: "/",
                    template: require("text!modules/home/home.tpl.html")
                });
        }]);
});