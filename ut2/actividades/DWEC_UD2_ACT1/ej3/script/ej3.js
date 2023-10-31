console.log(cuentaViernes13(2023));


function tieneViernes13(mes, anio) {
    let fecha = new Date(anio, mes -1, 13);
    if (fecha.getDay() == 5){
        return true
    } else {
        return false
    }
}

function cuentaViernes13(anio) {
    let cuantos = 0;

    for (let i = 1; i < 13; i++) {
        if (tieneViernes13(i, anio)){
            cuantos++;
        }

    }

    return cuantos;
}