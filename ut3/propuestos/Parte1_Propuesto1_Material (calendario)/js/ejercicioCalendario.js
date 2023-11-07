let fecha = new Date();

document.querySelector("#anio").innerText = fecha.getFullYear();
document.querySelector("#dia").innerText = fecha.getDate();
document.querySelector("#mes").innerHTML = fecha.toLocaleString('es-ES', {month: 'long'});
