/**
 * Created by clairton on 15/10/15.
 */
angular.module('clairtonLuzApp')
    .factory('PostAPI', ['$resource', 'config',
        function ($resource, config) {
            return $resource(config.URL + '/api/posts/:id', {id: '@_id'});
        }
    ]);
