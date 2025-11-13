const USERNAME = "username";
const NVISITAS = "n_visitas";

window.onload = () => {
    lee_nombre();
}

function lee_nombre(): void{
    let username: string = $getCookieValueByKey(USERNAME);
    while(username==null || username == ""){
        username = window.prompt("Introduce su nombre") as string;
    }
    document.cookie = USERNAME + "=" + username;

    let nVisitas: number = Number($getCookieValueByKey(NVISITAS));

    console.log(nVisitas);
    if(!nVisitas){
        nVisitas = 0;
    }

    document.cookie = NVISITAS + "=" + (nVisitas + 1);
    
    let h1: HTMLHeadingElement = document.getElementById("titulo") as HTMLHeadingElement;
    h1.textContent = "Bienvenido al dashboard de " + username + " (Visitas: " + nVisitas + ")";
}

function $getCookieValueByKey(key: string): string{
    let arrayCookie = document.cookie.split(";");
    let result: string = "";
    for(let i = 0 ; i < arrayCookie.length; i++){
        let clave = arrayCookie[i].split("=")[0];
        let valor = arrayCookie[i].split("=")[1];
        if(clave.trim() === key){
            result = valor;
        }
    }
    return result;
}

function add_tarea(): void{
    let inputId: HTMLInputElement = document.getElementById("id") as HTMLInputElement;
    let inputDesc: HTMLInputElement = document.getElementById("id") as HTMLInputElement;
    let select: HTMLSelectElement = document.getElementById("tipo") as HTMLSelectElement;
    
    let tasks = document.getElementById("tasks");
    let task = document.createElement("div");
    
    let enlace: HTMLAnchorElement = document.createElement("a") as HTMLAnchorElement;
    enlace.href = "https://wwww.issues.com/" + inputId.value;
    let h2: HTMLHeadElement = document.createElement("h2");
    h2.textContent = "ID Tarea: " + inputId.value;
    enlace.appendChild(h2);

    let pDesc: HTMLParagraphElement = document.createElement("p");
    pDesc.textContent = "Descipción: " + inputDesc.value;

    let pDate: HTMLParagraphElement = document.createElement("p");
    pDate.textContent = "Fecha de creación: " + (new Date().toUTCString);
    
    task.appendChild(enlace);
    task.appendChild(pDesc);
    task.appendChild(pDate);

    switch(select.value){
        case "tarea":
            console.log("tarea");
            task.style.backgroundColor = "red";
            break;
        case "incidencia":
            console.log("Incidencia");
            task.style.backgroundColor = "green";
            break;
        case "evento":
            console.log("evento");
            task.style.backgroundColor = "blue";
            break;
        default :
            console.error("Opcion no valida");
            break;
    }

    tasks?.appendChild(task)
}

function clean_tareas(): void{
    let tasks: HTMLDivElement = document.getElementById("tasks") as HTMLDivElement;
    tasks.innerHTML = "";
}