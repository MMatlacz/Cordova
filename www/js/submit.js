/**
 * Created by Marcin on 06.01.2016.
 */
/**
 * Created by Marcin on 21.12.2015.
 */
document.addEventListener('DOMContentLoaded', function() {
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
        document.getElementsByTagName("form")[0].action = "http://edi.iem.pw.edu.pl/matlaczm/apka/map/" + start + "/" + end;
        console.log("start")
    };
    document.getElementById("end").onblur = function () {
        end = document.getElementById("end").value;
        document.getElementsByTagName("form")[0].action = "http://edi.iem.pw.edu.pl/matlaczm/apka/map/" + start + "/" + end;
        console.log("end")
    };

});
