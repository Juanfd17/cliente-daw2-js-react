import AdivinaPalabra from "./adivinapalabra.js";

let palabras = [
    ["animas", "barras", "caribe", "cargas", "mangas", "dardos", "emojis", "frases", "graves", "irrita"],
    ["botellas", "elefante", "avestruz", "albatros", "calvitos", "mariposa", "camiones", "canallas", "enterado", "ejercito"],
    ["sol", "luz", "mar", "hoy", "oso", "soy", "lee", "ven", "ojo", "rey"]
]

const juego = new AdivinaPalabra(palabras);

var palabraActual;
var palabraDesordenada;
var correcto = false;

var botonNueva;
var botonSolucion;
var botonFinalizar;

var letras
var palabra

var cantidadLetrasSeleccionadas = 0;

window.onload = principal;

function principal() {

    letras = document.querySelector("#letras");
    palabra = document.querySelector("#palabra");

    botonNueva = document.querySelector("#nueva");
    botonSolucion = document.querySelector("#solucion");
    botonFinalizar = document.querySelector("#finalizar");

    document.getElementById('radio6').addEventListener('click', clickLetras);
    document.getElementById('radio8').addEventListener('click', clickLetras);
    document.getElementById('radio3').addEventListener('click', clickLetras);


    const resultado = document.querySelector("#resultado")

    letras.disabled = true;

    palabra.addEventListener("blur", checkPalabra);
    botonSolucion.addEventListener("click", mostrarPalabra);

    botonNueva.addEventListener("click", ponerPalabra);

    botonFinalizar.addEventListener("click", finalizarJuego);

    ponerPalabra();
}

function clickLetras(ev) {
    cantidadLetrasSeleccionadas = ev.target.value;

    ponerPalabra();
}

function ponerPalabra(){
    palabraActual = juego.getPalabraAleatoria(cantidadLetrasSeleccionadas).toUpperCase();
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