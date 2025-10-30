function cambiar_titulo() {
    var titulo = prompt("Introduce un nuevo titulo: ");
    var nodoTitulo = document.getElementById("titulo");
    nodoTitulo.textContent = titulo;
}
function cambiar_fondo() {
    //Por defecto el DOM ya tiene un atributo que representa el body
    var body = document.body;
    if (body.style.backgroundColor == "white") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
    else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
}
function analiza_edad() {
    //Recojo el valor numerico desde el input con la edad del usuario
    var input = document.getElementById("edad");
    var edad = Number(input.value);
    console.log(edad);
    //Creo el nodo <ol> raíz que contendra los elementos de la lista y modifico su estilo
    var lista = document.getElementById("resultado");
    lista.innerHTML = "";
    lista.style.fontWeight = "bold";
    lista.style.color = "green";
    lista.type = "a";
    //a. Compruebo si es mayor o menor de edad
    var mayorMenor = document.createElement("li");
    mayorMenor.textContent = edad > 18 ? "Eres mayor" : "Eres menor";
    //b. Compruebo si la edad es o no par
    var parImpar = document.createElement("li");
    parImpar.textContent = edad % 2 == 0 ? "La edad es par" : "La edad es impar";
    //c. Calcular divisores de la edad
    var divisores = "";
    for (var i = 1; i <= edad; i++) {
        if (edad % i == 0) {
            divisores += i + ", ";
        }
    }
    divisores = divisores.substring(0, divisores.length - 2); //Por culpa de Juan Antonio (M. Elite)
    var listaDivisores = document.createElement("li");
    listaDivisores.textContent = divisores;
    //d. Clasifica edad
    var rangoEdad = "";
    switch (true) {
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
    var edadTexto = document.createElement("li");
    edadTexto.textContent = rangoEdad;
    //Añado cada elemento, a, b, c....
    lista.appendChild(mayorMenor);
    lista.appendChild(parImpar);
    lista.appendChild(listaDivisores);
    lista.appendChild(edadTexto);
}
function cambiar_nombre() {
    var name = prompt("Introduce tu nombre: ");
    var saludo = document.createElement("p");
    document.body.appendChild(saludo);
    saludo.textContent = "Hola, " + name + "!";
}
function cambiar_color() {
    var select = document.getElementById("color");
    var colorOption = select.options[select.selectedIndex];
    var color = colorOption.value;
    var saludo = document.getElementById("saludo");
    saludo.style.color = color;
}
function info_navegador() {
    var input = document.getElementById("option");
    var option = input.value;
    switch (option) {
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
function idioma_navegador() {
    console.log("Idioma " + window.navigator.language);
}
function nombre_navegador() {
    var userAgent = window.navigator.userAgent;
    var navegador = "Desconocido";
    if (userAgent.includes("Chrome") && !userAgent.includes("Edg") && !userAgent.includes("OPR")) {
        navegador = "Chrome";
    }
    else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
        navegador = "Safari";
    }
    else if (userAgent.includes("Firefox")) {
        navegador = "Firefox";
    }
    else if (userAgent.includes("Edg")) {
        navegador = "Edge";
    }
    else if (userAgent.includes("OPR") || userAgent.includes("Opera")) {
        navegador = "Opera";
    }
    console.log("Nombre navegador: " + navegador);
}
function cookies_navegador() {
    console.log("El navegador " + (window.navigator.cookieEnabled ? "si" : "no") + " tiene habilitadas las cookies");
}
function tam_navegador() {
    console.log("El navegador mide " + window.innerWidth + " x " + window.innerHeight);
}
function actualizar_reloj() {
    var now = new Date();
    var hora = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    var reloj = document.getElementById("reloj");
    reloj.textContent = hora;
}
window.onload = function () { return setInterval(actualizar_reloj, 1000); };
function navegar() {
    var inputUrl = document.getElementById("url");
    var url = inputUrl.value;
    if (!url.includes("https://")) {
        url = "https:\\" + url;
    }
    window.location.href = url;
}
