let texto = "1 piedra, 2 papel o 3 tijera?";
let ganadorP1 = "Gana jugador 1";
let ganadorP2 = "Gana jugador 2";

let p1 = prompt("Jugador 1: " + texto);
let p2 = prompt("Jugador 2: " + texto);

let opciones = ["piedra", "papel", "tijera"];

p1 = opciones[p1 - 1];
p2 = opciones[p2 - 1];

if (p1 == p2) {
    console.log("Empate");
} else if (p1 == opciones[0] && p2 == opciones[2] || p1 == opciones[1] && p2 == opciones[0] || p1 == opciones[2] && p2 == opciones[1]) {
    console.log(ganadorP1);
} else {
    console.log(ganadorP2);
}