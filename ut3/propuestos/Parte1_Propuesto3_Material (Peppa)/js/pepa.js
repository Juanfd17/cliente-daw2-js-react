window.onload = principal;

function principal() {
    let animales = document.querySelectorAll(".animal");

    for (let animal of animales) {
        animal.addEventListener("click", manejadoraClick);
    }
}

function manejadoraClick(ev) {
    document.querySelector("#ultimo").innerText = "Has pulsado un " + ev.currentTarget.firstElementChild.className

    let texto = ev.currentTarget.querySelector(".mensaje").innerText

    if (texto === "Sin pulsaciones"){
        texto =  1;
    } else {
        texto = parseInt(texto) + 1;
    }

    ev.currentTarget.querySelector(".mensaje").innerText = texto;
}