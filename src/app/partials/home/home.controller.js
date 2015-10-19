/**
 * Created by clairton on 15/10/15.
 */
angular.module('clairtonLuzApp')
    .controller('HomeCtrl', ['$scope', 'PostAPI', function ($scope, PostAPI) {

        /*Declaração dos metodos*/
        var findAll = _findAll;

        /*Lógica do controller*/
        findAll();

        /*implementação dos metodos*/
        function _findAll() {
            PostAPI.query(function(res){
                $scope.posts = res;
            },
            function(err) {
                console.log('ERRRRR');
                console.log(err);
            });
        }

    }]);
