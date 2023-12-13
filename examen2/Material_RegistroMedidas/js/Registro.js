export default class Registro{
    #medidas = new Map;

    #calculaCodigoNoRepetido(){
        let repe = false;
        let numero = 0;

        do {
            for (let i = 0; i < 10; i++) {
                const max = 9;
                const random = Math.floor(Math.random() * max);

                numero *= 10;
                numero += random;
            }

            numero = this.#decToHex(numero);

            numero = numero.substring(0,6);

            for (var [key, value] of this.#medidas) {
                if (key === numero){
                    repe = true
                }
            }

        } while (repe)

        return numero;
    }

    #decToHex(num) {
        return num.toString(16)
    }

    addMedida(medida){
        let clave = this.#calculaCodigoNoRepetido();

        this.#medidas.set(clave, medida);

        return clave;
    }

    borrarMedida(clave){
        this.#medidas.delete(clave)
    }

    getMedias(){
        return this.#medidas;
    }
}