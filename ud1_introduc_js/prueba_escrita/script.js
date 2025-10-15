//Ejercicio 1
function analiza_frase(){
    //Inicializamos las variables y constantes necesarias
    const LETRA = 'a';
    const SPACE = ' ';
    
    var frase = window.prompt("Dime algo: ");
    var numChar = 0;
    var numPalabras = frase? 1 : 0;
    var numA = 0;
    var acronimo = frase? frase[0] : '';

    console.log(frase);

    //Aprovechamos el mismo bucle para obtener todos los restultados
    for(let i = 0; i < frase.length; i++){
        if(frase[i] != SPACE){
            numChar++;
        }else{
            numPalabras++;
            acronimo += frase[i+1];
        }

        if(frase[i].toLowerCase() == LETRA){
            numA++;
        }
    }

    //Mostramos el resultado por pantalla
    console.log("Numero de caracteres (con espacios) es: " + frase.length);
    console.log("Numero de caracteres (sin espacios) es: " + numChar);
    console.log("Numero de palabras: " + numPalabras);
    console.log("Numero de A en la frase: " + numA);
    console.log("Aqui tienes tu acronimo: " + acronimo.toUpperCase());

}

//Ejercicio 2
function check_descuento(edad, es_premium, compras_mes, gasto_total){
    //Inicializamos las variables y constantes necesarias
    const MAYOR_EDAD = 18;
    const COMPRAS_EXIGIDAS = 5;
    const GASTO_EXIGIDO = 200;
    
    return edad >= MAYOR_EDAD && (es_premium || (compras_mes > COMPRAS_EXIGIDAS && gasto_total > GASTO_EXIGIDO));
}

/* Esta funcion de prueba no la pedia en el ejercicio 2 (solo pruebas) */
function test_ej2() {
    let edad = 16;
    let es_premium = true;
    let compras_mes = 4;
    let gasto_total = 150;

    console.log("El cliente es premium?: " + check_descuento(edad, es_premium, compras_mes, gasto_total));
}

// Ejercicio 3
function juega_acierta(){

    //Calculamos el numero secreto aleatorio
    const LIMITE_INTENTOS = 20;
    var num_secreto = Math.floor(Math.random()*10+1);
    var intentos = 0;

    //Pedimos numero al jugador
    do{
        var numero = prompt("Introduce un numero: ");
        intentos++;
    }while(numero != num_secreto && intentos < LIMITE_INTENTOS)
    
    if(intentos < LIMITE_INTENTOS){
        console.log("Enhorabuena has acertado el numero en " + intentos + " intentos");
    }else{
        console.log("Ohhh! has agotado todos los intentos. Prueba de nuevo");
    }
}

//Ejercicio 4
function cuenta_atras(n){
    if(n == 0){
        console.log("Despega!");
    }else{
        console.log(n);
        cuenta_atras(n-1);
    }
}