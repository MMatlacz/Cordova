/**
 * Created by Marcin on 06.01.2016.
 */
/**
 * Created by Marcin on 21.12.2015.
 */
document.addEventListener('DOMContentLoaded', function () {
    var action_g = function (start, end) {
        return "http://edi.iem.pw.edu.pl/matlaczm/apka/map/" + start + "/" + end;
    };

    document.getElementById("start").onkeypress = function (event) {
        if (event.which == 13 || event.keyCode == 13) {
            event.preventDefault();
        }
    };
    document.getElementById("end").onkeypress = function (event) {
        if (event.which == 13 || event.keyCode == 13) {
            event.preventDefault();
        }
    };
    document.getElementById("start").onblur = function () {
        start = document.getElementById("start").value;
        document.getElementsByTagName("form")[0].action = action_g(start, end);
        console.log("start")
    };
    document.getElementById("end").onblur = function () {
        end = document.getElementById("end").value;
        document.getElementsByTagName("form")[0].action = action_g(start, end);
        console.log("end")
    };
    document.getElementById("submit").onclick = function (event) {
        event.preventDefault();
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var data = $.parseJSON(xhttp.responseText);
                console.log(data);
                var container = $('.typeahead');
                container.children().remove();
                container.append("<pre>Start: " + data['start'] + "</pre> <pre>Koniec: " + data['finish'] + "</pre>");
                for (i in data['path']) {
                    container.append("<pre>" + i + ". " + data['path'][i] + "</pre>");
                }
                container.append("<pre>" + data['distance'] + " KM</pre>");
                container.append("<div id='map'></div>");
                $('body').append("<button type='reset' onclick='location.reload()'>Back</button>");
                initMap();
                mapa(data['path']);

            }
        };
        xhttp.open("GET", action_g(start, end), false);
        xhttp.send();
        console.log(xhttp.responseText)
    }
});
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 52.276714, lng: 19.470538},
        zoom: 6
    });
}
function mapa(path){
    var planCoordinates = [];
    for(i in path) {
        console.log(path[i]);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var data = $.parseJSON(xhttp.responseText);
                console.log(data);
                var loc = data['results'][0]['geometry']['location'];
                planCoordinates.push(loc);
                new google.maps.Marker({
                    position: loc,
                    map: map,
                    title: 'Hello World!'
                });


            }
        };
        xhttp.open("GET", 'https://maps.googleapis.com/maps/api/geocode/json?address='+path[i]+'&key=AIzaSyC0fyRGllwPtxZdknHd_nPYAuloCYIiF_0'
            , false);
        xhttp.send();
    }
    var newPath = new google.maps.Polyline({
        path: planCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    newPath.setMap(map);
}









