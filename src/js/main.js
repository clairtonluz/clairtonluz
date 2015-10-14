/* global angular: false */
angular.module('clairtonLuzApp', [
    'ngRoute'
])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: 'partials/home.html', controller: 'PageCtrl'})
            .when('/about', {templateUrl: 'partials/about.html', controller: 'PageCtrl'})
            .when('/404', {templateUrl: 'partials/404.html', controller: 'PageCtrl'})
            .otherwise('/404');
    }]);
