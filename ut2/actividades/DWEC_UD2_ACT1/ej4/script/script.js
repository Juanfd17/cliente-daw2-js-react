//console.log( validaSudoku([
//    [ 6, 3, 9, 5, 7, 4, 1, 8, 2 ],
//    [ 5, 4, 1, 8, 2, 9, 3, 7, 6 ],
//    [ 7, 8, 2, 6, 1, 3, 9, 5, 4 ],
//    [ 1, 9, 8, 4, 6, 7, 5, 2, 3 ],
//    [ 3, 6, 5, 9, 8, 2, 4, 1, 7 ],
//    [ 4, 2, 7, 1, 3, 5, 8, 6, 9 ],
//    [ 9, 5, 6, 7, 4, 8, 2, 3, 1 ],
//    [ 8, 1, 3, 2, 9, 6, 7, 4, 5 ],
//    [ 2, 7, 4, 3, 5, 1, 6, 9, 8 ]
//]));

console.log( validaSudoku([
    [ 1, 2, 3, 1, 2, 3, 1, 2, 3 ],
    [ 4, 5, 6, 4, 5, 6, 4, 5, 6 ],
    [ 7, 8, 9, 7, 8, 9, 7, 8, 9 ],
    [ 1, 2, 3, 1, 2, 3, 1, 2, 3 ],
    [ 4, 5, 6, 4, 5, 6, 4, 5, 6 ],
    [ 7, 8, 9, 7, 8, 9, 7, 8, 9 ],
    [ 1, 2, 3, 1, 2, 3, 1, 2, 3 ],
    [ 4, 5, 6, 4, 5, 6, 4, 5, 6 ],
    [ 7, 8, 9, 7, 8, 9, 7, 8, 9 ],
]));

function validaSudoku(sudoku) {

    //columnas
    for (let i = 0; i < sudoku.length; i++) {
       if (tieneNumerosRepetidos(sudoku[i])){
           //return false;
       }
    }

    //filas
    for (let i = 0; i < sudoku.length; i++) {
        let numeros = [];
        for (let j = 0; j < sudoku[i].length; j++) {
            numeros.push(sudoku[j][i])
        }

        if (tieneNumerosRepetidos(numeros)){
            //return false;
        }
    }

    //3 * 3
    for (let i = 0; i < sudoku[0].length; i += 3) {
        for (let j = 0; j < sudoku.length; j += 3) {
            numeros = [];

            for (let k = 1; k < 4; k++) {
                for (let l = 1; l < 4; l++) {
                    numeros.push(sudoku[(k * i) - 1][(l * j) - 1])
                }
            }

            console.log(numeros)
            if (tieneNumerosRepetidos(numeros)){
                return false;
            }
        }
    }

    return true;
}

function tieneNumerosRepetidos(numeros) {
    let numerosSet = new Set(numeros);

    return !(numerosSet.size === numeros.length);
}