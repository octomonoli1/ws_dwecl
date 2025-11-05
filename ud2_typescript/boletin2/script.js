var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Esto se lanza siempre cuando carga todo el HTML
window.onload = function () {
    setInterval(actualizar_reloj, 1000);
    cuadricula_alumnos();
    ej_cookies();
};
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
    /*if (userAgent.includes("Chrome") && !userAgent.includes("Edg") && !userAgent.includes("OPR")) {
        navegador = "Chrome";
    } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
        navegador = "Safari";
    } else if (userAgent.includes("Firefox")) {
        navegador = "Firefox";
    } else if (userAgent.includes("Edg")) {
        navegador = "Edge";
    } else if (userAgent.includes("OPR") || userAgent.includes("Opera")) {
        navegador = "Opera";
    }*/
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
function navegar() {
    var inputUrl = document.getElementById("url");
    var url = inputUrl.value;
    url = "https:\\" + url;
    window.location.href = url;
}
function count_elements() {
    var list = document.getElementById("shopping-list");
    console.log("Hay " + list.childElementCount + " elementos ");
}
function add_element() {
    var new_element = document.createElement("li");
    new_element.textContent = window.prompt("Introduce el nuevo elemento ");
    var list = document.getElementById("shopping-list");
    list.appendChild(new_element);
}
function show_first_last_element() {
    var _a, _b;
    var list = document.getElementById("shopping-list");
    console.log("Primer elemento: " + ((_a = list.firstElementChild) === null || _a === void 0 ? void 0 : _a.textContent));
    console.log("Ultimo elemento: " + ((_b = list.lastElementChild) === null || _b === void 0 ? void 0 : _b.textContent));
}
function duplicate_element() {
    //Obtenemos el nodo padre <ol>
    var list = document.getElementById("shopping-list");
    var id = Number(window.prompt("Dime el producto a duplicar"));
    var childs = [];
    for (var i = 0; i < list.childElementCount; i++) {
        childs.push(list.children[i]);
    }
    var dupl = document.createElement("li");
    dupl.textContent = childs[id - 1].textContent;
    list.appendChild(dupl);
}
function edit_element() {
    //Obtenemos el nodo padre <ol>
    var list = document.getElementById("shopping-list");
    var id = Number(window.prompt("Dime el producto a duplicar"));
    var text = window.prompt("Dime el nuevo valor ");
    var childs = [];
    for (var i = 0; i < list.childElementCount; i++) {
        childs.push(list.children[i]);
    }
    childs[id - 1].textContent = text;
}
function show_elements() {
    var list = document.getElementById("shopping-list");
    var childs = __spreadArray([], list.children, true).map(function (child) { return child; });
    //Funcion flecha para recorrer y mostrar
    childs.forEach(function (element) { return console.log(element.textContent); });
}
function cuadricula_alumnos() {
    var container = document.getElementById("contenedor2");
    var alumnos = ["Fran", "Xexu", "Canijo", "Salvador", "Vanesa", "Raquel", "Emilio", "Javier", "Amanda", "Maria"];
    /*for(let i = 0; i < alumnos.length; i++){
        container.appendChild(crea_ficha(alumnos[i]));
    }*/
    alumnos.forEach(function (alumno) { return container.appendChild(crea_ficha(alumno)); });
}
function crear_nuevo_alumno() {
    var nombre = prompt("Introduce el nombre del alumno");
    var container = document.getElementById("contenedor2");
    var ficha = crea_ficha(nombre);
    container.appendChild(ficha);
}
function crea_ficha(alumno) {
    var ficha = document.createElement("div");
    ficha.textContent = alumno;
    ficha.style.backgroundColor = color_aleatorio();
    return ficha;
}
function color_aleatorio() {
    var coloresPastel = [
        "#FFB3BA", // rosa pastel
        "#FFDFBA", // durazno
        "#FFFFBA", // amarillo pastel
        "#BAFFC9", // verde menta
        "#BAE1FF", // azul bebé
        "#E0BBE4", // lila
        "#F3C6E7", // rosa suave
        "#C1FFD7", // verde pastel claro
        "#B0E0E6", // azul pastel
        "#FFD1DC", // rosa bubblegum
        "#FFE4B5", // melocotón suave
        "#D5E8D4", // verde menta claro
        "#FBE7C6", // beige pastel
        "#E3F2FD", // azul celeste
        "#FADADD", // rosa pálido
        "#FFFACD", // limón suave
        "#D8BFD8", // lavanda
        "#C3FDB8", // verde claro
        "#E6E6FA", // lavanda muy suave
        "#FFCCE5" // rosa chicle pastel
    ];
    var idxAleat = Math.floor(Math.random() * coloresPastel.length) + 1;
    return coloresPastel[idxAleat];
}
function ej_cookies() {
    //Escribir cookie
    var cookieIdioma = "lang=ES";
    var cookieCurrency = "currency=EUR";
    document.cookie = cookieIdioma;
    document.cookie = cookieCurrency;
    //Leer cookies
    var arrayCookies = document.cookie.split("; ");
    arrayCookies.forEach(function (cookie) { return console.log("Cookie: " + cookie); });
    //Leemos una en concreto (lang)
    var cookieAbuscar = window.prompt("Que cookie quieres consultar");
    var valor = "";
    for (var i = 0; i < arrayCookies.length; i++) {
        var claveValor = arrayCookies[i].split("=");
        console.log(claveValor);
        if (claveValor[0].trim() == cookieAbuscar) {
            valor = claveValor[1];
        }
    }
    console.log("El valor de la cookie " + cookieAbuscar + " es " + valor);
    //Elimiar automaticamente con fecha expiracion
    var date = new Date();
    date.setSeconds(date.getSeconds() + 30000);
    document.cookie = "expires=" + date.toUTCString();
}
