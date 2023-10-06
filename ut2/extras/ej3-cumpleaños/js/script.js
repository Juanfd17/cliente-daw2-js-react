var fechaString = prompt("Introduce tu fecha de cumpleaños: Dia/Mes/Año");

var partesFecha = fechaString.split("/");

var dia = parseInt(partesFecha[0]);
var mes = parseInt(partesFecha[1]) - 1;
var anio = new Date().getFullYear();

let fechaCumple = new Date(anio, mes, dia);

if (fechaCumple < new Date()) {
    fechaCumple.setFullYear(fechaCumple.getFullYear() + 1);
}

console.log(fechaCumple)

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