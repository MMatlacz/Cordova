/**
 * Created by Marcin on 06.01.2016.
 */
angular.module('fasttrav', ['ngAnimate', 'ui.bootstrap'])
.controller('TypeaheadCtrl', function ($scope) {

    $scope.start = undefined;
    $scope.end = undefined;
    $scope.cities = ["Szczecin", "Bydgoszcz", "Pozna\u0144", "Wroc\u0142aw", "Katowice", "Krak\u00f3w", "Rzesz\u00f3w", "Warszawa", "Bia\u0142ystok", "Olsztyn", "Gda\u0144sk", "Gdynia", "S\u0142upsk", "Koszalin", "Ko\u0142obrzeg", "Stargard Szczeci\u0144ski", "Pi\u0142a"];
});