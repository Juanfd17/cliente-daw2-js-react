import Equipo from "./Equipo.js";

export default class Aula{
    #numero = 0;
    #equipos = [];
    #puestos = 0;


    constructor(numero, fila, columna) {
        this.#numero = numero;
        this.#inicializar(fila, columna);
        this._numero = numero;
        this.#puestos = fila * columna;
    }

    #inicializar(fila, columna){
        for (let i = 0; i < fila; i++) {
            this.#equipos[i] = new Array(columna).fill(null);
        }
    }

    activaEquipo(equipo, fila, columna){
        if (this.#equipos.length >= fila && this.#equipos[fila].length >= columna && this.#equipos[fila][columna] === null){
            this.#equipos[fila][columna] = equipo;
            return true;
        } else if (equipo.Personal && this.#equipos.length >= fila){
            for (let i = this.#equipos[fila].length -1; i > columna ; i--) {
                this.#equipos[fila][i + 1] = this.#equipos[fila][i];
            }

            this.#equipos[fila][columna] = equipo;

            return true;
        }

        return false;
    }

    getPosicion(idEquipo){
        for (let fila = 0; fila < this.#equipos.length; fila++) {
            for (let columna = 0; columna < this.#equipos[fila].length; columna++) {
                if (idEquipo === this.#equipos[fila][columna].id()){
                    return posicion[fila][columna];
                }
            }
        }

        return null
    }

    getPorcentajeOcupacion(){
        let puestosUsados = this.calculaPuestosUsados();
        let puestosTotales = this.calculaPuestos();
        return (puestosUsados / puestosTotales) * 100;
    }

    calculaPuestos(){
        let puestos = 0;

        for (let i = 0; i < this.#equipos.length; i++) {
            puestos += this.#equipos[i].length;
        }

        return this.#puestos;
    }

    calculaPuestosUsados(){
        let puestos = 0;

        for (let i = 0; i < this.#equipos.length; i++) {
            for (let j = 0; j < this.#equipos[i].length; j++) {
                if (this.#equipos[i][j] != null){
                    puestos ++;
                }
            }
        }

        return puestos;
    }


    get Numero() {
        return this.#numero;
    }


    get Equipos() {
        return this.#equipos;
    }

    get Puestos() {
        return this.#puestos;
    }
}