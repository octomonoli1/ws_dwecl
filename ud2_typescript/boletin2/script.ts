function cambiar_titulo(){
    let titulo: string = prompt("Introduce un nuevo titulo: ") as string;
    let nodoTitulo: HTMLHeadingElement = document.getElementById("titulo") as HTMLHeadingElement;
    nodoTitulo.textContent = titulo; 
}

function cambiar_fondo(){
    //Por defecto el DOM ya tiene un atributo que representa el body
    let body: HTMLBodyElement = document.body as HTMLBodyElement;

    if(body.style.backgroundColor == "white"){
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }else{
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }

}

function analiza_edad(){

    //Recojo el valor numerico desde el input con la edad del usuario
    let input: HTMLInputElement = document.getElementById("edad") as HTMLInputElement;
    let edad: number = Number(input.value);
    console.log(edad);

    //Creo el nodo <ol> raíz que contendra los elementos de la lista y modifico su estilo
    let lista: HTMLOListElement = document.getElementById("resultado") as HTMLOListElement;
    lista.innerHTML ="";
    lista.style.fontWeight = "bold";
    lista.style.color = "green";
    lista.type = "a";

    //a. Compruebo si es mayor o menor de edad
    let mayorMenor: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    mayorMenor.textContent = edad > 18? "Eres mayor" : "Eres menor";

    //b. Compruebo si la edad es o no par
    let parImpar: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    parImpar.textContent = edad %2 == 0? "La edad es par" : "La edad es impar";

    //c. Calcular divisores de la edad
    let divisores: string = "";

    for(let i = 1; i <= edad; i++){
        if(edad%i== 0){
            divisores += i + ", ";
        }
    }

    divisores = divisores.substring(0, divisores.length - 2); //Por culpa de Juan Antonio (M. Elite)

    let listaDivisores: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    listaDivisores.textContent = divisores;

    //d. Clasifica edad
    let rangoEdad ="";
    switch(true){
        case edad >= 0 && edad < 15:
            rangoEdad = "Niño";
            break;
        case edad >= 15 && edad < 30:
            rangoEdad = "Joven";
            break;
        case edad >= 30 && edad < 60:
            rangoEdad = "Adulto";
            break;
        case edad >= 60:
            rangoEdad = "Mayor";
            break;
        default:
            console.error("Edad no valida");
    }

    let edadTexto: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    edadTexto.textContent = rangoEdad;

    //Añado cada elemento, a, b, c....
    lista.appendChild(mayorMenor);
    lista.appendChild(parImpar);
    lista.appendChild(listaDivisores);
    lista.appendChild(edadTexto);
}

function cambiar_nombre(){
    let name: string = prompt("Introduce tu nombre: ") as string;
    let saludo: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
    document.body.appendChild(saludo

    )
    saludo.textContent = "Hola, " + name + "!";
}

function cambiar_color(){
    let select: HTMLSelectElement = document.getElementById("color") as HTMLSelectElement;
    let colorOption: HTMLOptionElement = select.options[select.selectedIndex] as HTMLOptionElement;
    let color = colorOption.value;

    let saludo: HTMLParagraphElement = document.getElementById("saludo") as HTMLParagraphElement;
    saludo.style.color = color;
}

function info_navegador(){
    let input: HTMLInputElement = document.getElementById("option") as HTMLInputElement;
    let option : string = input.value;

    switch(option){
        case "a":
            idioma_navegador();
            break;
        case "b":
            nombre_navegador();
            break;
        case "c": 
            cookies_navegador();
            break;
        case "d":
            tam_navegador();
            break;
        default:
            console.error("La opción introducida no es correcta");
    }
}

function idioma_navegador(): void {
    console.log("Idioma " + window.navigator.language);
}

function nombre_navegador() : void {

    let userAgent: string = window.navigator.userAgent as string;
    let navegador = "Desconocido";

    if (userAgent.includes("Chrome") && !userAgent.includes("Edg") && !userAgent.includes("OPR")) {
        navegador = "Chrome";
    } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
        navegador = "Safari";
    } else if (userAgent.includes("Firefox")) {
        navegador = "Firefox";
    } else if (userAgent.includes("Edg")) {
        navegador = "Edge";
    } else if (userAgent.includes("OPR") || userAgent.includes("Opera")) {
        navegador = "Opera";
    }

    console.log("Nombre navegador: " + navegador);
}

function cookies_navegador(): void {
    console.log("El navegador " + (window.navigator.cookieEnabled? "si" :  "no") + " tiene habilitadas las cookies");
}

function tam_navegador(): void {
    console.log("El navegador mide " + window.innerWidth + " x " + window.innerHeight);
}

function actualizar_reloj(): void{
    let now = new Date();
    let hora = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    let reloj: HTMLParagraphElement = document.getElementById("reloj") as HTMLParagraphElement;
    reloj.textContent = hora;
}

window.onload = () => setInterval(actualizar_reloj, 1000);

function navegar(){
    let inputUrl: HTMLInputElement = document.getElementById("url") as HTMLInputElement;
    let url: string = inputUrl.value;

    if(!url.includes("https://")){
        url = "https:\\" + url;
    }

    window.location.href = url;
}