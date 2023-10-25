import Edificio from "./Edificio.js";
import Propietario from "./Propietario.js";

let edificio = new Edificio("calle1", 12, 33333);
edificio.agregaPlantasYPuertas(2,4)
edificio.agregaPlantasYPuertas(2,2)

console.log(edificio.agregaPropietario(new Propietario("Pepe", "H", 2), 0,0));
console.log(edificio.agregaPropietario(new Propietario("Pepe2", "H", 2), 1,3));
console.log(edificio.agregaPropietario(new Propietario("Pepe3", "H", 2), 2,2));

console.log(edificio.imprimePlantas());