/**
 * Created by clairton on 17/10/15.
 */
'use strict';

angular.module('clairtonLuzApp')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/post/', {templateUrl: 'partials/post', controller: 'PostCtrl', controllerAs:'PostCtrl'})
            .when('/post/:id', {templateUrl: 'partials/post', controller: 'PostCtrl', controllerAs:'PostCtrl'})
            .when('/post/:id/view', {templateUrl: 'partials/post/view.html', controller: 'PostViewCtrl'});
    }]);
