export default class Miembro {
    constructor(nombre = "Sin nombre", apellidos = "Sin apellidos") {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getApellidos() {
        return this.apellidos;
    }

    setApellidos(apellidos) {
        this.apellidos = apellidos;
    }

    comer() {
        return "Estoy comiendo";
    }

    cenar() {
        return "Estoy cenando";
    }
}