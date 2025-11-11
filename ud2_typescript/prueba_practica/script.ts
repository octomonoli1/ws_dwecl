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
    let nombreAlreves = "";
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
}

function calcula_edad(): void{
    let inputEdad: HTMLInputElement = $inputById("edad");
    
}

function almacena_cookies(): void{
    
}

//Helpers
function $inputById(id: string): HTMLInputElement{
    return document.getElementById(id) as HTMLInputElement;
}

//Para despues
function mensaje_error(): void{
    const result: HTMLDivElement = document.getElementById("result") as HTMLDivElement;
    result.textContent = "";
    let errorParagraph: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
    errorParagraph.textContent = ""
}