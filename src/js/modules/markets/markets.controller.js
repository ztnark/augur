/**
 * Author: priecint
 */
define(function MarketsControllerModule(require) {
    "use strict";

    return ["$rootScope", "$state", function MarketsController($rootScope, $state) {
        var vm = this;

        /**
         * Takes care of "redirect" to correct state.
         * Sometimes we need to switch to special mobile state or we need to choose different state when page is loaded
         */
        $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
            //console.log("MarketsAppController.js[$stateChangeStart]: %o, %o, %o, %o, %o", event, toState, toParams, fromState, fromParams);
            //var toStateName = toState.name;
            //if (_shouldRedirectToMobileState(toStateName)) {
            //    event.preventDefault();
            //    $state.go(toStateName + ".mobile");
            //}

            //if (_shouldRedirectToMostActive(toStateName, fromState)) {
            //    event.preventDefault();
            //    $state.go("markets.mostActive", null, {
            //        location: "replace" // so user can navigate browser history
            //    });
            //}
        });

        /**
         * Very important listener, just logs error
         */
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            console.error("MarketsAppController.js[$stateChangeError]: %o, %o, %o, %o, %o, %o", event, toState, toParams, fromState, fromParams, error, error.stack);
        });

        /**
         *
         * @param {String} toStateName - name of state into which we transition to
         * @returns {boolean}
         * @private
         */
        function _shouldRedirectToMobileState(toStateName) {
            var isSmallDevice = document.body.offsetWidth < 767;
            var isMobileStateAvailable = $state.get(toStateName + ".mobile") != null;
            var isMobileState = toStateName.indexOf("mobile") > -1;
            return isSmallDevice && isMobileStateAvailable && !isMobileState;
        }

        /**
         *
         * @param {String} toStateName
         * @param {Object} fromState
         * @returns {boolean}
         * @private
         */
        function _shouldRedirectToMostActive(toStateName, fromState) {
            var isToDefaultState = toStateName === "markets";
            var isBigDevice = document.body.offsetWidth >= 768;
            var isInitialLoad = fromState.name === "";
            return isToDefaultState && isBigDevice && isInitialLoad;
        }
    }];
});