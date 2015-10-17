angular.module('clairtonLuzApp')
    .filter('htmlParse', function ($sce) {
        return function (value) {
            return $sce.trustAsHtml(value);
        };
    });
