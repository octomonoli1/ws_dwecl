//Ejercicio 1
function saludar(){
    var edad = window.prompt("Introduce tu edad");
    if(edad >= 18){
        console.log("Eres mayor de edad");
    }else{
        console.log("Eres menor de edad");
    }
}

//Ejercicio 2
function pintar_ruta(){
    console.log("El acceso a la ruta C:\\\\usuario\\tarda 1'23\", algo considerado \"lento\" en la actualidad.");
}

//Ejercicio 3
function pintar_ruta_v2(){
    var substrng1 = "El acceso a la ruta C:\\\\usuario\\tarda 1'23\", algo";
    var substrng2 = " considerado \"lento\" en la actualidad.";
    console.log(substrng1 + substrng2);
}

//Ejercicio 4
function muestra_potencia(){
    var num = 2*Math.pow(10,-9);
    console.log("El valor de 2*10^-9 es: " + num);
}

//Ejercicio 5
function distintas_bases(num){
    //Transforma num a binario
    var numDecimal = num.toString(2);
    console.log("El número " + num + " en binario es: " + numDecimal);
}

//Ejercicio 10
function check_ambito_variable(){
    let prueba = 5;
    console.log("La variable prueba tiene como valor " + prueba);

    {
        var prueba2 = 10;
        console.log("Insisto. La variable prueba tiene como valor " + prueba + " también dentro del bloque anidado");
        console.log("Ademas, el bloque interior alberga la variable prueba2 que vale " + prueba2);
    }

    console.log("Por ultimo, desde el bloque principal, intento acceder al valor de una variable interna: " + prueba2);
}

//Ejercicio 11
function definir_y_mostrar_array(){
    var array = ["Alberto","Juan","Sofia"];

    /*for(let i = 0; i < array.length; i ++){
        console.log(array[i]);
    }*/

    console.table(array);
}

//Ejercicio 12
function contar_y_temporizar(){

    let valor = 0;

    let initTime = new Date();

    for(let i = 0; i < 10000000; i++){
        valor += 10;
    }

    let endTime = new Date();

    console.log("Valor: ", valor);
    console.log("El algoritmo ha tardado " + ((endTime - initTime)/1000) + " segundos");

}

// Ejercicio 15
function pedir_datos(){
    let seguir = true;

    while(seguir){
        let nombre = prompt("Introduzca su nombre: ");
        console.log("Hola " + nombre);
        seguir = confirm("Desea continuar en el programa?"); //Confirm devuelve un valor boolean en función de la respuesta
        console.log("Has decidido continuar? " + seguir);
    }

    console.log("FIN DEL PROGRAMA");
}

/* Ejercicio 16:  Realiza un programa que pida por pantalla tu edad, tu nombre, tu ciudad,  tu 
dirección y tu teléfono y que al finalizar muestre un alerta dándote la enhorabuena si 
la edad de tu cumpleaños elevado a 5 es igual a tu número de teléfono o si 
simplemente tu ciudad es “Mairena del Alcor” */
function datos_personales(){
    let edad = document.getElementById("edad").value;
    let nombre = document.getElementById("nombre").value;
    let ciudad = document.getElementById("ciudad").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;

    console.log("La información recogida es : " + edad + nombre + ciudad + direccion + telefono);

    if(edad**5 === telefono || ciudad.toUpperCase() === "Mairena del alcor".toUpperCase()){
        console.log("Enhorabuena!!!");
    }
}

/* Ejercicio 17: Haz un programa que dado un número de entrada cuente sus cifras y las muestre 
por consola */
function cuenta_cifras(){
    let numero = Math.abs(prompt("Introduce un numero: "));
    let cifras = 0;
    while(numero >= 1){
        cifras ++;
        numero = numero / 10;
    }

    console.log("El numero tiene " + cifras + " cifras");
}

/* Ejercicio 18: Realiza un programa que dada tu edad indique si eres niño (0-16 años), joven (17-25 años), 
adulto (26 - 60 años) o senior, en adelante. */
function calcula_edad(){
    let edad = document.getElementById("edad").value;
    switch(true){
        case edad >= 0 && edad <= 16: 
            pintar_mensaje("Eres un niño", true);
            break;
        case edad > 16 && edad <=25: 
            pintar_mensaje("Eres un joven", true);
            break;
        case edad >25 && edad <=60:
            pintar_mensaje("Eres un adulto", true);
            break;
        case edad > 60:
            pintar_mensaje("Eres senior", true);
            break;
        default :
            pintar_mensaje("Error! Edad introducida no valida", false);
            break;
    }
}

function pintar_mensaje(mensaje, isOk){

    let aviso = document.getElementById("aviso");
    aviso.textContent = mensaje;

    if(isOk){
        aviso.style.color ="green";
    }else{
        aviso.style.color = "red";
    }

}

/* Ejercicio 19: Realiza un programa que calcule un número aleatorio entre 1 y 10  y pida intentos hasta 
que aciertes. Al finalizar debe mostrar por pantalla el número de intentos que has realizado. */
function acierta_aleatorio(){
    const aleat = Math.floor((Math.random() * 10) + 1);
    let intento = 0;

    alert("Se ha calculado un numero aleatorio. ¿Eres capaz de acertarlo?");

    do{
        intento ++;
        var valor_intento = Number(prompt("Intento " + intento));
    }while(valor_intento != aleat);

    console.log("Enhorabuena! has acertado. El numero secreto era el " + aleat);
    console.log("Has necesitado " + intento + " intentos");

}

/* Ejercicio 20: Muestra por pantalla el número de múltiplos de N que existen entre N y 100 */
function imprime_multiplos(){
    let n = Number(prompt("Introduce un numero"));
    let multiplos = 0;
    const max = 100;

    for(let i = n+1; i < max; i++){
        if(i%n == 0){
            multiplos ++;
            console.log("Multiplo encontrado " + i);
        }
    }

    console.log("El numero " + n + " tiene " + multiplos + " multiplos");
}