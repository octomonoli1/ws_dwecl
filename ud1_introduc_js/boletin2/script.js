let colores = [
    "#FFD1DC", 
    "#FFE5B4", 
    "#FFFACD", 
    "#BFD8B8", 
    "#AEC6CF", 
    "#CBAACB", 
    "#E3E4FA", 
    "#AAF0D1", 
    "#FF7F50", 
    "#FFD8B1"
];

let ejercicios = document.getElementsByClassName("ejercicio");

window.onload = function() {
    for(let i = 0; i < ejercicios.length; i++){
        let colorAleatorio = Math.random() * colores.length;
        ejercicios[i].style.backgroundColor = colores[Math.floor(colorAleatorio)];
    }
};

//Ejercicio 0
function calcula_fibonacci(){
    let num = Number(prompt("Introduce un numero"));
    console.log("El valor fib(" + num + ") es " + fibonacci(num));
}

function fibonacci(num){
    let resultado;
    //Comprobamos los casos base
    if(num === 0){
        resultado = 0;
    }else if(num === 1){
        resultado = 1;
    }else{
        //Aqui esta la llamada recursiva
        resultado =  fibonacci(num-1) + fibonacci(num-2);
    }
    
    return resultado;
}

//Ejercicio 1
function calcula_factorial(isRec){
    let num = Number(prompt("Introduce un numero"));
    let resultado;
    if(isRec){
        resultado = factorial_recursiva(num);
    }else{
        resultado = factorial_tradicional(num);
    }
    console.log("El valor fact(" + num + ") es " + resultado);
}

function factorial_recursiva(num){
    if(num === 1){
        return 1;
    }else{
        return num * factorial_recursiva(num-1);
    }
}

function factorial_tradicional(num){
    let factorial = 1;
    for(let i = 1; i <= num; i++){
        factorial *= i;
    }

    return factorial;
}

function transformar_dias_horas(){
    let num_dias = Number(prompt("Introduce un numero de dias: "));
    const horas = num_dias * 24;
    const minutos = horas* 60;
    const segundos = minutos * 60; 

    console.log(num_dias + " dias son " + horas + " horas");
    console.log(num_dias + " dias son " + minutos + " minutos");
    console.log(num_dias + " dias son " + segundos + " segundos");

}

function calcular_ec_2grado(){
    let a = Number(prompt("Introduce el coeficiente A: "));
    let b = Number(prompt("Introduce el coeficiente B: "));
    let c = Number(prompt("Introduce el coeficiente C: "));

    let delta = Math.pow(b,2) - 4*a*c;

    if(delta < 0){
        console.error("No hay solución a la ecuación");
    }else if (delta == 0){
        let result = (-b / (2*a)).toFixed(2);
        console.log("La solución de " + a + "x^2 + " + b + "x + " + c + " = 0 es (" + result + ")");
    }else{
        let result1 =  ((-b + Math.sqrt(delta))/(2*a)).toFixed(2);
        let result2 =  ((-b - Math.sqrt(delta))/(2*a)).toFixed(2);
        console.log("La solución de " + a + "x^2 + " + b + "x + " + c + " = 0 es (" + result1 + ", " + result2 + ")");
    }
}

function calcula_letra(){
    //const letrasDni = "TRWAGMYFPDXBNJZSQVHLCKE"; En este caso se usaria charAt en lugar de []
    const letrasDni = ["t", "r", "w", "a", "g", "m", "y", "f", "p", "d", "x", "b", "n", "j", "z", "s", "q", "v", "h", "l", "c", "k", "e"];
    do{
        var dniSinLetra = Number(prompt("Introduce los numeros de tu DNI: "));
    }while(isNaN(dniSinLetra));
    
    console.log(letrasDni[dniSinLetra%23]);
}

function mostrar_menu(){
    do{
        var opt = window.prompt("Elige una opción: " 
            + "\n\ta. Calcular el área de un triángulo"
            + "\n\tb. Calcular el área de un rectángulo"
            + "\n\tc. Calcular el área del círculo"
            + "\n\td. Salir");

            switch(opt){
                case 'a': 
                    area_triangulo();
                    break;
                case 'b': 
                    area_rectangulo();
                    break;
                case 'c':
                    area_circulo();
                    break;
                case 'd':
                    console.log("Adios!");
                    break;
                default: 
                     console.error("La opción introducida no es correcta");
            }
            
    }while(opt != 'd' && opt != null);
}

function area_triangulo(){
    let base = number(prompt("Introduce la base: "));
    let altura = number(prompt("Introduce la altura: "));
    
    return (base*altura)/2;
}

function area_rectangulo(){
    let lado1 = number(prompt("Introduce el lado 1: "));
    let lado2 = number(prompt("Introduce el lado 2: "));

    return lado1*lado2;
}

function area_circulo(){
    let radio = number(prompt("Introduce el radio: "));

    return Math.PI * Math.pow(radio,2);

}