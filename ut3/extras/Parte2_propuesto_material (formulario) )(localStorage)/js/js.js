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

    cargarDesdeLocalStorage()

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

function mostrarTodo() {
    let resultados = {};

    document.querySelectorAll("input[type='text']").forEach((option) => {
        resultados[option.id] = option.value;
    });

    document.querySelectorAll("input[type='email']").forEach((option) => {
        resultados[option.id] = option.value;
    });

    document.querySelectorAll("input[type='date']").forEach((option) => {
        resultados[option.id] = option.value;
    });

    document.querySelectorAll("input[type='password']").forEach((option) => {
        resultados[option.id] = option.value;
    });

    document.querySelectorAll("input[name='genero']").forEach((option) => {
        if (option.checked) {
            resultados["genero"] = option.value;
        }
    });

    document.querySelectorAll("input[type='checkbox']").forEach((option) => {
        resultados[option.id] = option.checked;
    });

    let seleccion = document.querySelector("#favorito");
    resultados[seleccion.id] = seleccion.options[seleccion.selectedIndex].value;

    let comentario = document.querySelector("#comentario");
    resultados[comentario.id] = comentario.value;

    let resultadoClase = new Resultado(resultados["nombre"], resultados["fecha_nacimiento"], resultados["dni"], resultados["email"], resultados["password"], resultados["genero"], resultados["boletin"], resultados["ofertas"], resultados["favorito"], resultados["comentario"]);

    localStorage.setItem("resultado", JSON.stringify(resultadoClase));
    console.log(JSON.stringify(resultadoClase))
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

function cargarDesdeLocalStorage() {
    let resultadoJSON = localStorage.getItem("resultado");

    if (resultadoJSON) {
        let resultado = JSON.parse(resultadoJSON);

        cargarCampoDesdeLocalStorage("nombre", resultado.nombre);
        cargarCampoDesdeLocalStorage("fecha_nacimiento", resultado.fechaNacimiento);
        cargarCampoDesdeLocalStorage("dni", resultado.dni);
        cargarCampoDesdeLocalStorage("email", resultado.email);
        cargarCampoDesdeLocalStorage("password", resultado.contrasenia);

        cargarCampoRadioDesdeLocalStorage("genero", resultado.genero);

        cargarCampoDesdeLocalStorage("boletin", resultado.boletin);
        cargarCampoDesdeLocalStorage("ofertas", resultado.ofertas);

        cargarCampoSelectDesdeLocalStorage("favorito", resultado.favorito);

        cargarCampoDesdeLocalStorage("comentario", resultado.comentario);
    }
}

function cargarCampoDesdeLocalStorage(id, valor) {
    let input = document.querySelector("#" + id);
    if (input && valor !== undefined) {
        if (input.type === 'checkbox') {
            input.checked = valor;
        } else {
            input.value = valor;
        }
    }
}

function cargarCampoRadioDesdeLocalStorage(nombre, valor) {
    let radios = document.querySelectorAll("input[name=" + nombre +"]");
    radios.forEach((radio) => {
        radio.checked = (radio.value === valor);
    });
}

function cargarCampoSelectDesdeLocalStorage(id, valor) {
    let select = document.querySelector("#" + id);
    if (select && valor !== undefined) {
        select.value = valor;
    }
}