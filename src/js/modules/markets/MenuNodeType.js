/**
 * Author: priecint
 */
define(["module"], function MenuNodeTypeModule(module) {
    "use strict";
    const CATEGORY = Symbol(),
        LEAF = Symbol(),
        LINK = Symbol();

    return {
        CATEGORY,
        LEAF,
        LINK
    };
});