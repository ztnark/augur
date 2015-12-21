/**
 * Author: priecint
 */
define(["modules/markets/MenuNodeType"], function MenuNodeModule(MenuNodeType) {
    "use strict";

    /**
     *
     */
    class MenuNode {
        constructor(type, data, children, uiSref) {
            this.type = type;
            Object.assign(this, data);
            this.children = children;
            this.uiSref = uiSref;
        }
    }

    return MenuNode;
});