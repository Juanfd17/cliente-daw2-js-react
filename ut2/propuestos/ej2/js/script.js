
for (let i = 0; i < 100; i++) {
    let anio = getRandomInt(2023);
    console.log("El año " + anio + " pertenece al siglo: " + queSiglo(anio) + ". En romano: " + enRomano(queSiglo(anio)));

}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function queSiglo(anio) {
    return Math.ceil(anio / 100);
}

function enRomano(numero){
    let siglos = ["I","II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX","XXI","XXII","XXIII"];
    return siglos[numero -1];
}