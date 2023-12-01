let incrementar = "";

let decrementar = "";
let logOut = "";
let saludo = "";
let contador = "";
let primera = false;

//function principal() {
let principal = ()=>{
    incrementar = document.querySelector("#incrementar");
    decrementar = document.querySelector("#decrementar");
    logOut = document.querySelector("#logout");
    saludo = document.querySelector("#saludo");
    contador = document.querySelector("#contador");

    if (localStorage.getItem("nombre") === null){
        localStorage.setItem("nombre", prompt("Cual es tu nombre"));
        primera = true;
    }

    if (primera){
        saludo.innerText = "¡Tu primera visita, "
    } else {
        saludo.innerText = "¡Bienvenido/a de nuevo, "
    }

    saludo.innerText += localStorage.getItem("nombre");

    incrementar.addEventListener("click", add);
    decrementar.addEventListener("click", dec);
    logOut.addEventListener("click", FlogOut)

}

window.addEventListener("load", principal)

function add() {
    if (sessionStorage.getItem("numero") === null){
        sessionStorage.setItem("numero", 0);
    } else {
        sessionStorage.setItem("numero", parseInt(sessionStorage.getItem("numero")) + 1);
    }

    contador.innerText = "Contador: " + sessionStorage.getItem("numero")
}

function dec() {
    if (sessionStorage.getItem("numero") === null){
        sessionStorage.setItem("numero", 0);
    } else {
        sessionStorage.setItem("numero", sessionStorage.getItem("numero") - 1);
    }

    contador.innerText = "Contador: " + sessionStorage.getItem("numero")
}

function FlogOut() {
    sessionStorage.removeItem("numero");
    localStorage.removeItem("nombre");
}