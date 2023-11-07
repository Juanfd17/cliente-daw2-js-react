//Ejercicio 2. Crea una nueva clase llamada "Plato" para almacenar: el nombre del plato, su descripción y el precio

class Plato {
  nombre;
  descripcion;
  precio;

  constructor(nombre,descripcion,precio){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
  }

  getHTML() {
     return `<div class="plato"><h3>${this.nombre}</h3><p>${this.descripcion}</p><span class="precio">${this.precio}€</span></div>`;
  }

}


//Ejercicio 3.- La clase "Plato", es capaz de validar el siguiente código

const plato1 = new Plato("Hamburguesa", "Deliciosa Hamburguesa con carne jugosa y queso derritido", 10);
console.log(plato1.getHTML());




//Ejercicio 4.- Crea un objeto "Menu",  array vacía de platos, función añade plato a su array, una función que retorne un código HTML

function Menu() {
  this.nombre = "";
  this.platos = [];
  this.addPlato = function (plato) {
      this.platos.push(plato);
  };

  this.getHTML = function () {
      var txt = "<span> " + this.nombre + " "
              + " " ;
      for (var k=0;k < this.platos.length;k++) {
          txt += this.platos[k].getHTML();
      }
      txt += "</span><br />";
      return txt;
  };
}


var menu = new Menu();
menu.nombremenu = "Menu del dia";

console.log(menu.getHTML());


//Ejercicio 5.- clase "Menu", deberá ser capaz de validar el codigo indicado en ejercicio 5

const menu1 = new Menu();
menu1.nombre = "Menu diario";
menu1.addPlato(plato1);
console.log(menu1.getHTML());

//EJERCICIO6: Crea un array global llamado "platosDisponibles" y añade los platos creados anteriormente

var platosDisponibles = [];

//Creamos un segundo plato y lo añadimos al array

const plato2 = new Plato("Pizza", "Sabrosa pizza con una variedad de ingredientes frescos", 12.50);
console.log(plato2.getHTML());

platosDisponibles.push(plato1);
platosDisponibles.push(plato2);

//EJERCICIO7: Programa que una vez cargada la web llame a una función "mostrarPlatos()" que muestre todos los platos que contiene "platosDisponibles".



// añadimos la función mostrar platos
//window.onload = function () {
//  mostrarPlatos();
//};

// muestre en el HTML todos los platosDisponibles.

function mostrarPlatos() {
  document.getElementById("listadoPlatos").innerHTML = "";
  // document.getElementById("numeroPlato").innerHTML = "";
  for (var k = 0; k < platosDisponibles.length; k++) {
      document.getElementById("listadoPlatos").innerHTML += platosDisponibles[k].getHTML();
  //    document.getElementById("numeroPlato").innerHTML += "<option value='"+k+"'>"+platosDisponibles[k].nombre+"</option>";
  }
};

// EJERCICIO 8: Crea un array asociativo global llamado "menusDisponibles" para almacenar todos los menús creados según su nombre y añádele el menú creado anteriormente

//creamos el array
var menusDisponibles = [];

//Creamos un  menu y los añadimos al array

const menu2 = new Menu();
menu2.nombre = "Menu especial fin de semana";
menu2.addPlato(plato2);
console.log(menu2.getHTML());

menusDisponibles.push(menu1);
menusDisponibles.push(menu2);

// añadimos la función mostrar menus
window.onload = function () {
  mostrarPlatos();
  mostrarMenus();

  actualizarPlatos()
};

function actualizarPlatos(){

    for (let plato = 0; plato < platosDisponibles.length; plato++) {
        anadirPlatoLista(platosDisponibles[plato])
    }

}

function anadirPlatoLista(plato){
    var optionElement = document.createElement("option");

    // Establece el valor y el texto del option
    optionElement.value = plato.nombre;  // Reemplaza "valor_de_opcion" con el valor deseado
    optionElement.text = plato.nombre;  // Reemplaza "Texto de la opción" con el texto deseado

    // Agrega el nuevo elemento option al select
    document.getElementById("numeroPlato").appendChild(optionElement);
}

function mostrarMenus() {
  document.getElementById("listadoMenus").innerHTML = "";
  // document.getElementById("numeroMenu").innerHTML = "";  
  for (var k = 0; k < menusDisponibles.length; k++) {
    document.getElementById("listadoMenus").innerHTML += menusDisponibles[k].getHTML();
//    document.getElementById("numeroPlato").innerHTML += "<option value='"+k+"'>"+platosDisponibles[k].nombre+"</option>";
    }
}

// funcion para añadir platos

function addPlato() {
    var plato = new Plato();
    plato.nombre = document.getElementById("nombre").value;
    plato.descripcion = document.getElementById("descripcion").value;
    plato.precio = document.getElementById("precio").value;
    platosDisponibles.push(plato);
    mostrarPlatos();

    anadirPlatoLista(plato)
  };

// Función eliminar platos

function borrarPlato() {
    var numero = document.getElementById("numeroBorrar").value;
    platosDisponibles.splice(numero, 1);
    mostrarPlatos();
};
  

// función para añadir menus

function addMenu() {
  var menu = new Menu();
  menu.nombre = document.getElementById("nombreMenu").value;
  //menusDisponibles[menu.nombre]=menu;
    menusDisponibles.push(menu);
  mostrarMenus();
};


function addPlatoMenu(){
  var numPlato = document.getElementById("numeroPlato").value;
  var numMenu = document.getElementById("numeroMenu").value;
  var plato = platosDisponibles[numPlato];
  menusDisponibles[numMenu].addPlato(plato);
    mostrarMenus();     
};