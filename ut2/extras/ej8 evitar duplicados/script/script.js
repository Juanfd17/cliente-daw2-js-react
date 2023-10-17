let arrayDuplicados = [100, 23, 23, 23 ,23, 67, 45];

console.log(borrarDuplicadosManula(arrayDuplicados));
console.log(borraDuplicados(arrayDuplicados));

function borrarDuplicadosManula(array) {
    let arraySinDuplicados = [];

    for (const numero of array) {
        let repe = false;
        for (const numeroSinRepetido of arraySinDuplicados) {
            if (numeroSinRepetido === numero){
                repe = true;
                break;
            }
        }

        if (!repe){
            arraySinDuplicados.push(numero)
        }
    }

    return arraySinDuplicados;
}

function borraDuplicados(array) {
    return new Set(array);
}