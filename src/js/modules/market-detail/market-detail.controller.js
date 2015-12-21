/**
 * Author: priecint
 */
define(function MarketDetailControllerModule() {
    "use strict";

    return ["marketId", function MarketDetailController(marketId) {
        this.marketId = marketId;
    }];
});