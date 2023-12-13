/* Clase para almacenar los datos del formulario
* sólo se han almacenado algunos datos como ejemplo, el resto se harían igual
*/
class Contacto{
    #nombre;
    #fecha;
    #email;
    #dni;
    #password;
    #favorito;
    #genero;
    #comentario;

    constructor(nombre, fecha, dni, email, password ){
        this.#nombre=nombre;
        this.#fecha=fecha;
        this.#dni=dni;
        this.#email=email;
        this.#password=password;
        this.#favorito=favorito;
    }
    set Genero(genero){
        this.#genero=genero;
    }
    get Genero(){
        return this.#genero?"Hombre":"Mujer";
    }
    set Favorito(favorito){
        this.#favorito=favorito;
    }
    set Comentario(comentario){
        this.#comentario=comentario;
    }
    toString(){
        return ("Nombre completo:\n"+this.#nombre+ " "+ "\nEmail:"+this.#email);
    }
}