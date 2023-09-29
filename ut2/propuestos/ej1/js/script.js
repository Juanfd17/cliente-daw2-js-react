/*let nombreApellidos = prompt("Introduce tu nombre y apellidos")

nombreApellidos = nombreApellidos.split(" ")

console.log("Tu nombre tiene: " + cuantasLetras(nombreApellidos));*/





document.getElementById("formularioNombre").addEventListener("submit", function(event){
    event.preventDefault();
  
    var nombreApellidos = document.getElementById("nombreApellidos").value;
    nombreApellidos = nombreApellidos.split(" ")
    console.log("Nombre: " + nombreApellidos);
    console.log("Tu nombre tiene: " + cuantasLetras(nombreApellidos) + " caracteres.");
    console.log("Tu nombre en mayusculas: " + mayusculas(nombreApellidos));
    console.log("Tu nombre en minusculas: " + minusculas(nombreApellidos));
    console.log("Nombre: " + nombreApellidos[0]);
    console.log("Apellido 1: " + nombreApellidos[1]);
    console.log("Apellido 2: " + nombreApellidos[2]);
    console.log("Un buen nombre de usuario seria: " + nombreUsuario(nombreApellidos));
    console.log("Otro buen nombre de usuario seria: " + nombreUsuario2(nombreApellidos));
});

function cuantasLetras(palabras) {
    let letras = 0;
    palabras.forEach(palabra => {
        letras += palabra.length;
    });

    return letras;
}

function mayusculas(palabras){
    let cadena = "";
    palabras.forEach(palabra => {
        cadena += palabra.toUpperCase() + " ";
    });

    return cadena;
}

function minusculas(palabras){
    let cadena = "";
    palabras.forEach(palabra => {
        cadena += palabra.toLowerCase() + " ";
    });

    return cadena;
}

function nombreUsuario(nombre) {
    let usuario = "";
    for (let i = 0; i < nombre.length; i++) {
        if (i == 0) {
            usuario += nombre[i];
        } else {
            usuario += nombre[i].slice(0,1);
        }
    }

    return usuario;
}

function nombreUsuario2(nombre) {
    let usuario = "";
    for (let i = 0; i < nombre.length; i++) {
        usuario += nombre[i].slice(0,2);
    }

    return usuario;
}