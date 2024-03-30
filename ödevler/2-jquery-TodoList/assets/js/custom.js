//hata objesi
var warningObject = {
    icon: "error",
    title: "HATA...",
    text: "Opsss..",
    confirmButtonColor: "red",
    confirmButtonText: "TAMAM",
}
var url = "http://egitim-api.sercanozen.com.tr";
var loginRoute = "/api/login";

function emailControl(email) {
    var regex = /([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

