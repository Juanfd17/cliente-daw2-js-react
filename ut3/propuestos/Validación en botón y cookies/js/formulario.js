
/* Fichero formulario. js
 * Autor: María R. F.
 * 
* Fichero con las funciones de tratamiento de eventos del formulario 
 * Se hacen uso de las funciones y objetos definidas en 
 * funciones.js y errores.js */

/* Manejador del evento onload().
 * Es la única sentencia que se invoca en el cuerpo principal del script,
 * el resto de sentencias (salvo la declaración de la variable global)
 * se ejecutan a través de funciones.
 */
var CODIGOS_ERROR={
    NOMBRE_VACIO:1,
    PASSWORD_CORTO:2,
    PASSWORDS_DISTINTOS:3,
    DNI_INCORRECTO:4,
    EMAIL_TIPO:5, 
    CAMPO_VACIO: 6
};

window.addEventListener('load',cargaPagina);

function cargaPagina(){
   
    document.querySelectorAll("input[type='text'],input[type='email']").forEach(campo=>{
                                            campo.addEventListener('blur',aMayusculas);})
    
    document.querySelector("#nombre, #password, #email, #dni").addEventListener('invalid',muestraError);   

    document.querySelectorAll("input[type='text'],input[type='password'],input[type='email']").forEach(campo=>{
        campo.addEventListener('input',(e)=>{limpiaError(e.currentTarget.id)})});

    document.querySelector("#enviar").addEventListener('click',validaFormulario);
}

/* Manejador para la pulsación del botón(). 
 *  
 *  En caso de que haya algún error (bien sea por no haber introducido los campos
 *  obligatorios o por haber errores en el resto de campos) se anula el envío del formulario
 *  Además se resalta el primer error de en el formulario.
 * */
function validaFormulario(){   
    if (document.querySelector("#formulario").checkValidity()){
        if((DNICorrecto(document.getElementById("dni").value))){     
            if(document.getElementById("password").value==document.getElementById("password2").value){
                var contacto=new Contacto(document.querySelector("#nombre").value, document.querySelector("#fecha_nacimiento").value,document.querySelector("#dni").value, document.querySelector("#email").value,document.querySelector("#password").value )
                contacto.Genero=document.querySelector("#genero_hombre").isChecked;
                contacto.Favorito=document.querySelector("#favorito").options[document.querySelector("#favorito").selectedIndex].text;
                contacto.Comentario=document.querySelector("#comentario").value;
                alert(contacto.toString());
                return;
            }
            else{
                trataError("password2",CODIGOS_ERROR.PASSWORDS_DISTINTOS);    
            }
         }
    else{
        trataError("dni",CODIGOS_ERROR.DNI_INCORRECTO);
    }
    }
    else{
        document.querySelector("#formulario").reportValidity();  
    }
    actualizaIntentos();
}


/* Manejador para el evento onblur() de todos los campos de texto.
 * 
 * Pasa a mayúsculas el contenido del campo.
 * 
 * Nótese el uso de la variable this para referirnos al componente del formulario
 * que ha desencadenado el evento.
 */
function aMayusculas(){
    this.value=this.value.toUpperCase();
}


/* Manejador para el evento onblur() del nombre.
 * 
 * Al salir del nombre comprobamos si tiene contenido (ya que tiene el atributo required en HTML5).
 * En caso afirmativo, limpiamos el posible mensaje identificativo de error
 */
function muestraError(){  
    if (this.validity.valueMissing && this.id=="nombre"){
            this.setCustomValidity("No seas tímido, dinos tu nombre");
        }
    if (this.validity.valueMissing)
         trataError(this.id,CODIGOS_ERROR.CAMPO_VACIO)
    if (this.validity.typeMismatch) 
        trataError(this.id,CODIGOS_ERROR.EMAIL_TIPO)
    if (this.validity.patternMismatch)
        trataError(this.id,CODIGOS_ERROR.DNI_INCORRECTO)
    if (this.validity.tooShort) 
        trataError(this.id,CODIGOS_ERROR.PASSWORD_CORTO)
}


/* Devuelve verdadero si la cadena proporcionada es un DNI válido */
function DNICorrecto(dni){
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D','X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E','T'];
     if(dni.charAt(8) != letras[(dni.substring(0, 8))%23])
         return false;
    return true;
 }



/* Función encargada de manejar los errores que se van produciendo.
 * Recibe el id del campo asociado al error y el código del error que se 
 * ha producido.
 * 
 * En caso de ser un error nuevo (que no se había producido previamente):
 *   - Muestra la capa correspondiente al error para el campo donde se ha producido
 *     el error y añade el texto correspondiente.
 *     
 */
function trataError(idCampo,codigoError){
        var campoError=document.getElementById("error_"+idCampo);
        console.log("Tratando error en campo "+idCampo);

        campoError.style.display="block";
        switch(codigoError){
            case CODIGOS_ERROR.NOMBRE_VACIO:
                campoError.innerHTML="El nombre no puede ser vacío";
                break;

            case CODIGOS_ERROR.PASSWORDS_DISTINTOS:
                campoError.innerHTML="Las contraseñas no coinciden";
                break;   

            case CODIGOS_ERROR.PASSWORD_CORTO:
                campoError.innerHTML="La contraseña es demasiado corta";
                break;      
           
            case CODIGOS_ERROR.DNI_INCORRECTO:
                campoError.innerHTML="El formato del DNI es incorrecto";
                break;           
            case CODIGOS_ERROR.EMAIL_TIPO:
                campoError.innerHTML= "El formato del email es incorrecto";
                break;
            case CODIGOS_ERROR.CAMPO_VACIO:
                campoError.innerHTML= "El campo "+idCampo+" es obligatorio";
                break;
        }
}


function limpiaError(id){
        var campoError=document.querySelector("#error_"+id);
        document.querySelector("#"+id).setCustomValidity("");
        campoError.style.display="none";
        campoError.innerHTML="";  

}
 
function actualizaIntentos(){
    var numeroIntentos=1;
    if(hayCookies()){
        if(getCookie("contador")==null)
                  setCookie("contador",numeroIntentos);
        else{
            numeroIntentos=parseInt(getCookie("contador"));
            numeroIntentos++;
            setCookie("contador",numeroIntentos);
        }
    }
    document.querySelectorAll(".intentos")[0].innerHTML="Número de intentos: "+numeroIntentos;
}