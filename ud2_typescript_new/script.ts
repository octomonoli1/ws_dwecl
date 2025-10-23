function valida_email() : void {
    //Recuperamos el valor
    const email : string = $inputValue("email");

    //Definimos el patron regular
    const regexp: RegExp = new  RegExp("[^\s@]+@[^\s@]+\.[^\s@]+$");

    if(regexp.test(email)){
        $writeNode("ok","El email introducido cumple la validación");
        $writeNode("error","");
    }else{
        $writeNode("error","El email introducido NO cumple la validación");
        $writeNode("ok","");
    }

}

function navegar_url() : void {
    const url : string = $inputValue("url");
    const regexp = new RegExp("^https://");
    if(regexp.test(url)){
        window.location.href = url;
    }else{
        $writeNode("error2","La URL debe contener el https:// al principio");
    }
    
}

function lee_elementos(){
    const lista = document.getElementById("lista_alumnos") as HTMLElement;
    const alumnos = lista.childNodes;
    
    for(let i = 0; i < alumnos.length; i++){
        console.log(alumnos[i]);
    }
}

function add_elemento(){
    const name = $inputValue("name");
    const lista = document.getElementById("lista_alumnos");
    const alumno = document.createElement("li");
    alumno.textContent = name;
    lista?.appendChild(alumno);

}

//Helpers
function $inputValue(id : string) : string {
    const input = document.getElementById(id) as HTMLInputElement;
    let result : string = "";

    if(input){
        result = input.value;
    }

    return result;
}

function $writeNode(id: string, msg: string) : void {
    const node = document.getElementById(id) as HTMLElement;
    
    if(node){
        node.textContent = msg;
    }
}