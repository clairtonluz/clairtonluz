/* global angular: false */
angular.module('clairtonLuzApp', [
    'ngRoute',
    'ngResource',
    'ngSanitize'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: 'partials/home', controller: 'HomeCtrl'})
            .when('/post', {templateUrl: 'partials/post', controller: 'PostCtrl'})
            .when('/about', {templateUrl: 'partials/about.html', controller: 'PageCtrl'})
            .when('/404', {templateUrl: 'partials/404.html', controller: 'PageCtrl'})
            .otherwise('/404');
    }]);
