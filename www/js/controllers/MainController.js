/**
 * Created by Marcin on 06.01.2016.
 */
app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Fallout 4';
    $scope.promo = 'only 59.59$';
    $scope.product = {
        name: 'The Book of Trees',
        price: 19,
        pubdate: new Date('2014','03','08')
    }
}]);