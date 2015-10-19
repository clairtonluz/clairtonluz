/* global angular: false */
//var config = {URL: 'http://localhost:9000'};
var config = {URL: 'https://clairtonluz-server.herokuapp.com'};
angular.module('clairtonLuzApp', [
    'ngRoute',
    'ngResource',
    'ngSanitize'
])
    .
    filter('toTrusted', function ($sce) {
        return function (value) {
            return $sce.trustAsHtml(value);
        };
    })
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: 'app/partials/home', controller: 'HomeCtrl'})
            .when('/about', {templateUrl: 'app/partials/about.html', controller: 'PageCtrl'})
            .when('/404', {templateUrl: 'app/partials/404.html', controller: 'PageCtrl'})
            .otherwise('/404');
    }])
    .constant("config", config);
