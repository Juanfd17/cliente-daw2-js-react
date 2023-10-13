const Lagartijas = {
    nombre: 'Lagartijas',
    color: 'Amarillo',
    autor: 'A.J.Perez',
    nPaginas: 110,
    editorial: 'Deusto',
    forrado: false,
    cover_url: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    comprar: function () {return( "Libro de aventuras del autor " + this.autor + " comprado")},
    toStrign: function (){return("Nombre: " + this.nombre + " Autor: " + this.autor + " Paginas: " + this.nPaginas + " Esta forrado: " + this.forrado)}

}
const Mariposas = {
    nombre: 'Mariposas',
    color: 'Verde',
    autor: 'J.K álvarez',
    nPaginas: 500,
    editorial: 'SM',
    forrado: false,
    cover_url: 'https://images.pexels.com/photos/2079451/pexels-photo-2079451.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    comprar: function () {return ( "Libro de aventuras del autor " + this.autor + " comprado")},
    toStrign: function (){return ("Nombre: " + this.nombre + " Autor: " + this.autor + " Paginas: " + this.nPaginas + " Esta forrado: " + this.forrado)}

}
const Margaritas = {
    nombre: 'Margaritas',
    color: 'Rojo',
    autor: 'I. P. Ramírez',
    nPaginas: 368,
    editorial: 'SM',
    forrado: false,
    cover_url: 'https://images.pexels.com/photos/2846814/pexels-photo-2846814.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    comprar: function () {return ( "Libro de aventuras del autor " + this.autor + " comprado")},
    toStrign: function (){return ("Nombre: " + this.nombre + " Autor: " + this.autor + " Paginas: " + this.nPaginas + " Esta forrado: " + this.forrado)}

}
const Petunias = {
    nombre: 'Petunias',
    color: 'Azul',
    autor: 'Tolkien',
    nPaginas: 368,
    editorial: 'SM',
    forrado: false,
    cover_url: 'https://images.pexels.com/photos/4153146/pexels-photo-4153146.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    comprar: function () {return ( "Libro de aventuras del autor " + this.autor + " comprado")},
    toStrign: function (){return ("Nombre: " + this.nombre + " Autor: " + this.autor + " Paginas: " + this.nPaginas + " Esta forrado: " + this.forrado)}

}

console.log(Petunias.comprar());
console.log(Margaritas.toStrign());

console.log("BIBLIOTECA")

let biblioteca = [Lagartijas, Mariposas, Margaritas]

console.log(biblioteca.map(function (libro) {
    return libro.toStrign();
}))

for (const libro of biblioteca) {
    console.log("Editorial: " + libro.editorial)
}

const checkPages = ({nPaginas}) => nPaginas >= 150;
const checkLibro = (biblioteca, libroBusca) => !!biblioteca.find((libro) => libro === libroBusca);

console.log(checkPages(Petunias))
console.log(checkPages(Lagartijas))
console.log(checkLibro(biblioteca, Lagartijas))
console.log(checkLibro(biblioteca, Petunias))

biblioteca = [...biblioteca, Petunias]
console.log(biblioteca)

librosLargos = biblioteca.filter(checkPages)
console.log(librosLargos)

const checkAutor = (biblioteca, autorBusca) => biblioteca.find((libro) => libro.autor === autorBusca)

console.log(checkAutor(biblioteca, "I. P. Ramírez"))

const forraLibro = (biblioteca) => {
    for (const libro of biblioteca) {
        libro.forrado = true;
    }
}

forraLibro(biblioteca);
console.log(biblioteca)

const prestarLibro = (biblioteca, libro) =>{
    let indice = biblioteca.findIndex(titulo => titulo.nombre === libro.nombre);
    if (indice == -1){
        console.log("No se a encontrado el libro")
    } else {
        console.log("Se a borrado " + biblioteca[indice].nombre)
        biblioteca.splice(indice, 1);
    }
}

prestarLibro(biblioteca, Petunias);
prestarLibro(biblioteca, Petunias);
console.log(biblioteca);

const devolverLibro = (biblioteca, libro) => {
    biblioteca.push(libro);
}