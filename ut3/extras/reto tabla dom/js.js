let tabla = document.querySelectorAll("div")[0];

console.log(tabla)

let nFilas = 5;
let nColumnas = 3;

for (let nFila = 0; nFila < nFilas; nFila++) {
    let fila = document.createElement("tr")

    for (let nColumna = 0; nColumna < nColumnas; nColumna++) {
        let columna = document.createElement("td")
        columna.innerText = "Celda " + (nFila + 1) + " Columna " + (nColumna + 1);

        fila.appendChild(columna)
    }

    tabla.appendChild(fila);
}