/**
 * Author: priecint
 */
define(() => {
    "use strict";

    return {
        objectValues(object) {
            return Object.keys(object).map(key => object[key]);
        }
    };
});