/**
 * Created by clairton on 15/10/15.
 */
angular.module('clairtonLuzApp')
    .factory('PostAPI', ['$resource',
        function ($resource) {
            return $resource('http://localhost:9000/api/posts/:id', {id: '@_id'});
        }
    ]);
