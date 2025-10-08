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

//Ejercicio 1
function cifras_num(){
    var cifras = 0;

    //Validación
    do{
        var num = Number(prompt("Introduce un número: "));
        if(isNaN(num)){
            console.error("Por favor, introduzca un numero correcto");
        }
    }while (isNaN(num));
    
    //Cuenta
    do{
        cifras++;
        Math.trunc(num = num / 10)
        
    }while(num >=1);

    console.log("El numero tiene " + cifras + " cifras");
}

//Ejercicio 2
function pinta_triangulo(){
    let n = Number(prompt("Introduce el lado del triangulo"));
    let triangulo = "";
    for(let i = 0; i <= n; i++){
        triangulo +=  "\n";
        
        //Pintamos espacios
        for(let j = 0; j < n - i ; j++){
            triangulo += " ";
        }

        //Pintamos asteriscos
        for(let k = 0; k < (2*i-1); k++){
            triangulo += "*";
        }
    }
    
    console.log(triangulo);
}