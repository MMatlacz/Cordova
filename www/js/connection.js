/**
 * Created by Marcin on 09.01.2016.
 */
document.addEventListener('DOMContentLoaded', function () {
    function hasConnection() {

        // Handle IE and more capable browsers
        var xhr = new ( window.ActiveXObject || XMLHttpRequest )("Microsoft.XMLHTTP");
        var status;

        // Open new request as a HEAD to the root hostname with a random param to bust the cache
        xhr.open("GET", "http://edi.iem.pw.edu.pl/matlaczm/apka", false);

        // Issue request and handle response
        try {
            xhr.send();
            return ( xhr.status >= 200 && (xhr.status < 300 || xhr.status === 304) );
        } catch (error) {
            return false;
        }

    }

    var checkConnection = function () {
        if (hasConnection()) {
            $('#connection')[0].children[0].textContent = "You have internet connection";
        } else {
            $('#connection')[0].children[0].textContent = "No connection detected";
            sleep(500);
            checkConnection()
        }
    };
    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds){
                break;
            }
        }
    }
    checkConnection();
});