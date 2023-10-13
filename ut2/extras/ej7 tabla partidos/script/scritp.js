let lugares = ["", "Ayuntamiento", "Polideportivo", "Instituto", "Mercado", "Colegio"]
let partidos = ["PV", "OV", "VpSI", "UPV"];

let votos = new Array;
votos[0] = lugares;

for (let i = 1; i < partidos.length + 1; i++) {
    for (let j = 0; j < votos[0].length; j++) {
        if (j === 0){
            votos[i] = [partidos[i -1]];
        } else {
            votos[i][j] = getRandomInt(5, 10)
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.table(votos);

console.log("Votos Partidos")
for (let i = 1; i < partidos.length + 1; i++) {
    let nVotos = 0;
    for (let j = 1; j < votos[i].length; j++) {
        nVotos += votos[i][j];
    }

    console.log(votos[i][0] + ": " + nVotos);
}

console.log("Votos Lugares")
for (let i = 1; i < partidos.length + 1; i++) {
    nVotos = 0;
    for (let j = 1; j < lugares.length -1; j++) {
        nVotos += votos[j][i];
    }

    console.log(votos[0][i] + ": " + nVotos)
}