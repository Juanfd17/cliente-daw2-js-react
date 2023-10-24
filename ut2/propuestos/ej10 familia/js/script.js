import Padre from './Padre.js';
import Hijo from './Hijo.js';

let padre = new Padre('Juan', 'Pérez', 'Toyota');
console.log(padre.getNombre(), padre.getApellidos(), padre.getCoche());
console.log(padre.comer());
console.log(padre.cenar());

let hijo = new Hijo('Pedro', 'Pérez', 'Yamaha');
console.log(hijo.getNombre(), hijo.getApellidos(), hijo.getMoto());
console.log(hijo.comer());
console.log(hijo.cenar());
