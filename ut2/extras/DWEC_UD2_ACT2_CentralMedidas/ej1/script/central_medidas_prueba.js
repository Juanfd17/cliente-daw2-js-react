import CentralMedidas from "./CentralMedidas.js";

let centralMedidas = new CentralMedidas();

console.log("crea oviedo true: " + centralMedidas.insertaMedida("Oviedo", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]))
console.log("crea oviedo false: " + centralMedidas.insertaMedida("Oviedo", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]))
console.log("media oviedo: " + centralMedidas.mediaMedidas("Oviedo"));
console.log("")
console.log("crea santander true: " + centralMedidas.insertaAleatorio("Santander"));
console.log("crea santander false: " + centralMedidas.insertaAleatorio("Santander"));
console.log("media santander: " + centralMedidas.mediaMedidas("Santander"));
console.log("")
console.log("media total: " + centralMedidas.mediaMedidasTotal());
console.log(centralMedidas.mediaMedidas("Santander"));
centralMedidas.toConsole();
centralMedidas.toHTML();