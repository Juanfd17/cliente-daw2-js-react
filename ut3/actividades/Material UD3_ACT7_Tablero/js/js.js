let tablero = document.createElement("div")
var colorActual = "#FFFFFF"
var pintarActivo = true
tablero.id = "contenedor"
document.body.append(tablero)

let titulo = document.createElement("h1")
titulo.innerText = "TABLERO DE DIBUJO"
tablero.append(titulo)

let parrafo1 = document.createElement("p")
parrafo1.innerText = "Haga CLICK en un color para comenzar a pintar"
tablero.append(parrafo1)


var colores = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ffffff"]
let paleta = document.querySelector("#paleta")

paleta = document.createElement("div")
paleta.id = "paleta"

for (let i = 0; i < colores.length; i++) {
    let divColor = document.createElement("div")
    divColor.className = "color"
    divColor.style.backgroundColor = colores[i];

    divColor.addEventListener("click", function (){
        ponerColores(i)
    })

    paleta.append(divColor)
}

function ponerColores(color) {
    let colores = document.querySelectorAll(".color");

    for (let i = 0; i < colores.length; i++) {
        colores[i].classList.remove("seleccionado")

        if (i === color) {
            colores[i].classList.add("seleccionado")

            let estado = document.querySelector("#estado")
            estado.innerText = "ACTIVO"
            estado.style.color = this.colores[i]
            colorActual = this.colores[i]
            pintarActivo = true
        }
    }
}



tablero.append(paleta)



let parrafo2 = document.createElement("p")
parrafo2.innerText = "Estado del pincel: "

let estado = document.createElement("span")
estado.innerText = "SIN SELECCIONAR"
estado.id = "estado"

parrafo2.append(estado)

tablero.append(parrafo2)

let zonaDibujo = document.createElement("div");
zonaDibujo.className = "zonaDibujo"

let fila = 40
let columna = 40


for (let filaN = 0; filaN < fila; filaN++) {
    let fila = document.createElement("div")
    fila.className = "filadibujo"
    fila.id = "columna" + filaN

    for (let columnaN = 0; columnaN < columna; columnaN++) {
        let columna = document.createElement("div")
        columna.className = "celdadibujo"
        columna.id = "columna" + filaN + "-" + columnaN

        columna.addEventListener("mouseover", function (){
            cambiarColor(this.id)
        })

        columna.addEventListener("click", function (){
            cambiarEstado()
        })

        fila.append(columna)
    }

    zonaDibujo.append(fila)
}

tablero.append(zonaDibujo)

function cambiarColor(id) {
    if (pintarActivo){
        let columna = document.querySelector("#" + id);
        columna.style.backgroundColor = colorActual
    }
}

function cambiarEstado() {
    if (pintarActivo){
        pintarActivo = false
        estado.innerText = "INACTIVO"
    } else {
        pintarActivo = true
        estado.innerText = "ACTIVO"
    }
}
