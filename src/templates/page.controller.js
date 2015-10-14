/**
 * Created by clairton on 14/10/15.
 */
/* global angular: false */
angular.module('clairtonLuzApp').controller('PageCtrl', ['$scope', '$location', function ($scope, $location) {
    this.isActive = function (path) {
        if ($location.url() === path || $location.url() === path.slice(1)) {
            return 'active ' + $location.url();
        } else {
            return '';
        }
    };
}]);
