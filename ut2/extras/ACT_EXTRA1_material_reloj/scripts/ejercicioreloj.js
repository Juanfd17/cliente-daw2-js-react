principal()
function principal(){
    actualizarRelojes();
    setInterval(actualizarRelojes,1000);
}

function actualizarRelojes() {
    fechaActual = new Date();
    document.getElementById("divReloj").innerText = formateaHora(fechaActual);
    document.getElementById("divVacaciones").innerText = faltaVacaciones(fechaActual, new Date(2024,5,21))

    function formateaHora(fecha) {
        let hora = fecha.getHours();
        let minuto = fecha.getMinutes();
        let segundo = fecha.getSeconds();

        if (hora < 10) {
            hora = "0" + hora;
        }

        if (minuto < 10) {
            minuto = "0" + minuto;
        }

        if (segundo < 10) {
            segundo = "0" + segundo;
        }

        let laHora = hora + ":" + minuto + ":" + segundo;
        return laHora;
    }

    function faltaVacaciones(fechaActual, fechaVacaciones) {
        let cuanto = fechaVacaciones.getTime() - fechaActual.getTime()

        let texto = "";

        let dias = Math.floor(cuanto / 86400000);
        cuanto -= (dias * 86400000);

        let horas = Math.floor(cuanto / 3600000);
        cuanto -= (horas * 3600000);

        let minutos = Math.floor(cuanto / 60000);
        cuanto -= (minutos * 60000);

        let segundos = Math.floor(cuanto / 1000);

        texto += dias + " dias, " + horas + "horas, " + minutos + "minutos, " + segundos + "segundos";
        return texto;
    }
}
