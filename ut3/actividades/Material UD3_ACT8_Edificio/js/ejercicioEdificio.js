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
  let formularioBorrar = document.querySelector("#formulario-borrar")
  let formularioModificar = document.querySelector("#formulario-modificar")
  let formularioAniadir = document.querySelector("#formulario-aniadir")

  formularioBorrar.addEventListener("click", ev =>{
    let form = document.querySelector("#formulario")
    form.style.display = "none"
  })

  formularioModificar.addEventListener("click", evt => {
    let form = document.querySelector("#formulario")
    let piso = document.querySelector("#planta").value -1
    let puerta = document.querySelector("#puerta").value -1
    let nombre = document.querySelector("#nombre").value + " " + document.querySelector("#apellidos").value
    let genero = document.querySelector("#genero-hombre").checked ? "hombre" : "mujer"
    let miembros = document.querySelector("#unidad-familiar").selectedIndex

    let propietario = {
      piso: piso +1,
      puerta: puerta +1,
      nombre: nombre,
      genero: genero,
      miembros: miembros,
    }

    if (validarFormulario()){
      miEdificio.modificarPropietario(propietario, piso, puerta)
      form.style.display = "none"
      console.log(miEdificio.imprimePlantas())
    }
  })

  formularioAniadir.addEventListener("click", evt => {
    let piso = document.querySelector("#planta").value -1
    let puerta = document.querySelector("#puerta").value -1
    let nombre = document.querySelector("#nombre").value + " " + document.querySelector("#apellidos").value
    let genero = document.querySelector("#genero-hombre").checked ? "hombre" : "mujer"
    let miembros = document.querySelector("#unidad-familiar").selectedIndex
    let form = document.querySelector("#formulario")

    let propietario = {
      piso: piso +1,
      puerta: puerta +1,
      nombre: nombre,
      genero: genero,
      miembros: miembros,
    }

    if (validarFormulario()){
      miEdificio.modificarPropietario(propietario, piso, puerta)
      form.style.display = "none"
      console.log(miEdificio.imprimePlantas())
    }
  })

  function validarFormulario() {
    let nombre = document.querySelector("#nombre")
    let apellidos =document.querySelector("#apellidos")
    let unidadFamiliar = document.querySelector("#unidad-familiar")

    document.getElementById("nombre").setCustomValidity("")
    document.getElementById("apellidos").setCustomValidity("")
    document.getElementById("unidad-familiar").setCustomValidity("")

    if (nombre.value.trim() === "") {
      nombre.setCustomValidity("Por favor, ingresa el nombre.")
    }

    if (apellidos.value.trim() === "") {
      apellidos.setCustomValidity("Por favor, ingresa los apellidos.")
    }

    if (unidadFamiliar.value === "none") {
      unidadFamiliar.setCustomValidity("Por favor, elige una unidad familiar.")
    }

    if (!document.getElementById("formulario").checkValidity()) {
      return false
    }

    return true
  }
}