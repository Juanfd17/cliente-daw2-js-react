import Color from "./color.js";

const CODIGOS_ERROR={
    NOMBRE_VACIO:1,
    PASSWORD_CORTO:2,
    PASSWORDS_DISTINTOS:3,
    EMAIL_TIPO:4,
    DNI_INCORRECTO:5
};

window.onload = princpal;
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
}

function hexToRgb() {

    this.setCustomValidity("");
    if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(this.value)){
        limpiaError(this.id)
        convertidor.ValorHex = hex.value;
        actualizarColorMuestra();
    } else {
        trataError(CODIGOS_ERROR.HEX, this.id)
    }



}

function dniValido(ev){

}

function rgbToHex() {
    convertidor.ValorRGB= [red.value, green.value, blue.value];

    actualizarColorMuestra();
}

function actualizarColorMuestra() {
    muestra.style.backgroundColor = "#"+convertidor.ValorHex;

    console.log(convertidor.ValorHex);

    hex.value = convertidor.ValorHex;

    red.value = convertidor.Rojo;
    green.value = convertidor.Verde;
    blue.value = convertidor.Azul;
}

function trataError(error, donde) {
    var campoError=document.querySelector("#error_"+donde)
    campoError.style.display = "block"
    switch (error) {
        case 1:
            campoError.innerText = "No seas timid@, dinos tu nombre"
            break

        case 2:
            campoError.innerText = "La contraseña es demasiado corta"
            break

        case 3:
            campoError.innerText = "Las contraseñas no coinciden"
            break

        case 4:
            campoError.innerText = "El correo no es valido"
            break

        case 5:
            campoError.innerText = "El DNI no es valido"
            break
    }
}

function limpiaError(id) {
    let campoError= document.querySelector("#error_"+id)
    campoError.style.display = "none"
    campoError.innerHTML = ""
}