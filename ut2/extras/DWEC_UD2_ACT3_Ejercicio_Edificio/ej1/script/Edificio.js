export default class Edificio {
    #calle = "";
    #numero = 0;
    #codigoPostal = 0;
    #plantas = [];

    constructor(calle, numero, codigoPostal ) {
        this.#calle = calle;
        this.#numero = numero;
        this.#codigoPostal = codigoPostal;

        console.log("Construido nuevo edificio en la Calle: " + this.#calle + " Nº: " + this.#numero + "CP: " + this.#codigoPostal);
    }


    get calle() {
        return this.#calle;
    }


    set calle(value) {
        this.#calle = value;
    }

    get numero() {
        return this.#numero;
    }


    set numero(value) {
        this.#numero = value;
    }

    get codigoPostal() {
        return this.#codigoPostal;
    }


    set codigoPostal(value) {
        this.#codigoPostal = value;
    }

    agregaPlantasYPuertas(nPlantas, nPuertas){
        let plantaEmpieza = this.#plantas.length;

        for (let i = plantaEmpieza; i < plantaEmpieza + nPlantas; i++) {
            this.#plantas[i] = new Array(nPuertas).fill(null);
        }
    }

    agregaPropietario(propietario, planta, puerta){
        if (planta < this.#plantas.length && puerta < this.#plantas[planta].length){
            this.#plantas[planta][puerta] = propietario;
            return propietario.nombre + " es ahora el propietario de la puerta " + puerta + " de la planta " +planta;
        } else {
            return "no esiste la puerta " + puerta + " de la planta " + planta;
        }
    }

    imprimePlantas(){
        let texto = "";

        for (let planta = this.#plantas.length -1; planta >= 0 ; planta--) {
            for (let puerta = 0; puerta < this.#plantas[planta].length; puerta++) {
                if (this.#plantas[planta][puerta] === null){
                    texto += "vacio | ";
                } else {
                    texto += this.#plantas[planta][puerta].nombre + " | ";
                }
            }
            texto += "\n";
        }

        console.table(this.#plantas)
        return texto;

    }
}
