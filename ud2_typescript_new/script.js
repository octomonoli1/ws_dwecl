function valida_email() {
    //Recuperamos el valor
    var email = $inputValue("email");
    //Definimos el patron regular
    var regexp = new RegExp("[^\s@]+@[^\s@]+\.[^\s@]+$");
    if (regexp.test(email)) {
        $writeNode("ok", "El email introducido cumple la validación");
        $writeNode("error", "");
    }
    else {
        $writeNode("error", "El email introducido NO cumple la validación");
        $writeNode("ok", "");
    }
}
function navegar_url() {
    var url = $inputValue("url");
    var regexp = new RegExp("^https://");
    if (regexp.test(url)) {
        window.location.href = url;
    }
    else {
        $writeNode("error2", "La URL debe contener el https:// al principio");
    }
}
function lee_elementos() {
    var lista = document.getElementById("lista_alumnos");
    var alumnos = lista.childNodes;
    for (var i = 0; i < alumnos.length; i++) {
        console.log(alumnos[i]);
    }
}
function add_elemento() {
    var name = $inputValue("name");
    var lista = document.getElementById("lista_alumnos");
    var alumno = document.createElement("li");
    alumno.textContent = name;
    lista === null || lista === void 0 ? void 0 : lista.appendChild(alumno);
}
//Helpers
function $inputValue(id) {
    var input = document.getElementById(id);
    var result = "";
    if (input) {
        result = input.value;
    }
    return result;
}
function $writeNode(id, msg) {
    var node = document.getElementById(id);
    if (node) {
        node.textContent = msg;
    }
}
