export default class Propietario{
    nombre
    genero
    miembros

    constructor(nombre, genero, miembros) {
        this.nombre = nombre;
        this.genero = genero;
        this.miembros = miembros;
    }

    get nombre() {
        return this.nombre;
    }

    set nombre(value) {
        this.nombre = value;
    }

    get genero() {
        return this.genero;
    }

    set genero(value) {
        this.genero = value;
    }

    get miembros() {
        return this.miembros;
    }

    set miembros(value) {
        this.miembros = value;
    }
}