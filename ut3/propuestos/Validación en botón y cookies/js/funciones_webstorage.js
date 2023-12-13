
/* Fichero funciones. js
 * Autor: María R. F.
 * Funciones de manejo de Web Storage
 */



function getWSItem(nombre) {
    return sessionStorage.getItem(nombre);
}


function setWSItem(nombre, valor) {
    sessionStorage.setItem(nombre,Number(valor));
}


/* Devuelve verdadero si el navegador admite cookies */
function hayWS(){
    if (typeof(Storage) !== "undefined") 
        return true;
    else 
        return false;
}

/* Establece la cookie con el par nombre/valor proporcionado */
function incrementar(nombre) {
    sessionStorage.setItem(nombre,Number(sessionStorage.getItem(nombre))+1);
}