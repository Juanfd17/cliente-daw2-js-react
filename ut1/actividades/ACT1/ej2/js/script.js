let numero = -345;
console.log(cuantosDigitos(numero));


function cuantosDigitos(numero) {
    let cuantos = 0;

    while (numero != 0) {
        cuantos ++;
        numero = parseInt(numero / 10);
    }

    return cuantos;
}