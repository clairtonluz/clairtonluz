/**
 * Created by clairton on 15/10/15.
 */
angular.module('clairtonLuzApp')
    .controller('PostViewCtrl', ['$scope', '$routeParams', 'PostAPI', function ($scope, $routeParams, PostAPI) {

        /*Declaração dos metodos*/
        var findById = _findById;

        /*Lógica do controller*/
        if ($routeParams.id) {
            findById($routeParams.id);
        }
        /*implementação dos metodos*/
        function _findById(id) {
            PostAPI.get({id: id}, function (data) {
                $scope.post = data;
            }, function (err) {
                $scope.message = err.data.message;
            });
        }

    }]);
