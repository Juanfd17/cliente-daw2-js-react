import Miembro from './Miembro.js';

export default class Padre extends Miembro {
    constructor(nombre, apellidos, coche) {
        super(nombre, apellidos);
        this.coche = coche;
    }

    getCoche() {
        return this.coche;
    }

    setCoche(coche) {
        this.coche = coche;
    }

    comer() {
        return (super.comer() + " huevos");
    }

    cenar() {
        return (super.cenar() + " huevos");
    }
}