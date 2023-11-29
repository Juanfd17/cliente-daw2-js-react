window.onload = princpal;

const CODIGOS_ERROR={
    NOMBRE_VACIO:1,
    PASSWORD_CORTO:2,
    PASSWORDS_DISTINTOS:3,
    EMAIL_TIPO:4,
    DNI_INCORRECTO:5,
    FECHA_INCORRECTA:6
};

function princpal() {
    let inputs = document.querySelectorAll('input[type = "text"]');

    for (let input of inputs) {
        input.addEventListener("blur", salidaInput);
    }

    document.querySelector("#nombre").addEventListener("change", borrarMensage);
    document.querySelector("#fecha_nacimiento").addEventListener("change", borrarMensage)
    document.querySelector("#dni").addEventListener("change", borrarMensage);
    document.querySelector("#email").addEventListener("change", borrarMensage);
    document.querySelector("#password").addEventListener("change", borrarMensage);
    document.querySelector("#password2").addEventListener("change", borrarMensage)

    document.querySelector("#enviar").addEventListener("click", mostrarTodo);

}

function salidaInput(ev) {
    ev.target.value = ev.target.value.toUpperCase();
}

function borrarMensage(ev){
    limpiaError(this.id)
}

function contraseniasCoinciden() {
    let contrasenia = document.querySelector("#password");
    let contrasenia2 = document.querySelector("#password2");

    if (contrasenia2.value === contrasenia.value){
        limpiaError(this.id)
    } else {
        trataError(contrasenia2.id)
    }
}

function contraniaValida(ev) {
    limpiaError(this.id);
}


function mostrarTodo(){
    let nErrores = getCookie("errores");
    if (nErrores >= 3){
        let erroresTotales = document.querySelector("#erroresTotales");
        erroresTotales.style.display = "block"
        erroresTotales.innerText = "Has fallado " + nErrores + " veces y has superado el numero maxio de intentos"
    } else {
        document.querySelectorAll("input").forEach((option) => {
            if (option.checkValidity()) {
                console.log(option.id + " correcto")
            } else {
                console.log(option.id + " mal")
                trataError(option.id)
            }
        })

        contraseniasCoinciden();
    }
}

function trataError(id) {
    let error = "";

    if (id === "nombre"){
        error = CODIGOS_ERROR.NOMBRE_VACIO
    } else if(id === "fecha_nacimiento"){
        error = CODIGOS_ERROR.FECHA_INCORRECTA
    } else if(id === "dni"){
        error = CODIGOS_ERROR.DNI_INCORRECTO
    } else if(id === "email") {
        error = CODIGOS_ERROR.EMAIL_TIPO
    } else if(id === "password"){
        error = CODIGOS_ERROR.PASSWORD_CORTO
    } else if(id === "password2"){
        error = CODIGOS_ERROR.PASSWORDS_DISTINTOS
    }

    var campoError=document.querySelector("#error_"+id)
    campoError.style.display = "block"
    switch (error) {
        case 1:
            campoError.innerText = "No seas timid@, dinos tu nombre"
        break

        case 2:
            campoError.innerText = "La contraseña es demasiado corta"
        break

        case 3:
            campoError.innerText = "Las contraseñas no coinciden"
        break

        case 4:
            campoError.innerText = "El correo no es valido"
        break

        case 5:
            campoError.innerText = "El DNI no es valido"
        break

        case 6:
            campoError.innerText = "Introduce una fecha valida"
        break
    }

    let nErrores = getCookie("errores");

    if (nErrores === 0){
        nErrores = 1
    } else {
        nErrores ++;
    }

    let erroresTotales = document.querySelector("#erroresTotales");
    erroresTotales.style.display = "block"
    erroresTotales.innerText = "Has fallado " + nErrores + " veces"

    setCookie("errores", nErrores, 1000)
}

function limpiaError(id) {
    let campoError= document.querySelector("#error_"+id)
    campoError.style.display = "none"
    campoError.innerHTML = ""
}

function setCookie(nombre, valor, expiracion){
    document.cookie = nombre + "=" + valor + ";expires=" + expiracion;
}

function getCookie(nombre){
    let cookies = document.cookie;

    cookies = cookies.split(";")

    for (let cookie = 0; cookie < cookies.length; cookie++) {
        if (cookies[cookie].split("=")[0].trim() === nombre){
            return cookies[cookie].split("=")[1];
        }
    }

    return 0
}