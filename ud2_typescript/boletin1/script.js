//Ejercicio 1
function ej1() {
    //No existe date primitivo
    var fecha = new Date();
    console.log("Hoy es: " + fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear());
    console.log("Son las: " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora aaaaaaa: " + (fecha.getHours() + 1) + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora antertior: " + (fecha.getHours() - 1) + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
}
//Ejercicio 2
function valida_form() {
    //let expReg: RegExp = /lo_que_sea/
    var expReg = new RegExp("lo_que_sea");
    //Primero nos aseguramos que no es nulo (porque no puedo almacenar un nulo en un HTMLInputElement)
    if (document.getElementById("email")) {
        var mensajeOK = document.createElement('span');
        var email = document.getElementById("email");
        if (expReg.test(email.value)) {
            mensajeOK.textContent = "Email correcto";
        }
        else {
            mensajeOK.textContent = "Email incorrecto";
        }
    }
}
