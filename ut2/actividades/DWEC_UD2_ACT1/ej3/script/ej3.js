let mes = 10;
let anio = 2023;
console.log(tieneViernes13(mes, anio))


function tieneViernes13(mes, anio) {
    let fecha = new Date(anio, mes -1, 13);
    if (fecha.getDay() == 5){
        return true
    } else {
        return false
    }
}