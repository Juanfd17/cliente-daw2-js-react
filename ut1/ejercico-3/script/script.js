let texto = `1 ${opciones[0]}, 2 ${opciones[1]} o 3 ${opciones[2]}?`;

let ganadorP1 = "Gana jugador 1";
let ganadorP2 = "Gana jugador 2";
let empate = "Empate";

let opciones = ["piedra", "papel", "tijera"];

const ganadores = {
    piedra: opciones[2],
    papel: opciones[0],
    tijera: opciones[1]
}

let p1 = prompt("Jugador 1: " + texto);
let p2 = prompt("Jugador 2: " + texto);

p1 = opciones[p1 - 1];
p2 = opciones[p2 - 1];

const juegoPPT = (p1, p2, ...jugadasMas) => {
    let resultado = jugada(p1, p2);
    for (let i = 0; i < jugadasMas.length; i+=2) {
        resultado += jugada(jugadasMas[i], jugadasMas[i+1]);
    }

    return resultado;
}

const jugada = (p1 = opciones[0], p2 = opciones[0]) => {
    if (p1 == p2) {
        return "0";
    } 
    
    return (ganadores[p1] === p2) ? "1" : "2";
}

let resultado = juegoPPT(p1, p2);
alert(resultado);
resultado = resultado.split("");
resultado.forEach(element => {
    switch (element) {
        case "0":
            alert(empate);
            break;
        case "1":
            alert(ganadorP1);
            break;
        case "2":
            alert(ganadorP2);
            break;
    }
});