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
                suma += parseInt(medida);
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
        let ciudades = this.#medidas.keys();
        let tabla = "<table border='2'>";

        if (Object.keys(this.#medidas).length === 0){
            return "";
        }

        tabla += "<tr>";
        for (let dias = 0; dias < 32; dias++) {
            if (dias === 0) {
                tabla += "<td></td>";
            } else if (dias < 31) {
                tabla += "<td>" + dias + "</td>";
            } else {
                tabla += "<td>Medias</td>";
            }
        }
        tabla += "</tr>";

        for (let ciudad in this.#medidas) {
            tabla += "<tr>";
            tabla += "<td>" + ciudad + "</td>";

            for (let dia = 0; dia < this.#medidas[ciudad].length; dia++) {
                tabla += "<td>" + this.#medidas[ciudad][dia] + "</td>";
            }

            tabla += "<td>" + this.mediaMedidas(ciudad) + "</td>";

            tabla += "</tr>";
        }

        tabla += "</table>";


        return tabla
    }
}