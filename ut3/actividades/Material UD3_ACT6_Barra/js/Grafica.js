export default class Grafica {
    lista = new Map;

    agregar(nodo, valor) {
        this.lista.set(nodo, valor);
    }

    obtener(nodo) {
        return this.lista.get(nodo);
    }

    eliminar(nodo) {
        this.lista.delete(nodo);
    }

    get lista() {
        return this.lista;
    }

    calculaPorcentaje(key){
        let sumaTotal = 0
        for (let [key, value] of this.lista) {
            sumaTotal += parseInt(value);
        }

        return (this.obtener(key) * 100) / sumaTotal
    }
}