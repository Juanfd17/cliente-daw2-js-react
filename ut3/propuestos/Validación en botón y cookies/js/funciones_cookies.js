
/* Funciones para el manejo de cookies */

/* Devuelve la cookie con el nombre que pasamos como argumento 
	Revisamos todos los pares de valores separando nombre/valor.
	 Si el nombre es el buscado, devolvemos su valor.
	 Si no se encuentra devolvemos el valor nulo.

*/
function getCookie(nombreCookie) {
    var partes, nombre, valor;
    
    var cookies = document.cookie.split(";");
    for(var i = 0; i < cookies.length; i++){ 
        partes = cookies[i].split("="); 
        nombre = partes[0];
        valor = partes[1];
        if (nombre.trim() === nombreCookie.trim()) 
           return valor;
    }
    return null; // si no se encuentra se devuelve el valor nulo
}

/* Establece la cookie con el par nombre/valor proporcionado.
 * Por defecto, la caducidad de la cookie es la sesión actual. */
function setCookie(nombre, valor) {
    document.cookie = nombre + "=" + valor;
}

/* Establece la cookie con el par nombre/valor proporcionado.
 * Establece la caducidad de la cookie, dada en milisegundos.
 *  */
function setCookieCaducidad(name, value,caducidad) {
    var now = new Date();
    var then = new Date(now.getTime() + caducidad);
    document.cookie = name + "=" + value + "; expires=" + then.toGMTString() + "; path=/";
}


/* Devuelve verdadero si el navegador admite cookies */
function hayCookies(){
    setCookie("micookie","hay");
    return (getCookie("micookie") === "hay");
}