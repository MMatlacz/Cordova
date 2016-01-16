/**
 * Created by Marcin on 06.01.2016.
 */
angular.module('fasttrav', ['ngAnimate', 'ui.bootstrap'])
    .controller('TypeaheadCtrl', function ($scope) {
        $scope.cities = ["Szczecin", "Bydgoszcz", "Pozna\u0144", "Wroc\u0142aw", "Katowice", "Krak\u00f3w", "Rzesz\u00f3w", "Warszawa", "Bia\u0142ystok", "Olsztyn", "Gda\u0144sk", "Gdynia", "S\u0142upsk", "Koszalin", "Ko\u0142obrzeg", "Stargard Szczeci\u0144ski", "Pi\u0142a"];
    })
    .controller('SubmitController', function ($scope) {

        $scope.submit = function () {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    var data = $.parseJSON(xhttp.responseText);
                    console.log(data);
                    var container = $('.typeahead');
                    container.children().remove();
                    container.append("<pre>Start: " + data['start'] + "</pre> <pre>Koniec: " + data['finish'] + "</pre>");
                    for (var i in data['path']) {
                        container.append("<pre>" + i + ". " + data['path'][i] + "</pre>");
                    }
                    container.append("<pre>" + data['distance'] + " KM</pre>");
                    container.append("<div id='map'></div>");
                    container.append("<button id='reset' type='reset' onclick='location.reload()' class='btn-primary'>Back</button>");
                    initMap();
                    mapa(data['path'], data['start'], data.finish);

                }
            };
            xhttp.open("GET", action_g(start, end), true);
            xhttp.send();
            console.log(xhttp.responseText)
        };
    });