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

//Ejercicio 01
function ano_bisiesto(){
    let year = Number(prompt("Introduce un año: "));
    if((year%4 === 0 && year%100 === 0) || (year % 400 === 0)){
        console.log("El año es bisiesto");
    }else{
        console.log("El año no es bisiesto");
    }
}

//Ejercicio 02
function calcula_calificacion(){
    let nota = Math.round(Number(prompt("Introduce tu nota: ")));
    let nota_cualitativa = null;

    switch(true){
        case nota >= 0 && nota < 5:
            nota_cualitativa = 'INSUFICIENTE';
            break;
        case nota >= 5 && nota < 6:
            nota_cualitativa = 'SUFICIENTE';
            break;
        case nota >= 6 && nota < 7:
            nota_cualitativa = 'BIEN';
            break;
        case nota >= 7 && nota < 9:
            nota_cualitativa = 'NOTABLE';
            break;
        case nota >= 9 && nota <= 10:
            nota_cualitativa = 'SOBRESALIENTE';
            break;
        default:
            console.error("Error! La nota introducida no es válida.");
    }

    if(nota_cualitativa != null){
        console.log("Tu nota es: " + nota_cualitativa);
    }
    
}

//Ejercicio 03
let palabras = "abcdefghijklmnopqrstuvwxyz"; 
let caracteres = "1234567890()/=*#?"; 

function genera_pass(fuerte){

    let password = "";
    let caracteres_disponibles = fuerte? palabras + caracteres : palabras;;
    let longitud = Number(prompt("Introduce la longitud de la password: "));

    for(let i = 0; i < longitud; i++){
        let indice_aleat = Math.floor(Math.random()*caracteres_disponibles.length);
        password += caracteres_disponibles.charAt(indice_aleat);
    }

    console.log("La pass generada es: " + password);
    return password;

}

function suma_n_recursiva(num){
    if(num === 1){
        return 1;
    }else{
        return suma_n_recursiva(num - 1) + num;
    }
}