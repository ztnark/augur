/**
 * Converts price to cost per share
 * Author: priecint
 */
define([], function costPerShareFilterModule() {
    "use strict";

    return ["priceService", function costPerShareFilterFactory(priceService) {
        /**
         * Returns price converted to cost per share.
         * If there is not enough parameters it throws an exception.
         * If input is invalid returns null.
         *
         * @param {number} price
         * @param {number} tickSize
         * @param {number} tickValue
         * @returns {number|null} tickValue
         */
        return function costPerShareFilter(price, tickSize, tickValue) {
            if (arguments.length < 3) {
                throw new Error("costPerShareFilter: not enough parameters");
            }

            if (price == null || typeof price !== "number" || price !== price || price === "NaN") {
                return null;
            }

            return priceService.priceToCostPerShare(price, tickSize, tickValue);
        };
    }];
});