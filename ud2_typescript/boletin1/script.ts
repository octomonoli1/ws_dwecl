//Ejercicio 1
function ej1(): void{

    //No existe date primitivo
    let fecha: Date = new Date();

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
function valida_form(){    
    const regExp = new RegExp("[^\s@]+@[^\s@]+\.[^\s@]+$"); //Con fallos (hay que corregir)
    
    //Aplico la validacion de la expresion regular
    if(regExp.test($inputValue("email"))){
        //Si test devuelve true quiere decir que el texto "email" cumple la expresion reg.
        $writeNode("ok","El email es valido") //Aquí escribo
        $writeNode("error",""); //Aquí escribo tambien (lo que pasa que borra)
    }else{
        //Si es false quiere decir que el texto "email" no cumple la expresion regular.
        $writeNode("ok","") //Aquí escribo (borrando el contenido)
        $writeNode("error", "El email no cumple la expresion") //Aqui tambien escribo
    }
}

function ej3(){
    let ventanaNueva = window.open("https:www.google.es","miVentana");
    ventanaNueva?.document.write("<h1>TITULO NUEVO</h1>");
}

function redirect_to() : void{
    const regexp = new RegExp("^https:\/\/");
    const url = $inputValue("url");
    if(regexp.test(url)){
        window.location.href = url;
    }else{
        $writeNode("error2", "Por favor introduzca una URL válida");
        window.setTimeout(() => $writeNode("error2",""), 5000);
    }
    
}

//Helpers (comunes para todo el boletín)
function $inputValue(id: string) : string{
    const input = document.getElementById(id) as HTMLInputElement; //Lectura
    let result = "";

    if(input){
        result = input.value; //Recojo el valor (aqui es donde leo)
    }

    return result;
}

function $writeNode (id: string, msg: string) : void {
    const nodo = document.getElementById(id) as HTMLElement; //Escritura

    if(nodo){
        nodo.textContent = msg;
    }

}

//Ejemplo de funciones normales y su definición corta (flecha)
function suma1(a: number, b: number) : number{
    const result = a + b;
    return result;
}

const suma2 = (a: number, b:number) => a+b;

suma1(5,5);
suma2(1,2);

//Uso de funciones predefinidas en JS que hagan uso de funciones flecha: filter,reduce,foreach,some,every
const arrayPruebas = [2,4,6,8,10];

//1.- Filter
const arrayMayorCinco1 = [];
for(let i = 0; i < arrayPruebas.length; i++){
    if(arrayPruebas[i] > 5){
        arrayMayorCinco1.push(arrayPruebas[i]);
    }
}

const arrayMayorCinco2 = arrayPruebas.filter(data => data > 5);

console.log(arrayMayorCinco1);
console.log(arrayMayorCinco2);

//2.- Map
const arrayDoble1 = [];

for(let i = 0; i < arrayPruebas.length; i++){
    arrayDoble1.push(arrayPruebas[i]*2);
}

const arrayDoble2 = arrayPruebas.map(data => data*2);

console.log(arrayDoble1);
console.log(arrayDoble2);

//2.a.- Combo entre filter y map (filtrado y transormación)
const arrayMayorCincoYDoble = arrayPruebas
    .filter(data => data > 5)
    .map(data => data*2);

console.log(arrayMayorCincoYDoble);

let total1 = 0;
for(let i = 0; i < arrayPruebas.length; i++){
    total1 = total1 + arrayPruebas[i];
}

const total2 = arrayPruebas.reduce((acc, data) => acc + data);

console.log(total1);
console.log(total2);

//3.- Foreach
for(let i = 0; i < arrayPruebas.length; i++){
    console.log("Este es el elemento " + (i+1) + ": " + arrayPruebas[i]);
}

arrayPruebas.forEach((data, i) => console.log("Este es el elemento " + (i+1) + ": " + data));

//4.- Some
console.log(arrayPruebas.some(data => data > 8));

//5.- Every
console.log(arrayPruebas.every(data => data > 0));

//Definir una función propia donde uno de sus parametros sea una función
function resuelve_operacion(callback: (a:number,b: number) => number, a:number,  b:number){
    console.log("Aqui todavia no he calculado la operacion");
    const result = callback(a,b);
    console.log("Aqui ya la he calculado y es: "  + result);
    return result;
}

console.log(resuelve_operacion((a,b)=>a/b,10,5));