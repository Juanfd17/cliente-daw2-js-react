function transformarATipos(array) {
    let arrayTipos = [];
    for (let i = 0; i < array.length; i++) {
        arrayTipos.push(typeof(array[i]));
    }

    return arrayTipos;
}

function transformarATiposin(array) {
    let arrayTipos = [];
    for (let indice in array) {
        arrayTipos.push(typeof(array[indice]));
    }

    return arrayTipos;
}

function transformarATiposof(array) {
    let arrayTipos = [];
    for (let indice of array) {
        arrayTipos.push(typeof indice)
    }

    return arrayTipos;
}

console.log(transformarATipos([1,"casa",{}]));
console.log(transformarATiposin([1, "casa", {}]));
console.log(transformarATiposof([1, "casa", {}]));
