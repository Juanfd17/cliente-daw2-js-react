let lugares = ["", "Ayuntamiento", "Polideportivo", "Instituto", "Mercado", "Colegio"]
let partidos = ["PV", "OV", "VpSI", "UPV"];

let votos = new Array;
votos[0] = lugares;
votos[1] = [];
votos[2] = [];
votos[3] = [];
votos[4] = [];

for (let i = 1; i < partidos.length + 1; i++) {
    for (let j = 0; j < votos[0].length; j++) {
        if (j === 0){
            votos[i][j] = partidos[i -1];
        } else {
            votos[i][j] = getRandomInt(5, 10)
        }
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

console.table(votos);