window.onload = principal;

function principal() {
    let animales = document.querySelectorAll(".perro, .gato");

    for (let animal of animales) {
        animal.addEventListener("click", manejadoraClick);
    }
}

function manejadoraClick(ev) {
    document.querySelector("#ultimo").innerText = "Has pulsado un " + ev.currentTarget.className

    let texto = ev.currentTarget.parentNode.querySelector(".mensaje").innerText

    if (texto === "Sin pulsaciones"){
        texto =  1;
    } else {
        texto = parseInt(texto) + 1;
    }

    ev.currentTarget.parentNode.querySelector(".mensaje").innerText = texto;
}