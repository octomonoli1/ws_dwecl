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