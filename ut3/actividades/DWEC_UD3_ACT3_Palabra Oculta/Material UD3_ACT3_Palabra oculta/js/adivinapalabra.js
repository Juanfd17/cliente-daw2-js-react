export default class Adivinapalabra{
    #palabras = [];
    #aciertos;
    #fallos;

    constructor(palabras) {
        this.#palabras = palabras;
        this.#fallos = 0;
        this.#aciertos = 0;
    }

    getPalabraAleatoria(){
        return this.#palabras[this.getIntAleatorio(this.#palabras.length -1)];
    }

    getIntAleatorio(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    getPalabraDesordenada(palabra){
        let palabras = palabra.split("");
        palabras = palabras.sort((a, b) => this.getIntAleatorio(1) - 0.5);
        return palabras.join("");
    }

    addAcierto(){
        this.#aciertos++;
    }

    addFallo(){
        this.#fallos++;
    }

    getMediaAciertos(){
        if (this.#aciertos === 0 && this.#fallos === 0){
            return -1;
        }
        return this.#aciertos / (this.#aciertos + this.#fallos);
    }
}