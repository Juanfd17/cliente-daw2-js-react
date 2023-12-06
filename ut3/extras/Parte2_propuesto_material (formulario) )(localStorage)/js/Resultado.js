export default class Resultado{
    nombre;
    fechaNacimiento;
    dni;
    email;
    contrasenia;
    genero;
    boletin;
    ofertas;
    favorito;
    comentario;

    constructor(nombre, fechaNacimiento, dni, email, contrasenia, genero, boletin, ofertas, favorito, comentario){
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
        this.email = email;
        this.contrasenia = contrasenia;
        this.genero = genero;
        this.boletin = boletin;
        this.ofertas = ofertas;
        this.favorito = favorito;
        this.comentario = comentario;
    }

    get nombre(){
        return this.nombre;
    }

    get fechaNacimiento(){
        return this.fechaNacimiento;
    }

    get dni(){
        return this.dni;
    }

    get email(){
        return this.email;
    }

    get contrasenia(){
        return this.contrasenia;
    }

    get genero(){
        return this.genero;
    }

    get boletin(){
        return this.boletin;
    }

    get ofertas(){
        return this.ofertas;
    }

    get favorito(){
        return this.favorito;
    }

    get comentario(){
        return this.comentario;
    }
}