/**
 * Created by Marcin on 06.01.2016.
 */
/**
 * Created by Marcin on 21.12.2015.
 */
var action_g = function (start, end) {
    return "http://edi.iem.pw.edu.pl/matlaczm/apka/path/" + start + "/" + end;
};

document.addEventListener('DOMContentLoaded', function () {

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
});

var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 52.276714, lng: 19.470538},
        zoom: 6
    });
}

function mapa(path, start, destination) {
    var planCoordinates = [];
    for (var i in path) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var data = $.parseJSON(xhttp.responseText);
                var loc = data['results'][0]['geometry']['location'];
                planCoordinates.push(loc);
                if (path[i] === start || path[i] === destination) {
                    new google.maps.Marker({
                        position: loc,
                        map: map,
                        title: path[i],
                        clicked: false,
                        info: new google.maps.InfoWindow({
                            content: path[i],
                        })
                    })
                        .addListener('click', function () {
                            var marker = this;
                            if (!marker.clicked) {
                                marker.info
                                    .open(map, this);

                                marker.clicked = true;
                            } else {
                                marker.info.close();
                                marker.clicked = false;
                            }
                        });
                }
            }
        };
        xhttp.open("GET", 'https://maps.googleapis.com/maps/api/geocode/json?address=' + path[i] + '&key=AIzaSyC0fyRGllwPtxZdknHd_nPYAuloCYIiF_0'
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









