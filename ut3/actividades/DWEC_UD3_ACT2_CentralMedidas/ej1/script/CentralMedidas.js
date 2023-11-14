export default class CentralMedidas{
    #medidas = [];
    constructor() {
    }

    insertaMedida(ciudad, valores){

        if (this.comprobarExiste(ciudad) || valores.length !== 30){
            return false;
        }

        this.#medidas[ciudad] = valores;

        return this.tabla();
    }

    insertaAleatorio(ciudad){


        let medias = [];

        for (let i = 0; i < 30; i++) {
            medias.push(this.numeroAleatorioEntre(-10, 40))
        }

        return this.insertaMedida(ciudad, medias);
    }

    mediaMedidas(ciudad) {

        if (this.comprobarExiste(ciudad)) {
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
        let nombresCiudades = this.getNombreCiudades()
        for (const ciudad of nombresCiudades) {
            suma += this.mediaMedidas(ciudad)
        }

        return parseFloat((suma / nombresCiudades.length).toFixed(2));
    }

    eliminaCiudad(ciudad){
        if (this.comprobarExiste(ciudad)){
            delete this.#medidas[ciudad];
            return true;
        }

        return false
    }

    toConsole(){
        console.table(this.#medidas)
    }

    numeroAleatorioEntre(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    numerosAleatorios(cantidad, min, max){
        let texto = "";

        for (let i = 1; i < cantidad; i++) {
            texto += this.numeroAleatorioEntre(min, max) + ", "
        }

        texto += this.numeroAleatorioEntre(min, max)

        return texto;
    }

    comprobarExiste(ciudad){
        return this.#medidas[ciudad];
    }

    getNombreCiudades() {
        return Object.keys(this.#medidas);
    }

    tabla(){
        let tabla = "<table>";
        let ciudades = this.#medidas.keys();

        for (let dia = 0; dia < this.#medidas[ciudades[0]] + 2; dia++) {
            for (let ciudad = 0; ciudad < 32; ciudad++) {
                tabla += "<tr>"
                if (ciudad === 0 && dia === 0){
                    tabla += "<td></td>"
                } else if (ciudad === 0 && dia === ciudades.lengt){
                    tabla += "<td>" + dia + "</td>"
                } else if (ciudades === 0){
                    tabla += "<td>Media</td>"
                }

                tabla += "</tr>"
            }
        }

        tabla += "</table>"

        return tabla
    }
}