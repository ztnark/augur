/**
 * This filter is used for unified displaying of empty values
 *
 * Author: priecint
 */
define([], function emptyValueFilterModule() {
    "use strict";

    return [function emptyValueFilterFactory() {
        var DEFAULT_EMPTY_STRING = "-";
        /**
         * Returns true if value is null, undefined or empty string (no trimming)
         *
         * @param {*} value
         * @returns {boolean}
         */
        function isEmpty(value) {
            return value == null || value === "";
        }

        /**
         * For empty values returns string representation of empty value. For non-empty values returns the value
         *
         * @param {*} value
         * @param {String=} emptyValueString
         * @returns {String} tickValue
         */
        return function emptyValueFilter(value, emptyValueString) {
            if (isEmpty(value)) {
                return emptyValueString || DEFAULT_EMPTY_STRING;
            } else {
                return value;
            }
        };
    }];
});