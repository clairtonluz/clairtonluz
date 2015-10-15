/**
 * Created by clairton on 15/10/15.
 */
angular.module('clairtonLuzApp')
    .controller('PostCtrl', ['$scope', '$location', '$routeParams', 'PostAPI', function ($scope, $location, $routeParams, PostAPI) {

        /*Declaração dos metodos*/
        var findById = _findById;

        /*Lógica do controller*/
        findById($routeParams.id);

        /*implementação dos metodos*/
        function _findById(id) {
            if (id) {
                $scope.post = PostAPI.get({id: id});
            }
        }

    }]);
