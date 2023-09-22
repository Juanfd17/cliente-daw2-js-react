const efectividad = {
    super: 2,
    normal: 1,
    poco: 0.5
}

const eficiencia = {
    fuego: {
        hierba: efectividad.super,
        agua: efectividad.poco,
        electrico: efectividad.normal,
    },

    hierba: {
        fuego: efectividad.poco,
        agua: efectividad.super,
        electrico: efectividad.normal,
    },

    agua: {
        fuego: efectividad.super,
        hierba: efectividad.poco,
        electrico: efectividad.normal,
    },

    electrico: {
        fuego: efectividad.normal,
        hierba: efectividad.poco,
        agua: efectividad.super,
    }
}

console.log(calcularPupa(100, 100, "fuego", "agua"));
console.log(calcularPupa(35, 5, "hierba", "fuego"));
console.log(calcularPupa(100, 100, "electrico", "fuego"));

function calcularPupa(danio, defensa, tipoPropio, tipoContrario) {
    let efectividad = eficiencia[tipoPropio][tipoContrario];
    let pupa = 50 * (danio / defensa) * efectividad;
    return pupa;
}