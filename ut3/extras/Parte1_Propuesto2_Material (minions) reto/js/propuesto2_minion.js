window.onload = principal;
function principal() {
    document.querySelector("#boton1").addEventListener("click", manejadoraClick);
    document.querySelector("#boton2").addEventListener("mousemove", manejadoraImprime);
    document.querySelector("#boton3").addEventListener("click", manejadoraCoje);
    document.querySelector("#minion").addEventListener("click", manejadoraBigote);
}


var manejadoraClick = function (ev) {
    ev.target.textContent = "Ay, me pinchaste";
}

var manejadoraImprime = function (ev) {
    console.log(ev);
}

var manejadoraCoje = function (ev) {
    document.querySelector("#caja4").innerText = "Hola " + document.querySelector("#nombre").value;
}

var manejadoraBigote = function (ev){
    console.log(ev);
    ev.target.src = "./css/images/minion2.png";
}



