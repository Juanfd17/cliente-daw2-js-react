export default class CentralMedidas{
    #medidas = [];
    constructor() {
    }

    insertaMedida(ciudad, valores){

        if (this.#comprobarExiste(ciudad) || valores.length !== 30){
            return false;
        }

        this.#medidas[ciudad] = valores;

        return true;
    }

    insertaAleatorio(ciudad){


        let medias = [];

        for (let i = 0; i < 30; i++) {
            medias.push(this.#numeroAleatorioEntre(-10, 40))
        }

        return this.insertaMedida(ciudad, medias);
    }

    mediaMedidas(ciudad) {

        if (this.#comprobarExiste(ciudad)) {
            let suma = 0;

            for (const medida of this.#medidas[ciudad]) {
                suma += medida;
            }

            suma = (suma / this.#medidas[ciudad].length).toFixed(2);

            return parseFloat(suma);
        }
        return 0;
    }

    mediaMedidasTotal(){
        let suma = 0;
        let nombresCiudades = this.#getNombreCiudades()
        for (const ciudad of nombresCiudades) {
            suma += this.mediaMedidas(ciudad)
        }

        return parseFloat((suma / nombresCiudades.length).toFixed(2));
    }

    eliminaCiudad(ciudad){
        if (this.#comprobarExiste(ciudad)){
            delete this.#medidas[ciudad];
            return true;
        }

        return false
    }

    toConsole(){
        console.table(this.#medidas)
    }

    toHTML(){
        let texto = "";
        let ciudades = this.getNombreCiudades();

        texto += "<table>";
        texto += "<tr><td></td>";

        for (let i = 0; i < this.#medidas[ciudades[0]].length; i++) {
            texto += "<td>" + i + "</td>"
        }

        texto += "</tr>"

        document.getElementById("listado").innerHTML = texto;
    }

    #numeroAleatorioEntre(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    #comprobarExiste(ciudad){
        return this.#medidas[ciudad];
    }

    #getNombreCiudades() {
        return Object.keys(this.#medidas);
    }
}