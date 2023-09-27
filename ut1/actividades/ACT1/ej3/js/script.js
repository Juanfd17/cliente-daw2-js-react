let continuar = true;
do{
    var cantidad = prompt("Introduce una cantidad de dinero: ");
    if (cantidad == "FIN") {
        continuar = false;
    } else {
        if (esNumero(cantidad)) {
            alert(pasoAMonedas(cantidad));
        } else{
            alert("Introduce un número válido");
        }
    }
}while(continuar);

function esNumero(numero){
    if (isNaN(numero)) {
        return false;
    } else {
        return true;
    }
}

function pasoAMonedas(cantidad) {
    let cantidadMonedas = [0, 0, 0, 0, 0, 0, 0, 0];
    let monedas = [2,1,0.5,0.2,0.1,0.05,0.02,0.01];
    
    for (var i = 0; i < monedas.length; i++) {
        while (cantidad >= monedas[i]) {
            cantidadMonedas[i]++;
            cantidad -= monedas[i];
            cantidad = cantidad.toFixed(2);
        }
    }

    let mensaje = "";

    for (let i = 0; i < monedas.length; i++) {
        if (i <= 1) {
            mensaje += cantidadMonedas[i] + " monedas de " + monedas[i] + "€\n";
        } else {
            mensaje += cantidadMonedas[i] + " menedas de " + (monedas[i] * 100) + " centimos€\n";
        }
    }

    return mensaje;
}