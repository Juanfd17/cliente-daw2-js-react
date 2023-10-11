let contrasenia = "Ass11";
console.log(comprobadorPassword(contrasenia));
function comprobadorPassword(contrasenia) {
    cambios = [];

    cambios.push(contrasenia.length + " caracteres en total")

    if (contrasenia.length < 6){
        cambios.push(" Faltan caracteres para hacer la contraseña segura")
    } else if (contrasenia.length > 20){
        cambios.push(" Se necesita borrar caracteres")
    }

    let mayuscula = false;
    let minuscula = false;
    let numero = false;

    let letraAnterior ="A";
    let seguidos = 1;
    let haySeguidos = false;

    for (const letra of contrasenia) {
        if (letra >= "A" && letra <= "Z"){
            mayuscula = true;
        } else if (letra >= "a" && letra<= "z"){
            minuscula = true;
        } else if (letra >= "0" && letra <= "9"){
            numero = true;
        }

        if (letra === letraAnterior){
            seguidos ++;
        } else {
            seguidos = 1;
        }

        if (seguidos >= 3){
            haySeguidos = true;
        }

        letraAnterior = letra;
    }

    if (!mayuscula){
        cambios.push(" Añadir una mayuscula")
    }

    if (!minuscula){
        cambios.push(" Añadir una minuscula")
    }

    if (!numero){
        cambios.push(" Añadir un numero")
    }

    if (haySeguidos){
        cambios.push(" no se puedes tener 3 o mas caracteres iguales seguidos")
    }

    cambios.push(" " + cambios.length -1 + " cambios como minimo")


    return cambios.toString();
}