/**
 * Author: priecint
 */
define((require) => {
    "use strict";

    let angular = require("angular");
    require("ui.router");
    let redux = require("redux");
    let reduxThunk = require("redux-thunk");
    require("ng-redux");
    require("modules/home/home.module");
    require("modules/market-detail/market-detail.module");
    require("modules/markets/markets.module");

    let appName = "augur-client";
    let module = angular.module(appName, ["ui.router", "ngRedux", "augur.home", "augur.markets", "augur.marketDetail"]);

    module.controller("AppController", require("app.controller"));
    module.service("marketsService", require("common/angularjs/service/markets.service"));
    module.factory("marketActions", require("common/angularjs/actions/market.actions"));

    module
        .config(["$locationProvider", function configureHtml5Mode($locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }])

        // https://stackoverflow.com/a/30122327/1303135
        .config(['$provide', function ($provide) {
            $provide.decorator('$locale', ['$delegate', function ($delegate) {
                if ($delegate.id == 'en-us') {
                    $delegate.NUMBER_FORMATS.PATTERNS[1].negPre = '-\u00A4';
                    $delegate.NUMBER_FORMATS.PATTERNS[1].negSuf = '';
                }
                return $delegate;
            }]);
        }])

        .config(["$ngReduxProvider", ($ngReduxProvider) => {
            var marketReducers = require("common/redux/reducers/market.reducers");
            let reducer = redux.combineReducers({
                markets: marketReducers
            });
            $ngReduxProvider.createStoreWith(reducer, [reduxThunk]);
        }])

        .run(["$rootScope", "$state", function stateChangeListeners($rootScope, $state) {
            /**
             * Takes care of "redirect" to correct state.
             * Sometimes we need to switch to special mobile state or we need to choose different state when page is loaded
             */
            //$rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
            //    console.log("index.js[$stateChangeStart]: %o, %o, %o, %o, %o", event, toState, toParams, fromState, fromParams);
            //    var toStateName = toState.name;
            //    if (_shouldRedirectToMobileState(toStateName)) {
            //        event.preventDefault();
            //        $state.go(toStateName + ".mobile");
            //    }
            //
            //    //if (_shouldRedirectToMostActive(toStateName, fromState)) {
            //    //    event.preventDefault();
            //    //    $state.go("markets.mostActive", null, {
            //    //        location: "replace" // so user can navigate browser history
            //    //    });
            //    //}
            //});

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


            //$rootScope.$on("$stateChangeStart", (event, toState, toParams, fromState, fromParams) => {
            //    console.log(`index.js[$stateChangeStart]: toState.name ${toState.name} %o, %o, %o, %o, %o`, event, toState, toParams, fromState, fromParams);
            //});
            //
            ///**
            // * Very important listener. Just logs error.
            // */
            //$rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
            //    console.error("index.js[$stateChangeError]: %o, %o, %o, %o, %o, %o", event, toState, toParams, fromState, fromParams, error, error.stack);
            //});
        }]);

    angular.element(document).ready(() => {
        console.log(`${appName}: ready`);

        angular.bootstrap(document, [appName], {
            strictDi: true
        });
    });
});