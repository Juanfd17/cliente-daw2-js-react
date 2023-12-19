import Grafica from "./Grafica.js";

window.onload = principal;


let etiqueta;
let valor;
let botonAnadir;
let botonBorrar;

let lista;
let mensaje;

let grafica;

let fomulario;

function principal() {
    etiqueta = document.querySelector("#etiqueta");
    valor = document.querySelector("#valor");
    botonAnadir = document.querySelector("#nuevo-dato");
    botonBorrar = document.querySelector("#quita-dato");

    lista = document.querySelector("#grafica");
    mensaje = document.querySelector("#mensajes");
    fomulario = document.querySelector("#formulario");

    grafica = new Grafica();

    botonAnadir.addEventListener("click", anadir);
    botonBorrar.addEventListener("click", borrar);

    etiqueta.addEventListener("invalid", errorEtiqueta);
    valor.addEventListener("invalid", errorValor);
}
function errorEtiqueta() {
    if (etiqueta.valueMissing) {
        etiqueta.setCustomValidity("Inserte un valor");
    } else {
        etiqueta.setCustomValidity("");
    }
}

function errorValor() {
    if (valor.valueMissing) {
        valor.setCustomValidity("Inserte un valor");
    } else if (valor.value <= 0) {
        valor.setCustomValidity("El valor debe ser mayor que 0");
    } else {
        valor.setCustomValidity("");
    }
}


function anadir() {
    if (fomulario.checkValidity()) {
        grafica.agregar(etiqueta.value, valor.value);
        ponerMensaje('Se ha intentado con éxito el dato ( ' + etiqueta.value + ': ' + valor.value + ' )', false);
        actualizarLista();
    } else {
        fomulario.reportValidity();
    }
}

function borrar() {
    if (etiqueta.checkValidity()) {
        grafica.eliminar(etiqueta.value);
        actualizarLista();
    }
}


function ponerMensaje(mensajeTexto, error) {
    mensaje.className = "visible informacion";
    mensaje.innerHTML = mensajeTexto;

    if (error){
        mensaje.className = "visible errores"
    }
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