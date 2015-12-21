/**
 * Created by lojzatran on 02/04/15.
 *
 * Insert text as HTML for Angular templates. This filter needs to be
 * used with directive ng-bind-html="whatever_needs_to_be_insert | insertHtml"
 */
define([], function insertHtmlFilterModule() {
    "use strict";

    return ['$sce', function ($sce) {
        return function (htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        };
    }];
});