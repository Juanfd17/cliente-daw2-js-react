export default class Familia{
    constructor(domicilio, renta, miembros) {
        this.domicilio = domicilio;
        this.renta = renta;
        this.miembros = miembros;
    }

    comer() {
        let texto = "";
        this.miembros.forEach(miembro => {
            texto += miembro.comer()
        });
        
        return texto;
    }

    cenar() {
        let texto = "";
        this.miembros.forEach(miembro => {
            texto += miembro.getNombre() + " " + miembro.cenar() + "\n"
        });

        return texto;
    }
}