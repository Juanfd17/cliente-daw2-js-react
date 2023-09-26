do{
    do{
        var correcto = true;
        var cantidad = (prompt("Introduce una cantidad de dinero: "));
        if(cantidad == "FIN"){
            break;
        }
        if(isNaN(cantidad)){
            alert("No has introducido un número");
            correcto = false;
        }
    }while(!correcto);
    alert("La cantidad de monedas necesarias es: " + pasoAMonedas(cantidad));
}while(cantidad != "FIN")

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

    return cantidadMonedas;
}