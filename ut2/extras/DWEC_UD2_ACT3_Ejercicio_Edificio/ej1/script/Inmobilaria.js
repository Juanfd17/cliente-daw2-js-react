export default class Inmobilaria{
    #edificios = []

    constructor() {
    }

    addEdificio(edificio){
        this.#edificios.push(edificio)
    }

    getEdificio(calle, numero){
        for (const edificio of this.#edificios) {
            if (edificio.calle === calle && edificio.numero === numero){
                return edificio.imprimePlantas();
            }
        }
    }
}