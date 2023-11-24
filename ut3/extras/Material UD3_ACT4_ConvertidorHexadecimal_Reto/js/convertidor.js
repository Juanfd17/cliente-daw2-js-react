import Color from "./color.js";

const CODIGOS_ERROR={
    HEX_INVALIDO:1,
    RGB_INVALIDO:2
};

window.onload = princpal;

window.onunload = guaradEstado;
var convertidor = new Color();

var hex
var rgb

function princpal(){
    hex = document.querySelector("#hexadecimal");
    rgb = document.querySelector("#rgb");

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
    convertidor.ValorHex = rgb.value.substring(1);
    actualizarColorMuestra();

}

function actualizarColorMuestra() {
    muestra.style.backgroundColor = "#"+convertidor.ValorHex;

    hex.value = convertidor.ValorHex;

    rgb.value = "#" + convertidor.ValorHex;
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