window.onload = princpal;

function princpal() {
    let inputs = document.querySelectorAll('input[type = "text"]');

    for (let input of inputs) {
        input.addEventListener("blur", salidaInput);
    }

    let password2 = document.querySelector("#password2");
    password2.addEventListener("blur", contraseniasCoinciden)

    document.querySelector("#enviar").addEventListener("click", mostrarTodo);
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