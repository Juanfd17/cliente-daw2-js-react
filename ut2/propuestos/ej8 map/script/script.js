function menu() {
    let usuarios = new Map();

    do {
        var opcion = prompt("OPCIONES:\n\n1. Nuevo usuario.\n2. Eliminar usuario.\n3. Mostrar usuarios.\n4. Salir")

        switch (opcion) {
            case "1":
                crearUsuario(usuarios);
                break;

            case "2":
                borrarUsuario(usuarios);
                break;

            case "3":
                mostrarUsuarios(usuarios);
                break;
        }
    } while (opcion != 4)
}

menu();

function crearUsuario(usuarios) {
    let usuario = prompt("Nombre usuario")
    let contrasenia = prompt("Contraseña usuario")

    if (!usuarios.has(usuario)){
        usuarios.set(usuario, contrasenia);
    } else {
        alert("El usuario ya existe");
    }
}

function borrarUsuario(usuarios) {
    let usuario = prompt("Nombre usuario a borrar")

    if (usuarios.has(usuario)){
        usuarios.delete(usuario)
    } else {
        alert("El usuario no existe")
    }
}

function mostrarUsuarios(usuarios) {
    let mensage = "";

    for(var [clave, valor] of usuarios) {
        mensage += ("Usuario: " + clave + " Contraseña: " + valor);
    }

    alert(mensage)
}