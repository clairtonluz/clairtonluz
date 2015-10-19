/**
 * Created by clairton on 17/10/15.
 */
/* global angular: false */
angular.module('clairtonLuzApp').factory('ErrorInterceptor', ['$q', function ($q) {
    return {
        responseError: function (rejection) {
            console.log('Error in response ', rejection);
            return $q.reject(rejection);
        }
    };
}])
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('ErrorInterceptor');
    }]);
