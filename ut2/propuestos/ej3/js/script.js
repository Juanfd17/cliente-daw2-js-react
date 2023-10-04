let fechaCumple = new Date();

fechaCumple.setMonth(10);
fechaCumple.setDate(3);


if (fechaCumple < new Date()) {
    console.log("año");
    fechaCumple.setFullYear(fechaCumple.getFullYear() + 1);
}

console.log("Para tu cumpleaños quedan " + cuantoFalta(fechaCumple) + " dias y caera de " + queDia(fechaCumple));

function cuantoFalta(fecha) {
    let fechaHoy = new Date();
    let cuanto = Math.ceil((fecha.getTime() - fechaHoy.getTime()) / 86400000);
    return cuanto;
}

function queDia(fecha) {
    switch (fecha.getDay()) {
        case 0:
            return "Domingo";
            break;
    
        case 1:
            return "Lunes";
            break;
        
        case 2:
            return "Martes";
            break;

        case 3:
            return "Miercoles";
            break;
            
        case 4:
            return "Jueves";
            break;

        case 5:
            return "Viernes";
            break;

        case 6:
            return "Sabado";
            break;
    }
}