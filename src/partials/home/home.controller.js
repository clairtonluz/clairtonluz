/**
 * Created by clairton on 15/10/15.
 */
angular.module('clairtonLuzApp')
    .controller('PostCtrl', ['$scope', '$location', function ($scope, $location) {

        /*Declaração dos metodos*/
        var loadPost = _loadPost;

        /*Lógica do controller*/
        var _post = $location.search();
        loadPost(_post.id);

        /*implementação dos metodos*/
        function _loadPost(id) {
            if (id) {
                $scope.title = 'Post de teste';
                $scope.summary = 'Aqui vem um pequeno resumo do post';
                $scope.content = '<div class="desc text-left"> ' +
                    '<div class="featured-image"> ' +
                    '<a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-products-velocity/" target="_blank"> ' +
                    '<img class="img-responsive project-image" src="img/projects/project-featured.png" alt="project name"/> ' +
                    '</a> ' +
                    '<div class="ribbon"> ' +
                    '<div class="text">Novo</div> ' +
                    '</div> ' +
                    '</div> ' +
                    '<p>Descrevendo o post aqui.</p> ' +
                    '<p>Mais um paragrafo.</p> ' +
                    '</div>';
            } else {
                console.log('Nenhum post encontrado. Redirecionando para o home.')
                $location.url('/');
            }
        }

    }]);
