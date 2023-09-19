let numeros = [1,2,3,4,5,6,7,8,9];
let correcto = true;
for (let i = 1; i <= numeros.length; i++) {
    if (i !== numeros[i -1]) {
        correcto = false;
        console.log("Error en la posicion " + (i - 1) + " se esperava un " + i + " en vez de un " + numeros[i -1] + "\n");
    }
}

(correcto) ? console.log("El array es correcto"): console.log();