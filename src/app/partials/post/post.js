/**
 * Created by clairton on 17/10/15.
 */
'use strict';

angular.module('clairtonLuzApp')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/post/', {templateUrl: 'app/partials/post', controller: 'PostCtrl', controllerAs:'PostCtrl'})
            .when('/post/:id', {templateUrl: 'app/partials/post', controller: 'PostCtrl', controllerAs:'PostCtrl'})
            .when('/post/:id/view', {templateUrl: 'app/partials/post/view.html', controller: 'PostViewCtrl'});
    }]);
