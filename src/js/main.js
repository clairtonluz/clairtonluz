/* global angular: false */
var config = {URL: 'http://localhost:9000'};
angular.module('clairtonLuzApp', [
    'ngRoute',
    'ngResource',
    'ngSanitize'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: 'partials/home', controller: 'HomeCtrl'})
            .when('/about', {templateUrl: 'partials/about.html', controller: 'PageCtrl'})
            .when('/404', {templateUrl: 'partials/404.html', controller: 'PageCtrl'})
            .otherwise('/404');
    }])
    .constant("config", config);
