import CentralMedidas from "./CentralMedidas.js";
window.onload = principal

function principal() {
    let formCiudad = document.querySelector("#ciudad");
    let formMedidas = document.querySelector("#medidas");
    let formManual = document.querySelector("#medidas_manual");
    let formAleatorio = document.querySelector("#medidas_aleatorio");
    let fomrGuardar = document.querySelector("#guardar");
    let fomrBorrar = document.querySelector("#borrar");

    formCiudad.addEventListener("keyup", textoMayusucalas);

    formManual.addEventListener("click", medidasManual)
    formAleatorio.addEventListener("click", medidasAleatorias)

    fomrGuardar.addEventListener("click", guardarMedidas)
    fomrBorrar.addEventListener("click", borrarCiudad)
}

function textoMayusucalas(ev) {
    ev.target.value = ev.target.value.toUpperCase()
}

function medidasManual() {
    let formMedidas = document.querySelector("#medidas");
    formMedidas.disabled = false;

    formMedidas.value = "";
}

function medidasAleatorias() {
    let formMedidas = document.querySelector("#medidas");
    formMedidas.disabled = true;

    formMedidas.value = centralMedidas.numerosAleatorios(30, -10, 30);
}

function guardarMedidas() {
    let formCiudad = document.querySelector("#ciudad");
    let formMedidas = document.querySelector("#medidas");

    let arrayMedidas = pasarNumerosArray(formMedidas.value);

    if (arrayMedidas)
    centralMedidas.insertaMedida(formCiudad.value, arrayMedidas);
    updateTable();
}

function pasarNumerosArray(numeros){
    numeros = numeros.split(", ");

    return numeros;
}

function borrarCiudad(ev) {
    let ciudad = document.querySelector("#ciudad").value;
    centralMedidas.eliminaCiudad(ciudad);
    updateTable();
}

function updateTable() {
    let tabla = document.querySelector("#tabla");
    tabla.innerHTML = centralMedidas.tabla();
}

let centralMedidas = new CentralMedidas();