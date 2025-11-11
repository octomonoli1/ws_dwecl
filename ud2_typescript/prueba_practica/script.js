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
}
function calcula_edad() {
    var inputEdad = $inputById("edad");
}
function almacena_cookies() {
}
//Helpers
function $inputById(id) {
    return document.getElementById(id);
}
//Para despues
function mensaje_error() {
    var result = document.getElementById("result");
    result.textContent = "";
    var errorParagraph = document.createElement("p");
    errorParagraph.textContent = "";
}
