window.onload = function () {
    cargar_datos_cookie();
};
function ejectuar_accion() {
    var select = document.getElementById("opcion");
    switch (select.value) {
        case "reves":
            invertir_nombre();
            break;
        case "redirect":
            redirigir_red_social();
            break;
        case "edad":
            calcula_edad();
            break;
        case "cookies":
            almacena_cookies();
            break;
        default:
            console.error("Opción escogida no valida");
            break;
    }
    ;
}
function invertir_nombre() {
    var _a;
    var inputNombre = $inputById("nombre");
    3;
    var inputFecha = $inputById("fecha_nac");
    var result = document.getElementById("result");
    var nombreAlreves = "";
    //Funcion comunidad JS: inputNombre.value.split("").reverse().join("");
    for (var i = inputNombre.value.length - 1; i >= 0; i--) {
        nombreAlreves += inputNombre.value[i];
    }
    //DUDA: Porque del ?
    //Es equivalente a un operador ternario que comprueba la nulidad del objeto
    result.textContent = nombreAlreves.toUpperCase() + ((_a = inputFecha.valueAsDate) === null || _a === void 0 ? void 0 : _a.getFullYear());
}
function redirigir_red_social() {
    var inputUrl = $inputById("url");
    var inputApellidos = $inputById("apellidos");
    var regExp = new RegExp("^https:\/\/");
    if (regExp.test(inputUrl.value)) {
        //Redirige
        var apellido = inputApellidos.value.split(" ")[0];
        var direccion = inputUrl.value + "/search?q=" + apellido;
        window.location.href = direccion;
    }
    else {
        //Muestra error
        mensaje_error();
    }
}
function calcula_edad() {
    var inputEdad = $inputById("fecha_nac");
    var result = document.getElementById("result");
    var fechaNacimineto = inputEdad.valueAsDate;
    var fechaActual = new Date();
    var edadCalculada = fechaActual.getFullYear() - fechaNacimineto.getFullYear();
    result.textContent = "Tienes " + edadCalculada + " años.";
}
function almacena_cookies() {
    document.cookie = "nombre=" + $inputById("nombre").value;
    document.cookie = "apellidos=" + $inputById("apellidos").value;
    document.cookie = "edad=" + $inputById("edad").value;
    document.cookie = "telefono=" + $inputById("telefono").value;
    document.cookie = "fechaNac=" + $inputById("fecha_nac").value;
    document.cookie = "url=" + $inputById("url").value;
}
//Helpers
function $inputById(id) {
    return document.getElementById(id);
}
function $getCookieByKey(key) {
    var arrayCookie = document.cookie.split(";");
    var result = "";
    for (var i = 0; i < arrayCookie.length; i++) {
        var clave = arrayCookie[i].split("=")[0];
        var valor = arrayCookie[i].split("=")[1];
        if (clave.trim() == key) {
            result = valor;
        }
    }
    return result;
}
//Para despues
function mensaje_error() {
    var result = document.getElementById("result");
    result.textContent = "";
    var errorParagraph = document.createElement("p");
    errorParagraph.textContent = "Debe incluir la cabecera https";
    errorParagraph.style.color = "red";
    errorParagraph.style.fontWeight = "bold";
    result.appendChild(errorParagraph);
}
function cargar_datos_cookie() {
    $inputById("nombre").placeholder = $getCookieByKey("nombre");
    $inputById("apellidos").placeholder = $getCookieByKey("apellidos");
    $inputById("edad").placeholder = $getCookieByKey("edad");
    $inputById("telefono").placeholder = $getCookieByKey("telefono");
    $inputById("fecha_nac").placeholder = $getCookieByKey("fecha_nac");
    $inputById("url").placeholder = $getCookieByKey("url");
}
function actualizar_web() {
    window.location.reload();
}
