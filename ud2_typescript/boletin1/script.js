//Ejercicio 1
function ej1() {
    //No existe date primitivo
    var fecha = new Date();
    console.log("Hoy es: " + fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear());
    console.log("Son las: " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora aaaaaaa: " + (fecha.getHours() + 1) + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora antertior: " + (fecha.getHours() - 1) + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
}
//Ejercicio 2: Función que valida un dato introducido por formulario para que cumpla con un patrón de email.
/** Los pasos para validar esto son:
             *  1-. Extraer la información desde el Input HTML
             *  2-. Crear la expresión regular para validar el dato recogido (Deslgosaremos parte por parte dicha expresión)
             *  3-. Controlar el resultado de la validación para informar al usuario
             *  4-. Definir un espacio "visible" dentro del formulario donde pintar la información
             *  5-. Vamos a pintar el mensaje aplicando un estilo (rojo -> error \ verde -> ok)
             *  6-. Como extra, vamos a hacer que el mensaje desaparezca automáticamente a los 5 segundos
         */
function valida_form() {
    var regExp = new RegExp("[^\s@]+@[^\s@]+\.[^\s@]+$"); //Con fallos (hay que corregir)
    //Aplico la validacion de la expresion regular
    if (regExp.test($inputValue("email"))) {
        //Si test devuelve true quiere decir que el texto "email" cumple la expresion reg.
        $writeNode("ok", "El email es valido"); //Aquí escribo
        $writeNode("error", ""); //Aquí escribo tambien (lo que pasa que borra)
    }
    else {
        //Si es false quiere decir que el texto "email" no cumple la expresion regular.
        $writeNode("ok", ""); //Aquí escribo (borrando el contenido)
        $writeNode("error", "El email no cumple la expresion"); //Aqui tambien escribo
    }
}
function ej3() {
    var ventanaNueva = window.open("https:www.google.es", "miVentana");
    ventanaNueva === null || ventanaNueva === void 0 ? void 0 : ventanaNueva.document.write("<h1>TITULO NUEVO</h1>");
}
function redirect_to() {
    var regexp = new RegExp("^https:\/\/");
    var url = $inputValue("url");
    if (regexp.test(url)) {
        window.location.href = url;
    }
    else {
        $writeNode("error2", "Por favor introduzca una URL válida");
        window.setTimeout(function () { return $writeNode("error2", ""); }, 5000);
    }
}
//Helpers (comunes para todo el boletín)
function $inputValue(id) {
    var input = document.getElementById(id); //Lectura
    var result = "";
    if (input) {
        result = input.value; //Recojo el valor (aqui es donde leo)
    }
    return result;
}
function $writeNode(id, msg) {
    var nodo = document.getElementById(id); //Escritura
    if (nodo) {
        nodo.textContent = msg;
    }
}
//Ejemplo de funciones normales y su definición corta (flecha)
function suma1(a, b) {
    var result = a + b;
    return result;
}
var suma2 = function (a, b) { return a + b; };
suma1(5, 5);
suma2(1, 2);
//Uso de funciones predefinidas en JS que hagan uso de funciones flecha: filter,reduce,foreach,some,every
var arrayPruebas = [2, 4, 6, 8, 10];
//1.- Filter
var arrayMayorCinco1 = [];
for (var i = 0; i < arrayPruebas.length; i++) {
    if (arrayPruebas[i] > 5) {
        arrayMayorCinco1.push(arrayPruebas[i]);
    }
}
var arrayMayorCinco2 = arrayPruebas.filter(function (data) { return data > 5; });
console.log(arrayMayorCinco1);
console.log(arrayMayorCinco2);
//2.- Map
var arrayDoble1 = [];
for (var i = 0; i < arrayPruebas.length; i++) {
    arrayDoble1.push(arrayPruebas[i] * 2);
}
var arrayDoble2 = arrayPruebas.map(function (data) { return data * 2; });
console.log(arrayDoble1);
console.log(arrayDoble2);
//2.a.- Combo entre filter y map (filtrado y transormación)
var arrayMayorCincoYDoble = arrayPruebas
    .filter(function (data) { return data > 5; })
    .map(function (data) { return data * 2; });
console.log(arrayMayorCincoYDoble);
var total1 = 0;
for (var i = 0; i < arrayPruebas.length; i++) {
    total1 = total1 + arrayPruebas[i];
}
var total2 = arrayPruebas.reduce(function (acc, data) { return acc + data; });
console.log(total1);
console.log(total2);
//3.- Foreach
for (var i = 0; i < arrayPruebas.length; i++) {
    console.log("Este es el elemento " + (i + 1) + ": " + arrayPruebas[i]);
}
arrayPruebas.forEach(function (data, i) { return console.log("Este es el elemento " + (i + 1) + ": " + data); });
//4.- Some
console.log(arrayPruebas.some(function (data) { return data > 8; }));
//5.- Every
console.log(arrayPruebas.every(function (data) { return data > 0; }));
//Definir una función propia donde uno de sus parametros sea una función
function resuelve_operacion(callback, a, b) {
    console.log("Aqui todavia no he calculado la operacion");
    var result = callback(a, b);
    console.log("Aqui ya la he calculado y es: " + result);
    return result;
}
console.log(resuelve_operacion(function (a, b) { return a / b; }, 10, 5));
