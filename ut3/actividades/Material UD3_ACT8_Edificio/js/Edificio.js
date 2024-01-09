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

    toHTML(){
        let divEdificio = document.createElement("div")
        divEdificio.className = "edificio"

        let titulo = document.createElement("h1")
        titulo.innerText = `C/ ${this.calle} nº ${this.#numero} ${this.#codigoPostal}`

        divEdificio.append(titulo)

        let divPisos = document.createElement("div")
        divPisos.className = "pisos"

        for (let i = 0; i < this.#plantas.reverse().length; i++) {
            let piso = document.createElement("div")
            piso.className = "planta"
            let numeroPuertas = this.getNumeroPuertas(i)

            this.#plantas[i].map(propietario =>{
                let propietarioDiv = document.createElement("div")
                propietarioDiv.className = `propietario col-${numeroPuertas}`

                let nombrePropietario = document.createElement("p")
                let img = document.createElement("img")

                if (propietario !== null){
                    nombrePropietario.innerText = propietario.nombre
                    switch (propietario.miembros) {
                        case 1:
                            if (propietario.genero === "masculino"){
                                img.src = "img/hombre.jpg"
                            } else {
                                img.src = "img/mujer.jpg"
                            }
                    }
                } else {
                    nombrePropietario.innerText = "Vacio"
                }


                propietarioDiv.append(nombrePropietario)
                propietarioDiv.append(img)

                piso.append(propietarioDiv)
            })

            divPisos.append(piso)
        }

        divEdificio.append(divPisos)

        return divEdificio
    }

    get numeroPlantas(){
        return this.#plantas.length
    }

    getNumeroPuertas(planta){
        return this.#plantas[planta].length
    }

    getpropietario(planta, puerta){
        return this.#plantas[planta][puerta]
    }
}
