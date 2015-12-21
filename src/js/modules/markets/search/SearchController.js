/**
 * Created by lojzatran on 01/06/15.
 */
define(["utils/inheritance", "modules/markets/MenuNodeType", "modules/markets/list/ListController"],
    function SearchControllerModule(inheritance, MenuNodeType, ListController) {
        "use strict";
        console.log("SearchController.js");

        var listControllerConstructor = ListController[ListController.length - 1];
        inheritance.extend(SearchController, listControllerConstructor);

        function SearchController($state, parent, items, menuService, $stateParams) {
            var vm = this;
            listControllerConstructor.call(vm, $state, parent, items);
            vm.searchQuery = $stateParams.searchQuery;
            vm.searchContractByName = function () {
                var searchQuery = vm.searchQuery;
                vm.items = menuService.searchNodesByName(searchQuery, MenuNodeType.CONTRACT);
                $state.go("markets.search", {searchQuery: searchQuery});
            };
        }

        return ["$state", "parent", "items", "menuService", "$stateParams", SearchController];
    });