import Aula from "./Aula.js";

export default class DptoInformatica{
    #aulas = new Map;


    constructor() {

    }

    addAula(aula, grupo){
        let aulas = new Set(this.#aulas.keys());

        if (aulas.add(grupo)){
            this.#aulas.set(aula.Numero, {"aula":aula, "grupo":grupo});
            return true;
        }

        return false;
    }

    getUbicacion(idEquipo){
        for (let aula of this.#aulas) {
            if (aula.getPosicion(idEquipo) != null){
                return "Aula numero:" + aula.numero() + ", Fila" + aula.getPosicion(idEquipo)[0] + ", Columna: " + aula.getPosicion(idEquipo)[1]
            }
        }

        return "Equipo desoconocido"
    }

    getNEquipos(){
        let cuantos = 0;

        for (var [key, value] of this.#aulas) {
            cuantos += value["aula"].calculaPuestos();
        }

        return cuantos;
    }


    get Aulas() {
        return this.#aulas;
    }
}