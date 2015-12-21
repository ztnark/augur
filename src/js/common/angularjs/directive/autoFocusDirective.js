/**
 * Input's autofocus works only the first time so this makes sure the input is focused every time it should
 *
 * Author: priecint
 */
define([], function autoFocusDirectiveModule() {
    "use strict";
    console.log("autoFocusDirective.js");

    return ["$timeout", function autoFocusDirective($timeout) {
        return {
            link: function ($scope, $element, attributes, controller) {
                $timeout(function () {
                    $element.focus();
                }, 1);
            }
        };
    }];
});