/**
 * Created by Marcin on 06.01.2016.
 */
angular.module('fasttrav', ['ngAnimate', 'ui.bootstrap'])
    .controller('TypeaheadCtrl', function ($scope) {
        $.get('http://edi.iem.pw.edu.pl/matlaczm/apka/cities', function (resp) {
            $scope.cities = resp;
        })
    })
    .controller('SubmitController', function ($scope) {

        $scope.submit = function () {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    var data = $.parseJSON(xhttp.responseText);
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
            xhttp.open("GET", action_g(document.getElementById("start").value, document.getElementById("end").value), true);
            xhttp.send();
        };
    });