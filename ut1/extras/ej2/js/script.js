let numero = -345;
console.log(cuantosDigitosString(numero));

function cuantosDigitosString(numero) {
    numero = (numero < 0) ? numero * -1 : numero;
    return numero.toString().length;
}