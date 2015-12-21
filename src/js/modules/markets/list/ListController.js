/**
 * Author: priecint
 */
define([], function ListControllerModule() {
    "use strict";

    return ["$state", "parent", "items",
        /**
         *
         * @param $state
         * @param {MenuNode} parent
         * @param {Array.<MenuNode>} items
         * @constructor
         */
        function ListController($state, parent, items) {
            this.parent = parent;
            this.items = items;
            // copy whatever data to view model
            this.data = $state.current.data || {};
        }
    ];
});