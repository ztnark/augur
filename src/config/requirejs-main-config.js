/**
 * Author: priecint
 *
 * Used
 */
require.config({
    baseUrl: "/js",
    paths: {
        dist: "/dist",
        bootstrap: ["https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap",
            "/dist/bootstrap/js/bootstrap"],
        angular: ["https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular",
            "/dist/angular/angular"],
        jquery: ["https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery",
            "/dist/jquery/jquery"],
        augur: "/dist/augur/augur",
        redux: "/dist/redux/redux",
        "redux-thunk": "/dist/redux-thunk/index",
        "ng-redux": "/dist/ng-redux/ng-redux",
        "ui.router": "/dist/angular/ui-router/angular-ui-router",
        "text": "/dist/requirejs/plugins/text"
    },
    shim: {
        angular: {
            exports: "angular",
            deps: ["jquery"]
        },
        "ui.router": {
            deps: ["angular"]
        },
        "ng-redux": {
            deps: ["angular"]
        },
        "bootstrap": {
            deps: ["jquery"]
        }
    },
    config: {
    }
});