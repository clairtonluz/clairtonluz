/**
 * Created by clairton on 15/10/15.
 */
angular.module('clairtonLuzApp')
    .factory('PostAPI', ['$resource',
        function ($resource) {
            return $resource('/clairtonluz/src/partials/post/:id.json', {id: '@id'});
        }
    ]);
