/**
 * Author: priecint
 */
define(function marketsModule(require) {
    "use strict";

    let angular = require("angular");
    require("ui.router");

    let module = angular.module("augur.markets", ["ui.router"]);

    module.controller("MarketsController", require("modules/markets/markets.controller"));
    module.controller("ListController", require("modules/markets/list/list.controller"));

    module.service("menuService", require("modules/markets/MenuService"));
    module.service("augurApi", require("common/augur/augur-api-promise"));

    module
        .config(["$stateProvider", function configureAppStates($stateProvider) {
            let desktopMenu = {
                template: require("text!modules/markets/list/list.tpl.html"),
                controller: "ListController as list",
                resolve: {
                    items: ["$stateParams", "menuService", ($stateParams, menuService) => {
                        return menuService.getRootNode()
                            .then(node => node.children);
                    }],
                    parent: ["$stateParams", "menuService", ($stateParams, menuService) => {
                        return menuService.getRootNode();
                    }]
                }
            };

            $stateProvider
                .state("markets", {
                    url: "/markets",
                    abstract: true,
                    controller: "MarketsController as markets",
                    template: require("text!modules/markets/markets.tpl.html")
                })
                .state("markets.listing", {
                    url: "?nodeId",
                    views: {
                        "menuView@markets": desktopMenu,
                        "contentView@markets": {
                            template: require("text!modules/markets/list/list.tpl.html"),
                            controller: "ListController as list",
                            resolve: {
                                items: ["$stateParams", "menuService", ($stateParams, menuService) => {
                                    let nodeId = $stateParams.nodeId;
                                    if (nodeId == null) {
                                        return menuService.getRootNode()
                                            .then(node => node.children[1]) // 0 is search
                                            .then(node => node.children); // markets
                                    } else {
                                        return menuService.getNode(nodeId)
                                            .then(node => node.children);
                                    }
                                }],
                                parent: ["$stateParams", "menuService", ($stateParams, menuService) => {
                                    let nodeId = $stateParams.nodeId;
                                    if (nodeId == null) {
                                        return menuService.getRootNode()
                                            .then(node => node.children[1]); // 0 is search
                                    } else {
                                        return menuService.getNode(nodeId);
                                    }
                                }]
                            }
                        }
                    }
                })
                .state("markets.listing.mobile", {
                    views: {
                        "contentView@markets": {
                            template: require("text!modules/markets/list/list.tpl.html"),
                            controller: "ListController as list",
                            resolve: {
                                items: ["$stateParams", "menuService", ($stateParams, menuService) => {
                                    let nodeId = $stateParams.nodeId || "rootnode";
                                    return menuService.getNode(nodeId)
                                        .then(node => node.children);
                                }],
                                parent: ["$stateParams", "menuService", ($stateParams, menuService) => {
                                    let nodeId = "rootnode";
                                    return menuService.getNode(nodeId);
                                }]
                            }
                        }
                    }
                })
                .state("markets.search", {
                    url: "/search?query",
                    views: {
                        "menuView@markets": desktopMenu,
                        "contentView@markets": {
                            template: "todo search for {{searchCtrl.query}}",
                            controllerAs: "searchCtrl",
                            controller: ["$stateParams", function SearchController($stateParams) {
                                this.query = $stateParams.query
                            }]
                        }
                    }
                });
        }])
        .config(["$locationProvider", function configureLocationProvider($locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }])
        // http://stackoverflow.com/a/30122327/1303135
        .config(['$provide', function ($provide) {
            $provide.decorator('$locale', ['$delegate', function ($delegate) {
                if ($delegate.id == 'en-us') {
                    $delegate.NUMBER_FORMATS.PATTERNS[1].negPre = '-\u00A4';
                    $delegate.NUMBER_FORMATS.PATTERNS[1].negSuf = '';
                }
                return $delegate;
            }]);
        }]);
});