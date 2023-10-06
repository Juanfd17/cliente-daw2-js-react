for (let i = 0; i < 100; i++) {
    let anio = getRandomInt(2023);
    console.log("The year " + anio + " belongs to the " + obtenerSigloOrdinal(anio));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function obtenerSigloOrdinal(anio) {
    let siglo = Math.ceil(anio / 100);
    return siglo + obtenerSufijoOrdinal(siglo);
}

function obtenerSufijoOrdinal(numero) {
    if (numero >= 11 && numero <= 13) {
        return "th";
    }
    const ultimoNumero = numero % 10;
    switch (ultimoNumero) {
        case 1:
            return "ro";
        case 2:
            return "do";
        case 3:
            return "ro";
        default:
            return "to";
    }
}