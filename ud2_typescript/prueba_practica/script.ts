window.onload = () => {
    cargar_datos_cookie();
}

function ejectuar_accion(): void{
    let select: HTMLSelectElement = document.getElementById("opcion") as HTMLSelectElement;
    switch(select.value){
        case "reves":
            invertir_nombre();
            break;
        case "redirect":
            redirigir_red_social();
            break;
        case "edad":
            calcula_edad();
            break;
        case "cookies":
            almacena_cookies();
            break;
        default:
            console.error("Opción escogida no valida");
            break;
    };
}

function invertir_nombre(): void{
    let inputNombre: HTMLInputElement = $inputById("nombre");3
    let inputFecha: HTMLInputElement = $inputById("fecha_nac");
    let result: HTMLDivElement = document.getElementById("result") as HTMLDivElement;
    let nombreAlreves: string = "";
    //Funcion comunidad JS: inputNombre.value.split("").reverse().join("");
    for(let i: number = inputNombre.value.length -1 ; i >= 0 ; i --){
        nombreAlreves += inputNombre.value[i];
    }

    //DUDA: Porque del ?
    //Es equivalente a un operador ternario que comprueba la nulidad del objeto
    result.textContent = nombreAlreves.toUpperCase() + inputFecha.valueAsDate?.getFullYear();
}

function redirigir_red_social(): void{
    let inputUrl: HTMLInputElement = $inputById("url");
    let inputApellidos: HTMLInputElement = $inputById("apellidos");
    let regExp: RegExp = new RegExp("^https:\/\/");
    if(regExp.test(inputUrl.value)){
        //Redirige
        let apellido: string = inputApellidos.value.split(" ")[0];
        let direccion: string = inputUrl.value + "/search?q=" + apellido;
        window.location.href= direccion;
    }else{
        //Muestra error
        mensaje_error();
    }

}

function calcula_edad(): void{
    let inputEdad: HTMLInputElement = $inputById("fecha_nac");
    const result: HTMLDivElement = document.getElementById("result") as HTMLDivElement;
    let fechaNacimineto: Date = inputEdad.valueAsDate as Date;
    let fechaActual: Date = new Date();
    let edadCalculada: number = fechaActual.getFullYear() - fechaNacimineto.getFullYear();
    result.textContent = "Tienes " + edadCalculada + " años.";
}

function almacena_cookies(): void{
    document.cookie = "nombre=" + $inputById("nombre").value;
    document.cookie = "apellidos=" + $inputById("apellidos").value;
    document.cookie = "edad=" + $inputById("edad").value;
    document.cookie = "telefono=" + $inputById("telefono").value;
    document.cookie = "fechaNac=" + $inputById("fecha_nac").value;
    document.cookie = "url=" + $inputById("url").value;
}

//Helpers
function $inputById(id: string): HTMLInputElement{
    return document.getElementById(id) as HTMLInputElement;
}

function $getCookieByKey(key: string): string{
    let arrayCookie = document.cookie.split(";");
    let result = "";
    for(let i = 0; i < arrayCookie.length; i++){
        let clave = arrayCookie[i].split("=")[0];
        let valor = arrayCookie[i].split("=")[1];
        if(clave.trim() == key){
            result = valor;
        }
    }

    return result;
}

//Para despues
function mensaje_error(): void{
    const result: HTMLDivElement = document.getElementById("result") as HTMLDivElement;
    result.textContent = "";
    let errorParagraph: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
    errorParagraph.textContent = "Debe incluir la cabecera https";
    errorParagraph.style.color = "red";
    errorParagraph.style.fontWeight = "bold";
    result.appendChild(errorParagraph);
}

function cargar_datos_cookie(): void{
    $inputById("nombre").placeholder = $getCookieByKey("nombre");
    $inputById("apellidos").placeholder = $getCookieByKey("apellidos");
    $inputById("edad").placeholder = $getCookieByKey("edad"); 
    $inputById("telefono").placeholder = $getCookieByKey("telefono");
    $inputById("fecha_nac").placeholder = $getCookieByKey("fecha_nac");
    $inputById("url").placeholder = $getCookieByKey("url");
}

function actualizar_web(): void{
    window.location.reload();
}