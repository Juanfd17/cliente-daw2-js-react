import AdivinaPalabra from "./adivinapalabra.js";

const juego = new AdivinaPalabra(["manzana", "guitarra", "casa", "programacion", "javascript", "montaña", "elefante", "océano", "bicicleta", "universo", "espejo", "piano", "telescopio", "fruta", "aventura", "familia", "computadora", "fotografía", "montaña", "viaje"]);

var palabraActual;
var palabraDesordenada;
var correcto = false;

window.onload = principal;

function principal() {

    const letras = document.querySelector("#letras");
    const palabra = document.querySelector("#palabra");

    const botonNueva = document.querySelector("#nueva");
    const botonSolucion = document.querySelector("#solucion");
    const botonFinalizar = document.querySelector("#finalizar");

    const resultado = document.querySelector("#resultado")

    palabra.addEventListener("blur", checkPalabra);
    botonSolucion.addEventListener("click", mostrarPalabra);

    ponerPalabra();
}

function ponerPalabra(){
    palabraActual = juego.getPalabraAleatoria().toUpperCase();
    palabraDesordenada = juego.getPalabraDesordenada(palabraActual);

    letras.value = palabraDesordenada;

    correcto = false;
}

function mostrarPalabra() {
    if (resultado === false){
        resultado.className = "error";
        resultado.innerText = "La palabra es: " + palabraActual;

        juego.addFallo();
    }
}

function checkPalabra() {
    console.log(palabraActual);
    console.log(palabra.value.toUpperCase());

    if (correcto === false){
        if (palabraActual === palabra.value.toUpperCase()){
            resultado.className = "correcto";
            resultado.innerText = "Correcto";

            correcto = true;

            juego.addAcierto();


        } else {
            resultado.className = "error";
            resultado.innerText = "Esa no es la palabra";
        }
    }

}

