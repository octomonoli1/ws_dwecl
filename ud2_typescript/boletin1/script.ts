//Ejercicio 1
function ej1(): void{

    //No existe date primitivo
    let fecha: Date = new Date();

    console.log("Hoy es: " + fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear());
    console.log("Son las: " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora aaaaaaa: " + (fecha.getHours() + 1) + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora antertior: " + (fecha.getHours() - 1) + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
}

//Ejercicio 2
function valida_form(){
    //let expReg: RegExp = /lo_que_sea/
    let expReg: RegExp = new RegExp("lo_que_sea");

    //Primero nos aseguramos que no es nulo (porque no puedo almacenar un nulo en un HTMLInputElement)
    if(document.getElementById("email")){
        let mensajeOK = document.createElement('span') ;
        let email: HTMLInputElement  = document.getElementById("email") as HTMLInputElement;
        if(expReg.test(email.value)){
            mensajeOK.textContent = "Email correcto";
        }else{
            mensajeOK.textContent = "Email incorrecto";
        }
    }
    
}