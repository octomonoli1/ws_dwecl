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

//Ejercicio 4: Almacena y muestra por consola una variable que almacene el valor de 2*10^-9
function muestra_potencia(){
    var num = 2*Math.pow(10,-9);
    console.log("El valor de 2*10^-9 es: " + num);
}

