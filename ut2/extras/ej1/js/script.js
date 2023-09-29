/*let nombreApellidos = prompt("Introduce tu nombre y apellidos")

nombreApellidos = nombreApellidos.split(" ")

console.log("Tu nombre tiene: " + cuantasLetras(nombreApellidos));*/





document.getElementById("formularioNombre").addEventListener("submit", function(event){
    event.preventDefault();
  
    var nombreApellidos = document.getElementById("nombreApellidos").value;
    nombreApellidos = nombreApellidos.split(" ")
    console.log("Una buena contraseña seria: " + contrasenia(nombreApellidos[0]));
   
});

function contrasenia(nombre) {
    let contrasenia = "";
    for (let i = 0; i < nombre.length; i++) {
        contrasenia += nombre[i] + i;
    }

    return contrasenia;
}