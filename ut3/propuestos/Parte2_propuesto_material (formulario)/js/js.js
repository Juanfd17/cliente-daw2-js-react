window.onload = princpal;

const CODIGOS_ERROR={
    NOMBRE_VACIO:1,
    PASSWORD_CORTO:2,
    PASSWORDS_DISTINTOS:3,
    EMAIL_TIPO:4
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
}

function salidaNombre(ev) {
    this.setCustomValidity("");
    if (!this.validity.valid) {
        if (this.validity.valueMissing) {
            trataError(CODIGOS_ERROR.NOMBRE_VACIO, this.id);
        } else {
            limpiaError(this.id);
        }
    }
}
function salidaInput(ev) {
    ev.target.value = ev.target.value.toUpperCase();
}

function contraseniasCoinciden(ev) {
    $contrasenia = document.querySelector("#password");
    $errorPas = document.querySelector("#error_password2");

    if (ev.target.value === $contrasenia.value){
        $errorPas.innerText = "";
        $errorPas.style.display = "none";
    } else {
        $errorPas.innerText = "Las contraseñas no coinciden";
        $errorPas.style.display = "block";
    }
}

function mostrarTodo(){
    // type="text"
    document.querySelectorAll("input[type='text']").forEach((option)=>{
        console.log(option.id + ": " + option.value);
    });
    // type="email"
    document.querySelectorAll("input[type='email']").forEach((option)=>{
        console.log(option.id + ": " + option.value);
    });
    // type="date"
    document.querySelectorAll("input[type='date']").forEach((option)=>{
        console.log(option.id + ": " + option.value);
    });
    // type="password"
    document.querySelectorAll("input[type='password']").forEach((option)=>{
        console.log(option.id + ": " + option.value);
    });
    // type="radio"
    document.querySelectorAll("input[name='genero']").forEach((option)=>{
        if(option.checked){
            console.log(option.id + ": " + option.value);
        }
    });
    // type="checkbox"
    document.querySelectorAll("input[type='checkbox']").forEach((option)=>{
        console.log(option.id + ": " + option.checked);
    });
    // select
    let selecion = document.querySelector("#favorito");
    console.log(selecion.id + ": " + selecion.options[selecion.selectedIndex].value);
    // textarea
    let comentario = document.querySelector("#comentario");
    console.log(comentario.id + ": " + comentario.value);
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
    }
}

function limpiaError(id) {
    var campoError=document.querySelector("#error_"+id)
    campoError.style.display = "none"
    campoError.innerHTML = ""
}