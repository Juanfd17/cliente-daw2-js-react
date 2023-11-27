import Resultado from "./Resultado.js";

window.onload = princpal;

const CODIGOS_ERROR={
    NOMBRE_VACIO:1,
    PASSWORD_CORTO:2,
    PASSWORDS_DISTINTOS:3,
    EMAIL_TIPO:4,
    DNI_INCORRECTO:5
};

function princpal() {
    let inputs = document.querySelectorAll('input[type = "text"]');

    for (let input of inputs) {
        input.addEventListener("blur", salidaInput);
    }

    document.querySelector("#nombre").addEventListener("blur", salidaNombre);

    let password2 = document.querySelector("#password2");
    password2.addEventListener("blur", contraseniasCoinciden)

    document.querySelector("#enviar").addEventListener("click", mostrarTodo);
    let contrasenia = document.querySelector("#password");
    contrasenia.addEventListener("blur", contraniaValida);

    let dni = document.querySelector("#dni");
    dni.addEventListener("blur", dniValido);
}

function dniValido(ev){
    this.setCustomValidity("");
    if (/^\d{8}[A-Za-z]$/.test(this.value)){
        limpiaError(this.id)
    } else {
        trataError(CODIGOS_ERROR.DNI_INCORRECTO, this.id)
    }
}

function salidaNombre(ev) {
    this.setCustomValidity("");
    if (!this.validity.valid) {
        if (this.validity.valueMissing) {
            trataError(CODIGOS_ERROR.NOMBRE_VACIO, this.id);
        }
    } else {
        limpiaError(this.id);
    }
}

function salidaInput(ev) {
    ev.target.value = ev.target.value.toUpperCase();
}

function contraseniasCoinciden(ev) {
    let contrasenia = document.querySelector("#password");
    let errorPas = document.querySelector("#error_password2");

    if (ev.target.value === contrasenia.value){
        limpiaError(this.id)
    } else {
        trataError(CODIGOS_ERROR.PASSWORDS_DISTINTOS, this.id)
    }
}

function contraniaValida(ev) {
    this.setCustomValidity("");
    if (!this.validity.valid) {
        trataError(CODIGOS_ERROR.PASSWORD_CORTO, this.id);
    } else {
        limpiaError(this.id);
    }
}


function mostrarTodo(){
    let resultados = [];

    //quiero meter todos los datos en un array clave valor
    // type="text"
    document.querySelectorAll("input[type='text']").forEach((option)=>{
        resultados.push([option.id, option.value]);
    });
    // type="email"
    document.querySelectorAll("input[type='email']").forEach((option)=>{
        resultados.push([option.id, option.value]);
    });
    // type="date"
    document.querySelectorAll("input[type='date']").forEach((option)=>{
        resultados.push([option.id, option.value]);
    });
    // type="password"
    document.querySelectorAll("input[type='password']").forEach((option)=>{
        resultados.push([option.id, option.value]);
    });
    // type="radio"
    document.querySelectorAll("input[name='genero']").forEach((option)=>{
        if(option.checked){
            resultados.push([option.id, option.value]);
        }
    });
    // type="checkbox"
    document.querySelectorAll("input[type='checkbox']").forEach((option)=>{
        resultados.push([option.id, option.checked]);
    });
    // select
    let selecion = document.querySelector("#favorito");
    resultados.push([selecion.id, selecion.options[selecion.selectedIndex].value]);
    // textarea
    let comentario = document.querySelector("#comentario");
    resultados.push([comentario.id, comentario.value]);

    let resultadoClase = new Resultado(resultados["nombre"],resultados["fecha"], resultados["dni"], resultados["email"], resultados["password"], resultados["genero"], resultados["boletin"], resultados["ofetas"], resultados["favorito"], resultados["comentario"]);
    console.log(resultadoClase);
}

function trataError(error, donde) {
    var campoError=document.querySelector("#error_"+donde)
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
    }
}

function limpiaError(id) {
    let campoError= document.querySelector("#error_"+id)
    campoError.style.display = "none"
    campoError.innerHTML = ""
}