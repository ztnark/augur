/**
 * UI Router steals click event so links which are out of the Angular app (e.g. in footer) effectively doesn't work.
 * This can be fixed by adding target="_self" to them
 *
 * Author: priecint
 */
define([], function enableExternalLinksDirectiveModule() {
    "use strict";
    console.log("enableExternalLinksDirective.js");

    return [function enableExternalLinksDirective() {
        return {
            link: function ($scope, $element, attributes, controller) {
                if ($element.attr("target") == null && $element.attr("ui-sref") == null) {
                    $element.attr("target", "_self");
                }
            }
        };
    }];
});