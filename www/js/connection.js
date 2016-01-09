/**
 * Created by Marcin on 09.01.2016.
 */
document.addEventListener('DOMContentLoaded', function () {
    var checkConnection = function () {
        if (!Offline.check().offline) {
            $('#connection')[0].children[0].textContent = "You have internet connection";
        } else {

        }
    };
    checkConnection();
    console.log(Offline.check().offline)
});