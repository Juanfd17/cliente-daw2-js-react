import Galeria from './Galeria.js';

let galeria = new Galeria(7);
window.onload = principal;


function principal() {
    let primera = document.querySelector("#primera");
    let anterior = document.querySelector("#anterior");
    let siguiente = document.querySelector("#siguiente");
    let ultima = document.querySelector("#ultima");

    primera.addEventListener("click", fPrimera);
    anterior.addEventListener("click", fAnterior);
    siguiente.addEventListener("click", fSiguiente);
    ultima.addEventListener("click", fUltima);

    window.addEventListener("keydown", pulsarTecla)
    function pulsarTecla(ev) {
        if (ev.code === "ArrowRight"){
            comprobarBotones(galeria.siguiente());
        } else if (ev.code === "ArrowLeft"){
            comprobarBotones(galeria.anterior());
        }
    }

   comprobarBotones(galeria.aleatoria());
}
function fPrimera() {
    comprobarBotones(galeria.primera());
}

function fAnterior() {
    comprobarBotones(galeria.anterior());
}

function fSiguiente() {
    comprobarBotones(galeria.siguiente());
}

function fUltima() {
    comprobarBotones(galeria.ultima());
}

function comprobarBotones(posicion) {
    if (posicion === 0){
        document.querySelector("#primera").classList.add('deshabilitado');
        document.querySelector("#anterior").classList.add('deshabilitado');

        document.querySelector("#ultima").classList.remove('deshabilitado');
        document.querySelector("#siguiente").classList.remove('deshabilitado');
    } else if (posicion === galeria.getCantidadFotos() -1){
        document.querySelector("#ultima").classList.add('deshabilitado');
        document.querySelector("#siguiente").classList.add('deshabilitado');

        document.querySelector("#primera").classList.remove('deshabilitado');
        document.querySelector("#anterior").classList.remove('deshabilitado');
    } else {
        document.querySelector("#ultima").classList.remove('deshabilitado');
        document.querySelector("#siguiente").classList.remove('deshabilitado');

        document.querySelector("#primera").classList.remove('deshabilitado');
        document.querySelector("#anterior").classList.remove('deshabilitado');
    }
}