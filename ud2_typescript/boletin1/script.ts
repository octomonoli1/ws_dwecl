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
    const regExp = new RegExp("blablabla");
    if(regExp.test($inputValue("email"))){
        $writeNode("ok","El email introducido es válido");
    }else{
        $writeNode("error","El email introducido no cumple la validación");
    }
}

//Helpers (comunes para todo el boletín)
function $inputValue(id: string) : string{
    const input = document.getElementById(id) as HTMLInputElement;
    var result = "";
    
    if(input){
        result = input.value;
    }

    return result;
}

function $writeNode(id: string, msg: string) : void{
    const node = document.getElementById(id) as HTMLElement;

    if(node){
        node.textContent = msg;
    }

}