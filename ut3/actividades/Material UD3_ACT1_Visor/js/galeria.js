export default class Galeria {
    #imagenes;
    #imagenActual;


    constructor(cantidadImagenes) {

        this.#imagenes = [];
        for (let i = 1; i <= cantidadImagenes; i++) {
            this.#imagenes.push("./images/foto" + i + ".jpg");
        }
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    aleatoria(){
        this.#imagenActual = this.getRandomInt(this.#imagenes.length);
        this.actualizarFoto();
        return this.#imagenActual;
    }


    primera(){
        this.#imagenActual = 0;
        this.actualizarFoto();
        return this.#imagenActual;
    }

    ultima(){
        this.#imagenActual = this.#imagenes.length -1
        this.actualizarFoto();
        return this.#imagenActual;
    }

    siguiente(){
        this.#imagenActual++;

        if (this.#imagenActual > this.#imagenes.length -1){
            this.#imagenActual--;
        }

        this.actualizarFoto();
        return this.#imagenActual;
    }

    anterior(){
        this.#imagenActual--;

        if (this.#imagenActual < 0){
            this.#imagenActual ++;
        }

        this.actualizarFoto();
        return this.#imagenActual;
    }

    actualizarFoto(){
        document.querySelector('#imagen').style.backgroundImage = 'url('+ this.#imagenes[this.#imagenActual] +')';
    }

    getCantidadFotos(){
        return this.#imagenes.length;
    }
}