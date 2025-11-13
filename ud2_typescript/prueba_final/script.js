var USERNAME = "username";
var NVISITAS = "n_visitas";
window.onload = function () {
    lee_nombre();
};
function lee_nombre() {
    var username = $getCookieValueByKey(USERNAME);
    while (username == null || username == "") {
        username = window.prompt("Introduce su nombre");
    }
    document.cookie = USERNAME + "=" + username;
    var nVisitas = Number($getCookieValueByKey(NVISITAS));
    console.log(nVisitas);
    if (!nVisitas) {
        nVisitas = 0;
    }
    document.cookie = NVISITAS + "=" + (nVisitas + 1);
    var h1 = document.getElementById("titulo");
    h1.textContent = "Bienvenido al dashboard de " + username + " (Visitas: " + nVisitas + ")";
}
function $getCookieValueByKey(key) {
    var arrayCookie = document.cookie.split(";");
    var result = "";
    for (var i = 0; i < arrayCookie.length; i++) {
        var clave = arrayCookie[i].split("=")[0];
        var valor = arrayCookie[i].split("=")[1];
        if (clave.trim() === key) {
            result = valor;
        }
    }
    return result;
}
function add_tarea() {
    var inputId = document.getElementById("id");
    var inputDesc = document.getElementById("id");
    var select = document.getElementById("tipo");
    var tasks = document.getElementById("tasks");
    var task = document.createElement("div");
    var h2 = document.createElement("h2");
    h2.textContent = "ID Tarea: " + inputId.value;
    var pDesc = document.createElement("p");
    pDesc.textContent = "Descipción: " + inputDesc.value;
    var pDate = document.createElement("p");
    pDate.textContent = "Fecha de creación: " + (new Date().toUTCString);
    task.appendChild(h2);
    task.appendChild(pDesc);
    task.appendChild(pDate);
    switch (select.value) {
        case "tarea":
            console.log("tarea");
            task.style.backgroundColor = "red";
            break;
        case "incidencia":
            console.log("Incidencia");
            task.style.backgroundColor = "green";
            break;
        case "evento":
            console.log("evento");
            task.style.backgroundColor = "blue";
            break;
        default:
            console.error("Opcion no valida");
            break;
    }
    tasks === null || tasks === void 0 ? void 0 : tasks.appendChild(task);
}
function clean_tareas() {
    var tasks = document.getElementById("tasks");
    tasks.innerHTML = "";
}
