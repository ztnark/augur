/**
 * Author: priecint
 */
define(function MenuServiceModule(require) {
    "use strict";

    const module = require("module");
    const utils = require("common/utils");
    const MenuNode = require("modules/markets/MenuNode");
    const MenuNodeType = require("modules/markets/MenuNodeType");

    const ROOT_NODE_ID = "rootnode";
    const SEARCH_NODE_ID = "searchnode";

    console.log("MenuService.js");
    //var initialData = module.config().initialData;

    return ["$q", "augurApi", ($q, augurApi) => {
        console.log("MenuService.js: hu");

        /**
         *
         * @constructor
         */
        function MenuService() {
            this._structure = this._loadInitialData()
                .then(this._transformInitialData);
            this._flatStructure = this._structure.then(this._flattenStructure).then((data) => {
                console.log("MenuService.js[_flatStructure]: %o", data);
                return data;
            });
        }

        /**
         *
         * @param {String} nodeId
         * @returns {Promise.<MenuNode>}
         */
        MenuService.prototype.getNode = function (nodeId) {
            console.log(`MenuService.js: ${nodeId}`);
            return this._flatStructure.then(flatStructure => flatStructure[nodeId]);
        };

        MenuService.prototype.getRootNode = function () {
            return this.getNode(ROOT_NODE_ID);
        };

        MenuService.prototype._loadInitialData = function () {
            return augurApi.getBranches()
                .then((branchIds) => {
                    return $q.all(
                        branchIds.map(this._getBranchData, this)
                    );
                })
                .then(function (branchValues) {
                    console.log("MenuService.js: finished %o", branchValues);
                    return branchValues;
                }, (error) => {
                    console.error("MenuService.js: something bad happened %o", error);
                });
        };

        MenuService.prototype._transformInitialData = function (initialData) {
            console.log(`MenuService.js: ${initialData}`);
            let children = initialData.map((branch) => {
                let children = branch.markets.map((market) => {
                    return new MenuNode(MenuNodeType.LEAF, market, null, `marketDetail({marketId: "${market._id}"})`);
                });
                return new MenuNode(MenuNodeType.CATEGORY, branch, children, `markets.listing({nodeId: "${branch._id}"})`);
            });

            children.unshift(new MenuNode(MenuNodeType.LEAF, {
                // to be consistent with market info
                _id: SEARCH_NODE_ID,
                description: "Search Markets"
            }, [], "markets.search()"));

            return new MenuNode(MenuNodeType.CATEGORY, {
                // to be consistent with market info
                _id: ROOT_NODE_ID,
                description: "Root node"
            }, children, `markets.listing({nodeId: "${ROOT_NODE_ID}"})`);
        };

        MenuService.prototype._flattenStructure = function (rootNode) {
            let flatStructure = {
                [rootNode._id]: rootNode
            };

            return rootNode.children.reduce((flatStructure, branchNode) => {
                flatStructure[branchNode._id] = branchNode;
                branchNode.children.reduce((flatStructure, marketNode) => {
                    flatStructure[marketNode._id] = marketNode;
                    return flatStructure;
                }, flatStructure);
                return flatStructure;
            }, flatStructure);
        };

        MenuService.prototype._getBranchData = function (branchId) {
            return $q
                .all({
                    description: augurApi.getDescription(branchId),
                    markets: this._getMarketsForBranch(branchId)
                })
                .then(function (results) {
                    return {
                        // to be consistent with market info
                        _id: branchId,
                        description: results.description,
                        markets: results.markets
                    };
                });

        };

        MenuService.prototype._getMarketsForBranch = function (branchId) {
            return augurApi
                .getMarkets(branchId)
                .then(function (marketIds) {
                    return $q.all(
                        marketIds.map(function (marketId) {
                            return augurApi.getMarketInfo(marketId);
                        })
                    );
                })
                .then(function (marketInfos) {
                    console.log("MenuService.js: marketInfos: %o", marketInfos);
                    return marketInfos;
                });
        };

        return new MenuService();
    }];
});