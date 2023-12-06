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
    guardarEnLocalStorage("nombre");
    guardarEnLocalStorage("fecha_nacimiento");
    guardarEnLocalStorage("dni");
    guardarEnLocalStorage("email");
    guardarEnLocalStorage("password");

    guardarEnLocalStorage("genero_hombre");
    guardarEnLocalStorage("genero_mujer");

    guardarEnLocalStorage("boletin");
    guardarEnLocalStorage("ofertas");

    guardarEnLocalStorage("favorito");

    guardarEnLocalStorage("comentario");
}

function guardarEnLocalStorage(id) {
    let input = document.querySelector("#" + id);

    let valor;

    if (input.type === 'checkbox') {
        valor = input.checked;
    } else {
        valor = input.value;
    }

    if (id.includes("genero")) {
        localStorage.setItem("genero", valor);
    } else {
        localStorage.setItem(id, valor);
    }

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
    cargarCampoDesdeLocalStorage("nombre");
    cargarCampoDesdeLocalStorage("fecha_nacimiento");
    cargarCampoDesdeLocalStorage("dni");
    cargarCampoDesdeLocalStorage("email");
    cargarCampoDesdeLocalStorage("password");

    cargarCampoRadioDesdeLocalStorage("genero");

    cargarCampoDesdeLocalStorage("boletin");
    cargarCampoDesdeLocalStorage("ofertas");

    cargarCampoSelectDesdeLocalStorage("favorito");

    cargarCampoDesdeLocalStorage("comentario");
}

function cargarCampoDesdeLocalStorage(id) {
    let valor = localStorage.getItem(id);
    let input = document.querySelector("#" + id);
    if (input && valor !== null) {
        if (input.type === 'checkbox') {
            input.checked = (valor === 'true');
        } else {
            input.value = valor;
        }
    }
}

function cargarCampoRadioDesdeLocalStorage(nombre) {
    let valor = localStorage.getItem(nombre);
    let radios = document.querySelectorAll("input[name=" + nombre +"]");
    radios.forEach((radio) => {
        radio.checked = (radio.value === valor);
    });
}

function cargarCampoSelectDesdeLocalStorage(id) {
    let valor = localStorage.getItem(id);
    let select = document.querySelector("#" + id);
    if (select) {
        select.value = valor;
    }
}