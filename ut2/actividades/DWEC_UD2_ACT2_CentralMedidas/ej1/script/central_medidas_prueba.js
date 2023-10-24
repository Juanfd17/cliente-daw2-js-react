import CentralMedidas from "./CentralMedidas.js";

let centralMedidas = new CentralMedidas();

console.log(centralMedidas.insertaMedida("Oviedo", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]))
console.log(centralMedidas.insertaMedida("Oviedo", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]))
console.log(centralMedidas.mediaMedidas("Oviedo"));
console.log(centralMedidas.insertaAleatorio("Santander"));
console.log(centralMedidas.insertaAleatorio("Santander"));
console.log(centralMedidas.mediaMedidas("Santander"));
console.log(centralMedidas.mediaMedidasTotal());
console.log(centralMedidas.eliminaCiudad("Santander"))
console.log(centralMedidas.mediaMedidas("Santander"));
centralMedidas.toConsole();
console.log(centralMedidas.insertaAleatorio("Santander"));
centralMedidas.toConsole();
