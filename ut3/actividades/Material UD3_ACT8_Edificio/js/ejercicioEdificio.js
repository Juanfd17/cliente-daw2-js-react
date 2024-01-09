import Edificio from "./Edificio.js";
var inquilinosImportar = [
  {
    piso: 3,
    puerta: 1,
    nombre: "Gustavo Ramírez",
    genero: "hombre",
    miembros: 5,
  },
  {
    piso: 2,
    puerta: 1,
    nombre: "María Pérez",
    genero: "mujer",
    miembros: 1
  },
  {
    piso: 2,
    puerta: 2,
    nombre: "Manuel González",
    genero: "hombre",
    miembros: 1,
  },
  {
    piso: 2,
    puerta: 3,
    nombre: "Pepa Fernández",
    genero: "mujer",
    miembros: 3,
  },
  {
    piso: 1 ,
    puerta: 1,
    nombre: "Asterio Gómez",
    genero: "hombre",
    miembros: 2,
  },
  {
    piso: 3,
    puerta: 1,
    nombre: "Eleuterio Gómez",
    genero: "hombre",
    miembros: 6,
  },
];

const TIPO_FAMILIA = {
  HOMBRE: "hombre",
  MUJER: "mujer",
  PAREJA: "pareja",
  FAMILIA: "familia",
};

//=== Instanciar VARIABLES GLOBALES ============================================
var miEdificio = new Edificio("Uría", 2, "33012");

window.addEventListener("load", cargaPagina);

function cargaPagina() {
  cargaInquilinos();
  creaEdificio();
  cargaManejadores();
}

function cargaInquilinos() {
  miEdificio.agregaPlantasYPuertas(1,2)
  miEdificio.agregaPlantasYPuertas(1,4)
  miEdificio.agregaPlantasYPuertas(1,1)
  //console.log(miEdificio.imprimePlantas())

  inquilinosImportar.map(inquilino =>{
    miEdificio.agregaPropietario(inquilino, inquilino.piso -1, inquilino.puerta -1)
  })

  console.log(miEdificio.imprimePlantas())

}

function creaEdificio() {
  document.body.append(miEdificio.toHTML())
}

function cargaManejadores() {

}