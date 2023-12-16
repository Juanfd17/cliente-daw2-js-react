import Medida from "./Medida.js";
import Registro from "./Registro.js";

let registros = new Registro();

let fecha = document.querySelector("#imc-fecha");
let img = document.querySelector("#imc-imagen");
let medidas = document.querySelectorAll("input[type='radio']");
let peso = document.querySelector("#imc-peso");
let altura = document.querySelector("#imc-altura");
let resultado = document.querySelector("#imc-results")

fecha.addEventListener("invalid", validarFecha());
img.addEventListener("invalid", validarImagen());
peso.addEventListener("invalid", validarPeso());
altura.addEventListener("invalid", validarAltura());

let botonGuaradar = document.querySelector("#btn-guardar")
let botonDesacer = document.querySelector("#btn-deshacer")

let metrico = document.querySelector("#imc-metrico")
let imperial = document.querySelector("#imc-imperial")

let medidaAnterior = "metrico"

let ultimoCodigo = 0;



botonGuaradar.addEventListener("click", guardar);
botonDesacer.addEventListener("click", desacer);

metrico.addEventListener("click", cambiarMedidas)
imperial.addEventListener("click", cambiarMedidas)

let mostrar = document.querySelector("#btn-mostrar")
mostrar.addEventListener("click", listarResultados)

console.log(cargarLocalStorage("registros"))

function mapToObj(inputMap) {
    let obj = {};

    inputMap.forEach(function(value, key){
        obj[key] = value
    });

    return obj;
}

function guardar() {
    if (validarCampos()){

        let medida = new Medida(fecha.value, img.value, altura.value, peso.value, medidaSeleccionada());

        console.log(medida)

        let numero = registros.addMedida(medida)

        desacer()

        resultado.display = "block"
        resultado.innerText = "La medida " + numero + " se ha insertado correcctamente"

        ultimoCodigo = numero;

        guardarLocalStorage("registros", mapToObj(registros.getMedias()));
    }
}

function desacer() {
    fecha.value = "";
    img.value = "";
    peso.value = "";
    altura.value = "";

    if (ultimoCodigo !== 0){
        resultado.innerText = "La medida " + ultimoCodigo + " ha sido eliminada"

        ultimoCodigo = 0;

        guardarLocalStorage("registros", mapToObj(registros.getMedias()));
    } else {
        resultado.display = "block"
        resultado.innerText = "Las eliminaciones no se pueden deshacer"
    }
}

function validarCampos() {

    let inputs = document.querySelectorAll("input")

    for (let input of inputs) {
        if (!input.validity.valid) {
            if (input.validity.valueMissing) {
                if (input.id === fecha.id){
                    input.setCustomValidity("La fecha no es valida");
                } else if (input.id === img.id){
                    input.setCustomValidity("La foto no tiene el nombre correcto");
                } else if (input.id === peso.id){
                    if (peso.value > peso.max){
                        input.setCustomValidity("El peso esta por encima del maximo");
                    } else {
                        input.setCustomValidity("El peso esta por debajo del minimo");
                    }
                } else if (input.id === altura.id){
                    if (altura.value > altura.max){
                        input.setCustomValidity("La altura esta por encima del maximo");
                    } else {
                        input.setCustomValidity("La altura esta por debajo del minimo");
                    }
                }

                input.reportValidity();
                return false
            }
        }
    }


    return true;
}

function cambiarMedidas() {
    let medida = medidaSeleccionada();

    let pesoSpan = document.querySelector("#imc-peso-unit")
    let alturaSpan = document.querySelector("#imc-altura-unit")

    if (medida !== medidaAnterior){
        if (medida === "metrico"){
            pesoSpan.innerText = "KG"
            alturaSpan.innerText = "CM"

            peso.min = "1"
            peso.max = "635"

            altura.min = "54"
            altura.max = "272"

            peso.value = Medida.LBSaKG(peso.value)
            altura.value = Medida.INaCM(altura.value)
        } else {
            pesoSpan.innerText = "LBS"
            alturaSpan.innerText = "IN"

            peso.min = "2"
            peso.max = "1400"

            altura.min = "21"
            altura.max = "107"

            peso.value = Medida.KGaLBS(peso.value)
            altura.value = Medida.CMaIN(altura.value)
        }

        medidaAnterior = medida;
    }
}

function medidaSeleccionada() {
    let medidaSeleccionada = "";
    for (let medida of medidas) {
        if (medida.checked === true){
            medidaSeleccionada = medida.value
        }
    }

    return medidaSeleccionada
}

function guardarLocalStorage(id, cosa) {
    localStorage.setItem(id, cosa);
}

function cargarLocalStorage(id) {
    return localStorage.getItem(id);
}

function listarResultados() {
    var e = document.querySelector("#imc-opcion");
    let opcion = e.value;

    if (opcion !== "none"){

        let lista = document.querySelector("#listado")
        lista.style.display = "block"

        lista.innerText = ""

        let listaRegistros = registros.getMedias();

        for (var [key, value] of listaRegistros) {
            let caja = document.createElement("div")

            caja.className = "caja"
            caja.id = key


            if (opcion === "APA"){
                caja.innerText = "Altura: " + value.altura + " Peso: " + value.peso + " (" + value.fecha.getFullYear() + ")"
            } else if (opcion === "IMC"){
                caja.innerText = value.getIMC() + "-" + value.getTipoLargo() + " (" + value.fecha.getDate() + "/"+ value.fecha.getMonth()+ "/" + value.fecha.getFullYear() + ")";
            } else {
                caja.innerText = value.fecha.getDate() + "/"+ value.fecha.getMonth()+ "/" + value.fecha.getFullYear() + " imagen: " + value.imagen + " Altura: " + value.altura + " Peso: " + value.peso;
            }

            let input = document.createElement("input");
            input.type = "button";
            input.className = "btn-eliminar"
            input.value = "X"
            input.id = key

            input.addEventListener("click", function () {
                registros.borrarMedida(this.id)
                guardarLocalStorage("registros", mapToObj(registros.getMedias()));
                listarResultados()
            })

            caja.appendChild(input);
            lista.appendChild(caja);
        }
    }
}
function validarFecha() {
    
}
