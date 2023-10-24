import Padre from './Padre.js';
import Hijo from './Hijo.js';
import Familia from './Familia.js';

let padre = new Padre('Juan', 'Pérez', 'Toyota');
let hijo1 = new Hijo('Pedro', 'Pérez', 'Yamaha');
let hijo2 = new Hijo('Mige', 'Pérez', 'Yamaha');
let hijo3 = new Hijo('Nico', 'Pérez', 'Yamaha');

let miembros = [padre, hijo1, hijo2, hijo3];

let familia = new Familia("Direccion", 100, miembros);

console.log(familia.cenar());