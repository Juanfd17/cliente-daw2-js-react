console.log( validaSudoku([
    [ 6, 3, 9, 5, 7, 4, 1, 8, 2 ],
    [ 5, 4, 1, 8, 2, 9, 3, 7, 6 ],
    [ 7, 8, 2, 6, 1, 3, 9, 5, 4 ],
    [ 1, 9, 8, 4, 6, 7, 5, 2, 3 ],
    [ 3, 6, 5, 9, 8, 2, 4, 1, 7 ],
    [ 4, 2, 7, 1, 3, 5, 8, 6, 9 ],
    [ 9, 5, 6, 7, 4, 8, 2, 3, 1 ],
    [ 8, 1, 3, 2, 9, 6, 7, 4, 5 ],
    [ 2, 7, 4, 3, 5, 1, 6, 9, 8 ]
]));

console.log( validaSudoku([
    [ 1, 1, 2, 4, 8, 9, 3, 7, 6 ],
    [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
    [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
    [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
    [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
    [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
    [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
    [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
    [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ]
]));

function validaSudoku(sudoku) {
    for (let i = 0; i < sudoku.length; i++) {
       if (tieneNumerosRepetidos(sudoku[i])){
           return false;
       }
    }

}

function tieneNumerosRepetidos(numeros) {
    return numeros.some((numero, index) => numeros.indexOf(numero) !== index);
}