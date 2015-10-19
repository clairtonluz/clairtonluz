/**
 * Created by clairton on 15/10/15.
 */
angular.module('clairtonLuzApp')
    .controller('PostCtrl', ['$scope', '$location', '$routeParams', 'PostAPI', function ($scope, $location, $routeParams, PostAPI) {

        /*Declaração dos metodos*/
        var findById = _findById;
        this.save = _save;

        /*Lógica do controller*/
        if ($routeParams.id) {
            findById($routeParams.id);
        }

        /*implementação dos metodos*/
        function _findById(id) {
            $scope.post = PostAPI.get({id: id});
        }

        function _save(post) {
            PostAPI.save(post, function(data) {
                console.log('redirec')
                console.log(data);
                $location.url('/post/' + data._id + '/view')
            });
        }

    }]);
