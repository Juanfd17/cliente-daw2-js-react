import Miembro from './Miembro.js';

export default class Hijo extends Miembro {
    constructor(nombre, apellidos, moto = 'Sin moto') {
        super(nombre, apellidos);
        this.moto = moto;
    }

    getMoto() {
        return this.moto;
    }

    setMoto(moto) {
        this.moto = moto;
    }
}