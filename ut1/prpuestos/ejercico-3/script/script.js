let opciones = ["piedra", "papel", "tijera"];
let texto = `1 ${opciones[0]}, 2 ${opciones[1]} o 3 ${opciones[2]}?`;

let ganadorP1 = "Gana jugador 1";
let ganadorP2 = "Gana jugador 2";
let empate = "Empate";

const ganadores = {
    piedra: opciones[2],
    papel: opciones[0],
    tijera: opciones[1]
}

var partidas = [];

do{
    let p1 = prompt("Jugador 1: " + texto);
    let p2 = prompt("Jugador 2: " + texto);


    p1 = opciones[p1 - 1];
    p2 = opciones[p2 - 1];

    const partida = {
        p1,
        p2
    }
    partidas.push(partida);
    

} while (prompt("¿Quieres jugar otra vez?") == "si");

const juegoPPT = (partidas) => {
    let resultado = "";
    for (let i = 0; i < partidas.length; i++) {
        resultado += jugada(partidas[i]);
    }

    return resultado;
}

const jugada = (partida) => {
    if (partida.p1 == partida.p2) {
        return "0";
    } 
    
    return (ganadores[partida.p1] === partida.p2) ? "1" : "2";
}

let resultado = juegoPPT(partidas);
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