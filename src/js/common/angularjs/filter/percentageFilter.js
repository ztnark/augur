/**
 * Created by lojzatran on 02/04/15.
 *
 * Format number to percentage with 1 decimal number by default
 */
define([], function percentageFilterModule() {
    "use strict";

    var DEFAULT_FRACTION_SIZE = 1;

    return ["numberFilter", function (numberFilter) {
        return function (number, fractionSize) {
            if (number == null || typeof number !== "number" || number !== number || number === "NaN") {
                return null;
            }

            fractionSize = fractionSize == null ? DEFAULT_FRACTION_SIZE : fractionSize;
            return numberFilter(number, fractionSize) + "%";
        };
    }];
});