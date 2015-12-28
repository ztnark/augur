/**
 * Service to support operations with markets
 *
 * Author: priecint
 */
define((require) => {
    "use strict";

    return ["$q", "augurApi", function ($q, augurApi) {
        class MarketsService {
            constructor() {
                this._data = this._loadInitialData();
                this._flatStructure = this._data.then(this._flattenStructure);
            }

            getData() {
                return this._data;
            }

            getDataForId(id) {
                return this._flatStructure.then(flatStructure => flatStructure[id]);
            }

            _loadInitialData() {
                return augurApi.getBranches()
                    .then((branchIds) => {
                        return $q.all(
                            branchIds.map(this._getBranchData, this)
                        );
                    })
                    .then(function (branchValues) {
                        console.log("markets.service.js: finished %o", branchValues);
                        return branchValues;
                    }, (error) => {
                        console.error("markets.service.js: something bad happened %o", error);
                        return error;
                    });
            }

            _getBranchData(branchId) {
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
            }

            _getMarketsForBranch(branchId) {
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
                        console.log("markets.service.js: marketInfos: %o", marketInfos);
                        return marketInfos;
                    });
            }

            _flattenStructure(branches) {
                let flatStructure = {};
                return branches.reduce((flatStructure, branch) => {
                    flatStructure[branch._id] = branch;
                    return branch.markets.reduce((flatStructure, market) => {
                        flatStructure[market._id] = market;
                        return flatStructure;
                    }, flatStructure);
                }, flatStructure);
            }
        }

        return new MarketsService();
    }];
});