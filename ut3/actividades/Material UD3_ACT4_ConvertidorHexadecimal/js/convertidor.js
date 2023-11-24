import Color from "./color.js";

const CODIGOS_ERROR={
    HEX_INVALIDO:1,
    RGB_INVALIDO:2
};

window.onload = princpal;

window.onunload = guaradEstado;
var convertidor = new Color();

var hex
var red
var green
var blue

function princpal(){
    hex = document.querySelector("#hexadecimal");
    red = document.querySelector("#red");
    green = document.querySelector("#green");
    blue = document.querySelector("#blue");

    const botonHEX = document.querySelector("#hex-to-rgb");
    const botonRGB = document.querySelector("#rgb-to-hex");

    botonHEX.addEventListener("click", hexToRgb);
    botonRGB.addEventListener("click", rgbToHex);

    const muestra = document.querySelector("#muestra");

    if (localStorage.getItem("hex") != null) {
        convertidor.ValorHex = localStorage.getItem("hex");
        actualizarColorMuestra();
    }
}

function guaradEstado() {
    if (hex.value != ""){
        convertidor.ValorHex = localStorage.setItem("hex", hex.value);
    }
}

function hexToRgb() {
    this.setCustomValidity("");
    if (/^[0-9A-Fa-f]{6}$|^([0-9A-Fa-f]{3})$/.test(hex.value)){
        limpiaError(this.id)
        convertidor.ValorHex = hex.value;
        actualizarColorMuestra();
    } else {
        trataError(CODIGOS_ERROR.HEX_INVALIDO, this.id)
    }
}

function rgbToHex() {
    let valores = [red.value, green.value, blue.value];
    let correcto = true;

    for (let valor in valores) {
        if (!(/^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})$/.test(valores[valor]))) {
            correcto = false;
        }
    }

    if (correcto){
        limpiaError(this.id)
        convertidor.ValorRGB= [red.value, green.value, blue.value];
        actualizarColorMuestra();
    } else {
        trataError(CODIGOS_ERROR.RGB_INVALIDO, this.id)
    }
}

function actualizarColorMuestra() {
    muestra.style.backgroundColor = "#"+convertidor.ValorHex;

    hex.value = convertidor.ValorHex;

    red.value = convertidor.Rojo;
    green.value = convertidor.Verde;
    blue.value = convertidor.Azul;
}

function trataError(error, donde) {
    var campoError=document.querySelector("#errores")
    campoError.style.display = "block"
    switch (error) {
        case 1:
            campoError.innerText = "El Hex no es valido"
            break

        case 2:
            campoError.innerText = "El RGB no es valido"
            break
    }
}

function limpiaError(id) {
    let campoError= document.querySelector("#errores")
    campoError.style.display = "none"
    campoError.innerHTML = ""
}