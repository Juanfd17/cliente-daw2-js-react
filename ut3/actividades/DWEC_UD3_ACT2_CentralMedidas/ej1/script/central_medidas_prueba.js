import CentralMedidas from "./CentralMedidas.js";
window.onload = principal

function principal() {
    let formCiudad = document.querySelector("#ciudad");
    let formMedidas = document.querySelector("#medidas");
    let formManual = document.querySelector("#medidas_manual");
    let formAleatorio = document.querySelector("#medidas_aleatorio");
    let fomrGuardar = document.querySelector("#guardar");

    formCiudad.addEventListener("keyup", textoMayusucalas);

    formManual.addEventListener("click", medidasManual)
    formAleatorio.addEventListener("click", medidasAleatorias)

    fomrGuardar.addEventListener("click", guardarMedidas)
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

    console.log(centralMedidas.insertaMedida(formCiudad.value, arrayMedidas));
}

function pasarNumerosArray(numeros){
    numeros = numeros.split(", ");

    return numeros;
}

let centralMedidas = new CentralMedidas();


//console.log(centralMedidas.insertaMedida("Oviedo", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]))
//console.log(centralMedidas.insertaMedida("Oviedo", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]))
//console.log(centralMedidas.mediaMedidas("Oviedo"));
//console.log(centralMedidas.insertaAleatorio("Santander"));
//console.log(centralMedidas.insertaAleatorio("Santander"));
//console.log(centralMedidas.mediaMedidas("Santander"));
//console.log(centralMedidas.mediaMedidasTotal());
//console.log(centralMedidas.eliminaCiudad("Santander"))
//console.log(centralMedidas.mediaMedidas("Santander"));
//centralMedidas.toConsole();
//console.log(centralMedidas.insertaAleatorio("Santander"));
//centralMedidas.toConsole();
