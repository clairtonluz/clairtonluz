/**
 * Created by clairton on 15/10/15.
 */
angular.module('clairtonLuzApp')
    .controller('PostCtrl', ['$scope', '$routeParams', 'PostAPI', function ($scope, $routeParams, PostAPI) {

        /*Declaração dos metodos*/
        var findById = _findById;
        $scope.save = _save;

        /*Lógica do controller*/
        if ($routeParams.id) {
            findById($routeParams.id);
        }

        /*implementação dos metodos*/
        function _findById(id) {
            $scope.post = PostAPI.get({id: id});
        }

        function _save(post) {
            console.log('yes')
            PostAPI.save(post);

        }

    }]);
