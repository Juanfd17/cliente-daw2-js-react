export default class Equipo{
    #id = "";
    #fecha = new Date();
    #descripcion  = "";
    #personal = false;

    constructor(descripcion, personal, fecha = this.calcularFechaFinCurso()) {
        this.#descripcion = descripcion;
        this.#personal = personal;

        let fechaHoy = new Date();

        if (fecha instanceof Date){
            this.#fecha = fecha;
        } else {
            this.#fecha = fechaHoy.setDate(fechaHoy.getDate() + parseInt(fecha));
        }

        this.calcularId();
    }

    calcularFechaFinCurso(){
        let fechaFinal = new Date(2024, 6, 30);
        let fechaActual = new Date();

        if (fechaActual.getMonth() > 6 || (fechaActual.getMonth() === 6 && fechaActual.getDay() >= 30)){
            fechaFinal.setFullYear(fechaActual.getFullYear() + 1);
        }

        return fechaFinal;
    }

    calcularId(){
        if (this.#personal){
            this.#id += "P"
        } else {
            this.#id += "S"
        }

        this.#id += "-";

        for (let i = 3; i > 0; i--) {
            this.#id += this.#descripcion[this.#descripcion.length - i];
        }

        if (!(this.#fecha instanceof Date)){
            this.#fecha = new Date(this.#fecha);
        }

        this.#id += "-";

        this.#id += this.#fecha.getDay() + "-";
        this.#id += this.#fecha.getMonth() + "-";
        this.#id += this.#fecha.getFullYear();

        //this.#id = "Prueba1"
    }

    get Id() {
        return this.#id;
    }

    set Id(value) {
        this.#id = value;
    }

    get Fecha() {
        return this.#fecha;
    }

    set Fecha(value) {
        this.#fecha = value;
    }

    get Descripcion() {
        return this.#descripcion;
    }

    set Descripcion(value) {
        this.#descripcion = value;
    }

    get Personal() {
        return this.#personal;
    }

    set Personal(value) {
        this.#personal = value;
    }

    toString(){
        return this.#id;
    }
}