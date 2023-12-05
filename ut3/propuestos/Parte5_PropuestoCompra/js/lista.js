window.onload = principal;

let caja;
let mas;
let borrar;
let lista;
function principal(){
    caja = document.querySelector("#caja")
    mas = document.querySelector("#mas")
    borrar = document.querySelector("#limpiar")
    if (document.querySelector("#lista") === null){
        lista = document.createElement("ul")
    }

    document.querySelector("#divisionBase").append(lista)

    mas.addEventListener("click", anadir)
    caja.addEventListener("keypress", anadir)
    borrar.addEventListener("click", limpiar)
}

function anadir(ev) {
    console.log(ev)
    if (ev.type === "click" || (ev.type === "keypress" && ev.keyCode === 13)){
        let li = document.createElement("li");
        li.innerText = caja.value;
        li.className = "listitem"
        li.addEventListener("click", tachar)
        lista.appendChild(li);
    }
}

function limpiar() {
    let elementos = Array.from(lista.childNodes);

    elementos.forEach((elemento) => {
        if (elemento.className.includes("done")){
            lista.removeChild(elemento);
        }
    })
}

function tachar(ev) {
    this.className += " done"
}