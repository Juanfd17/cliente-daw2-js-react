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

        for (let planta = 0; planta < this.#plantas.reverse().length; planta++) {
            let piso = document.createElement("div")
            piso.className = "planta"
            let numeroPuertas = this.getNumeroPuertas(planta)
            piso.id = "_" + (this.#plantas.length - planta - 1)

            for (let puerta = 0; puerta < this.#plantas[planta].length; puerta++) {
                let propietario = this.#plantas[planta][puerta]

                let propietarioDiv = this.generarPropietario(propietario, numeroPuertas, this.#plantas.length - planta -1, puerta)

                    piso.append(propietarioDiv)
            }

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

    generarPropietario(propietario, numeroPuertas, piso, puerta){
        let propietarioDiv = document.createElement("div")
        propietarioDiv.className = `propietario col-${numeroPuertas}`
        propietarioDiv.id = "_" + piso + "" + puerta

        let nombrePropietario = document.createElement("p")
        let img = document.createElement("img")

        let botones = document.createElement("div")
        botones.className = "botones"

        if (propietario !== null){
            nombrePropietario.innerText = propietario.nombre
            img.src = "img/familia-2.jpg"

            switch (propietario.miembros) {
                case 1:
                    if (propietario.genero === "hombre"){
                        img.src = "img/hombre.jpg"
                    } else {
                        img.src = "img/mujer.jpg"
                    }
                    break
                case 2:
                    img.src = "img/pareja.jpg"
                    break
                case 3:
                    img.src = "img/familia-1.jpg"
                    break
            }

            let botonModificar = document.createElement("button")
            botonModificar.className = "modificar"
            botonModificar.innerText = "Modificar"

            botonModificar.addEventListener("click", ev => {
                let form = document.querySelector("#formulario")
                form.style.display = "block"

                let formularioModificar = document.querySelector("#formulario-modificar")
                formularioModificar.disabled = false

                let formularioAniadir = document.querySelector("#formulario-aniadir")
                formularioAniadir.disabled = true

                let formPlanta = document.querySelector("#planta")
                let formPuerta = document.querySelector("#puerta")

                formPlanta.value = piso + 1
                formPuerta.value = puerta + 1

                let formNombre = document.querySelector("#nombre")
                let formApellidos = document.querySelector("#apellidos")

                let nombreApellidos = propietario.nombre.split(" ")
                formNombre.value = nombreApellidos[0]
                formApellidos.value = nombreApellidos[1]

                let formFamilia = document.querySelector("#unidad-familiar")

                formFamilia.selectedIndex = 5
                switch (propietario.miembros) {
                    case 1:
                        formFamilia.selectedIndex = 1
                        break

                    case 2:
                        formFamilia.selectedIndex = 2
                        break

                    case 3:
                        formFamilia.selectedIndex = 3
                        break

                    case 4:
                        formFamilia.selectedIndex = 4
                        break
                }

                let genero_hombre = document.querySelector("#genero-hombre")
                let genero_mujer = document.querySelector("#genero-mujer")

                if (propietario.genero === "hombre"){
                    genero_hombre.checked = true
                    genero_mujer.checked = false
                } else {
                    genero_hombre.checked = false
                    genero_mujer.checked = true
                }

            })

            let botonBorrar = document.createElement("button")
            botonBorrar.className = "borrar"
            botonBorrar.innerText = "Borrar"

            botonBorrar.addEventListener("click", ev =>{
                let planta = []

                for (let propietarioT of this.#plantas[propietario.piso -1]) {
                    if (propietario !== propietarioT){
                        planta.push(propietarioT)
                    } else {
                        planta.push(null)

                        let id = "_" + (propietarioT.piso -1) + "" + (propietarioT.puerta -1)
                        let propietarioDiv = document.querySelector("#" + id)
                        propietarioDiv.parentNode.replaceChild(this.generarPropietario(null, this.getNumeroPuertas(propietarioT.piso -1), propietarioT.piso -1, propietarioT.puerta -1), propietarioDiv)
                    }
                }

                this.#plantas[propietario.piso -1] = planta

                console.log(this.imprimePlantas())
            })

            botones.append(botonModificar)
            botones.append(botonBorrar)
        } else {
            nombrePropietario.innerText = "Vacio"
            img.src = "img/vacio.jpg"

            let botonAniadir = document.createElement("button")
            botonAniadir.className = "aniadir"
            botonAniadir.innerText = "Añadir"

            botonAniadir.addEventListener("click", ev =>{
                let form = document.querySelector("#formulario")
                form.style.display = "block"

                let formularioModificar = document.querySelector("#formulario-modificar")
                formularioModificar.disabled = true

                let formularioAniadir = document.querySelector("#formulario-aniadir")
                formularioAniadir.disabled = false


                let formPlanta = document.querySelector("#planta")
                let formPuerta = document.querySelector("#puerta")

                formPlanta.value = piso + 1
                formPuerta.value = puerta + 1

                let formNombre = document.querySelector("#nombre")
                let formApellidos = document.querySelector("#apellidos")

                formNombre.value = ""
                formApellidos.value = ""

                let formFamilia = document.querySelector("#unidad-familiar")

                formFamilia.selectedIndex = 0

                let genero_hombre = document.querySelector("#genero-hombre")
                let genero_mujer = document.querySelector("#genero-mujer")

                genero_hombre.checked = true
                genero_mujer.checked = false
            })

            botones.append(botonAniadir)
        }

        propietarioDiv.append(nombrePropietario)
        propietarioDiv.append(img)
        propietarioDiv.append(botones)

        return propietarioDiv
    }

    modificarPropietario(propietario, planta, puerta){
        let piso =document.querySelector(`#_${planta}`)

        piso.replaceChild(this.generarPropietario(propietario, this.getNumeroPuertas(planta), planta, puerta), document.querySelector(`#_${planta}${puerta}`))
    }
}
