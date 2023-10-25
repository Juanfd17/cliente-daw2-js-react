import Edificio from "./Edificio.js";
import Propietario from "./Propietario.js";
import Inmobilaria from "./Inmobilaria.js";

let edificio = new Edificio("calle1", 12, 33333);
edificio.agregaPlantasYPuertas(2,4)
edificio.agregaPlantasYPuertas(2,2)

console.log(edificio.agregaPropietario(new Propietario("Pepe", "H", 2), 0,0));
console.log(edificio.agregaPropietario(new Propietario("Pepe2", "H", 2), 1,3));
console.log(edificio.agregaPropietario(new Propietario("Pepe3", "H", 2), 2,2));


let edificio1 = new Edificio("calle2", 22, 33333);
edificio1.agregaPlantasYPuertas(5,4)
edificio1.agregaPlantasYPuertas(3,2)

console.log(edificio1.agregaPropietario(new Propietario("Pepe4", "H", 2), 0,0));
console.log(edificio1.agregaPropietario(new Propietario("Pepe5", "H", 2), 1,3));
console.log(edificio1.agregaPropietario(new Propietario("Pepe6", "H", 2), 2,2));

let inmobilaria = new Inmobilaria();

inmobilaria.addEdificio(edificio);
inmobilaria.addEdificio(edificio1);

console.log(inmobilaria.getEdificio("calle1", 12));
console.log(inmobilaria.getEdificio("calle2", 22));
