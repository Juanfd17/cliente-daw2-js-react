import Grafica from "./Grafica.js";

window.onload = principal;


let etiqueta;
let valor;
let botonAnadir;
let botonBorrar;

let lista;
let mensaje;

let grafica;
function principal() {
    etiqueta = document.querySelector("#etiqueta");
    valor = document.querySelector("#valor");
    botonAnadir = document.querySelector("#nuevo-dato");
    botonBorrar = document.querySelector("#quita-dato");

    lista = document.querySelector("#grafica");
    mensaje = document.querySelector("#mensajes");

    grafica = new Grafica();

    botonAnadir.addEventListener("click", anadir);
    botonBorrar.addEventListener("click", borrar);
}

function anadir() {
    if (!document.querySelector("#formulario").checkValidity()) {
        ponerMensaje('Por favor, ingresa una etiqueta y un valor válido mayor a 0.');
    } else {
        grafica.agregar(etiqueta.value, valor.value);

        ponerMensaje('Se ha intestado con exito el dato ( ' + etiqueta.value + ': ' + valor.value + ' )');
        actualizarLista()
    }
}

function borrar() {
    if (!etiqueta.checkValidity()) {
        ponerMensaje('Por favor, ingresa una etiqueta para borrar.');
    } else {
        grafica.eliminar(etiqueta.value)
        actualizarLista()
    }
}

function ponerMensaje(mensajeTexto) {
    mensaje.className = "visible informacion";
    mensaje.innerHTML = mensajeTexto;

}

function actualizarLista() {
    let listaElementos = grafica.lista

    if (listaElementos.size > 0) {
        lista.className = "visible"
        lista.innerHTML = "";

        for (let [key, value] of listaElementos) {
            let nodoContenedor = document.createElement("div")
            nodoContenedor.className = "contenedor"
            nodoContenedor.id = ("contenedor-" + key)

            let nodoProgreso = document.createElement("div")
            nodoProgreso.className = "progreso"
            nodoProgreso.id = ("progrso-" + key)
            nodoProgreso.innerText = key

            nodoProgreso.style.width = grafica.calculaPorcentaje(key) + "%"

            nodoContenedor.append(nodoProgreso)
            lista.append(nodoContenedor)
        }
    } else {
        lista.className = "oculto"
    }
}