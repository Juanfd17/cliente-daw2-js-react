export default class Medida {
    #fecha;
    #imagen;
    #altura;
    #peso;


    constructor(fecha, imagen, altura, peso, medida) {
            this.#fecha = new Date(fecha);
            this.#imagen = imagen;
        if (medida === "metrico"){
            this.#altura = altura;
            this.#peso = peso;
        } else {
            this.#peso = Medida.LBSaKG(peso);
            this.#altura =  Medida.INaCM(altura);
        }
    }

    getIMC(){
        let imc = this.#peso / ((this.#altura / 100) * (this.#altura / 100));
        return imc.toFixed(2)
    }

    getTipo(){
        let imc = this.getIMC();

        if (imc < 18.5){
            return 1;
        } else if (imc < 25){
            return 2;
        } else if (imc < 30){
            return 3
        } else {
            return 4
        }
    }

    getTipoLargo(){
        let imc = this.getTipo();

        switch (imc) {
            case 1:
                return "Por debajo del peso";
                break;

            case 2:
                return "Peso normal";
                break;

            case 3:
                return "Pre-obesidad";
                break;

            case 4:
                return "Obesidad"
                break
        }
    }

    static KGaLBS(kg){
        return kg * 2.205;
    }

    static LBSaKG(lbs){
        return lbs / 2.205;
    }

    static CMaIN(cm){
        return cm / 2.54;
    }

    static INaCM(inches){
        return inches * 2.54;
    }


    get fecha() {
        return this.#fecha;
    }

    get imagen() {
        return this.#imagen;
    }

    get altura() {
        return this.#altura;
    }

    get peso() {
        return this.#peso;
    }
}