class Miembro {
    #nombre;
    #apellidos
    constructor(nombre, apellidos) {
        this.#nombre = nombre;
        this.#apellidos = apellidos;
    }

    get Nombre() {
        return this.#nombre;
    }

    set Nombre(value) {
        this.#nombre = value;
    }

    get Apellidos() {
        return this.#apellidos;
    }

    set Apellidos(value) {
        this.#apellidos = value;
    }

    comer(){
        return "Estoy comiendo";
    }

    cenar(){
        return "Estoy cenando"
    }
}

let miembro = new Miembro("Pepe", "Lopez")
//console.log(miembro.#apellidos);
console.log(miembro.comer());

console.log(miembro.Apellidos);