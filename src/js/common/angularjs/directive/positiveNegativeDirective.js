/**
 * Based on attribute value toggles positive and negative classes. Also watches attribute for change and reacts
 * accordingly. Attribute value must evaluate to number
 *
 * Usage: <span in-pos-neg="{{model.test.value}}"></span>
 *
 * Author: priecint
 */
define([], function positiveNegativeDirectiveModule() {
    "use strict";
    console.log("positiveNegativeDirective.js");
    var POSITIVE_CLASS = "positive", NEGATIVE_CLASS = "negative";

    return [function positiveNegativeDirective() {
        return {
            scope: {
                value: "@inPosNeg"
            },
            link: function($scope, $element, attributes, controller) {
                function applyClass(value) {
                    if (value > 0) {
                        $element.addClass(POSITIVE_CLASS);
                    } else if (value < 0) {
                        $element.addClass(NEGATIVE_CLASS);
                    } else {
                        $element.removeClass(POSITIVE_CLASS + " " + NEGATIVE_CLASS);
                    }
                }
                attributes.$observe("inPosNeg", function (value) {
                    applyClass(value);
                });
            }
        };
    }];
});