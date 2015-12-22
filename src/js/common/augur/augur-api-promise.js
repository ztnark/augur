/**
 * Author: priecint
 *
 * This serves as wrapper around Augur API to return promises
 */
define((require) => {
    "use strict";

    // this doesn't return module, but it creates global
    require("/dist/augur/augur.js");

    return ["$q", ($q) => {
        function promisify(methodName, ...parameters) {
            const defer = $q.defer();
            window.augur[methodName](...parameters, defer.resolve);
            return defer.promise;
        }

        return {
            getDescription(id) {
                return promisify("getDescription", id);
            },
            getBranches() {
                return promisify("getBranches");
            },
            getMarkets(branchId) {
                return promisify("getMarkets", branchId);
            },
            getMarketInfo(marketId) {
                return promisify("getMarketInfo", marketId);
            },
            getMarketsInfo(branchId, offset, numMarketsToLoad) {
                return promisify("getMarketsInfo", branchId, offset, numMarketsToLoad);
            },
            getMarketsSummary(branchId) {
                return promisify("getMarketsSummary", branchId);
            },
            getMostActive(branchId) {
                return promisify("getMostActive", branchId);
            },
            getClosingPrices(marketId) {
                return promisify("getClosingPrices", marketId);
            },
            getPrices(marketId) {
                return promisify("getPrices", marketId);
            },
        };
    }];
});
