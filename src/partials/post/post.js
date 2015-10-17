/**
 * Created by clairton on 17/10/15.
 */
'use strict';

angular.module('clairtonLuzApp')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/post/view/', {redirectTo: '/404'})
            .when('/post/view/:id', {templateUrl: 'partials/post/view.html', controller: 'PostViewCtrl'})
            .when('/post/:id', {templateUrl: 'partials/post', controller: 'PostCtrl'});
    }]);
