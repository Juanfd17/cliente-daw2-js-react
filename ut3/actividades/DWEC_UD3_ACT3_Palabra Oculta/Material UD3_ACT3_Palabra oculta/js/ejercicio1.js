import AdivinaPalabra from "./adivinapalabra.js";

const juego = new AdivinaPalabra(["manzana", "guitarra", "casa", "programacion", "javascript", "montaña", "elefante", "océano", "bicicleta", "universo", "espejo", "piano", "telescopio", "fruta", "aventura", "familia", "computadora", "fotografía", "montaña", "viaje"]);

var palabraActual;
var palabraDesordenada;
var correcto = false;

var botonNueva;
var botonSolucion;
var botonFinalizar;

var letras
var palabra

window.onload = principal;

function principal() {

    letras = document.querySelector("#letras");
    palabra = document.querySelector("#palabra");

    botonNueva = document.querySelector("#nueva");
    botonSolucion = document.querySelector("#solucion");
    botonFinalizar = document.querySelector("#finalizar");

    const resultado = document.querySelector("#resultado")

    letras.disabled = true;

    palabra.addEventListener("blur", checkPalabra);
    botonSolucion.addEventListener("click", mostrarPalabra);

    botonNueva.addEventListener("click", ponerPalabra);

    botonFinalizar.addEventListener("click", finalizarJuego);

    ponerPalabra();
}

function ponerPalabra(){
    palabraActual = juego.getPalabraAleatoria().toUpperCase();
    palabraDesordenada = juego.getPalabraDesordenada(palabraActual);

    letras.value = palabraDesordenada;

    correcto = false;

    botonNueva.disabled = true;
    botonSolucion.disabled = false;
    palabra.value = "";

    resultado.innerText = "";
    resultado.style.display = "none";
}

function mostrarPalabra() {
    if (correcto === false){
        resultado.className = "error";
        resultado.innerText = "La palabra es: " + palabraActual;

        juego.addFallo();

        botonNueva.disabled = false;
        botonSolucion.disabled = true;

        resultado.style.display = "block";
    }
}

function finalizarJuego() {
    botonNueva.disabled = true;
    botonSolucion.disabled = true;
    botonFinalizar.disabled = true;

    palabra.disabled = true;

    palabra.value = "";
    letras.value = "";

    let record = document.cookie.split("=")[1];

    console.log(record)

    if (record === undefined){
        record = 0;
    }

    let media = juego.getMediaAciertos();

    resultado.className = "info";

    if (media === -1){
        resultado.innerText = "No has jugado";
    } else{
        resultado.innerText = "Porcentaje de aciertos: " + media * 100 + "%";
        if (media * 100 > record){
            document.cookie = "record=" + media * 100;

            resultado.innerText += "\n¡Nuevo record!";
        }
    }

    resultado.style.display = "block";
}

function checkPalabra() {
    console.log(palabraActual);
    console.log(palabra.value.toUpperCase());
    resultado.style.display = "block";

    if (correcto === false){
        if (palabraActual === palabra.value.toUpperCase()){
            resultado.className = "correcto";
            resultado.innerText = "Correcto";

            correcto = true;

            juego.addAcierto();

            botonNueva.disabled = false;
            botonSolucion.disabled = true;
        } else {
            resultado.className = "error";
            resultado.innerText = "Esa no es la palabra";
        }
    }
}