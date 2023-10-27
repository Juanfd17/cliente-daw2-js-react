import DptoInformatica from "./DptoInformatica.js";
import Aula from "./Aula.js";
import Equipo from "./Equipo.js";

const FILAS=5;
const COLUMNAS=4;

var dptoNaranco=new DptoInformatica();
const asignaciones=[{aula:"213", grupo:"SMR2A"},
                    {aula:"214", grupo:"IOF2"}, 
                    {aula:"215", grupo:"DAW2A"}, 
                    {aula:"216", grupo:"SMR1A"}, 
                    {aula:"217", grupo:"DAM1A"}, 
                    {aula:"218", grupo:"DAM2A"}, 
                    {aula:"220", grupo:"IOF1"}
];
asignaciones.forEach ((asignacion)=>{
    console.log(dptoNaranco.addAula(new Aula(asignacion.aula,FILAS,COLUMNAS), asignacion.grupo)?"Se ha insertado el aula "+asignacion.aula:"No se ha podido insertar el aula "+asignacion.aula);
});

console.log("\n%cRECUENTO TOTAL EQUIPOS dptoNaranco: "+dptoNaranco.getNEquipos()+" equipos--------------------\n", 'background: #FADBD8');

console.log ("%cACTIVANDO EQUIPOS DE SOBREMESA QUE SE VAN A USAR...", 'background: #222; color: #bada55');
asignaciones.forEach ((asignacion)=>{
    let aula=dptoNaranco.Aulas.get(asignacion.aula).aula;
    for (let i=0;i<FILAS;i++)
        for (let j=0; j<COLUMNAS;j++)
            aula.activaEquipo(new Equipo("Descripción equipo "+aula.Numero+"-"+i+"-"+j, false), i, j);
    });

asignaciones.forEach ((asignacion)=>{
        console.table(dptoNaranco.Aulas.get(asignacion.aula).aula.Equipos);
        console.log("Porcentaje de ocupación tras asignaciones aula "+asignacion.aula+":"+dptoNaranco.Aulas.get(asignacion.aula).aula.getPorcentajeOcupacion()+"%");
        });

function datosPortatiles(){
    console.log ("%cACTIVANDO PORTÁTILES QUE SE VAN A USAR...", 'background: #222; color: #bada55');
    let aulaDestino
    let descripcion
    let fila
    let columna
    let nDias

    do {
        aulaDestino = prompt("Aula destino", 220);
        descripcion = prompt("Descripion", "Portatil FP Básica 2-1");
        fila = prompt("Fila", 2);
        columna = prompt("Columna", 1);
        nDias = prompt("Nº dias", 30);

        if ((aulaDestino.toUpperCase() !== "S" && descripcion.toUpperCase() !== "S" && fila.toUpperCase() !== "S" && columna.toUpperCase() !== "S" && nDias.toUpperCase() !== "S")){
            let equipo = new Equipo(descripcion, true, nDias);

            let aula=dptoNaranco.Aulas.get(aulaDestino, "aula").aula;
            aula.activaEquipo(equipo, fila, columna);

            console.table(dptoNaranco.Aulas.get(aulaDestino, "aula").aula.Equipos);
            console.log("Porcentaje de ocupación tras asignaciones aula "+aulaDestino, "aula"+":"+dptoNaranco.Aulas.get(aulaDestino, "aula").aula.getPorcentajeOcupacion()+"%")
        }



    } while (aulaDestino.toUpperCase() !== "S" && descripcion.toUpperCase() !== "S" && fila.toUpperCase() !== "S" && columna.toUpperCase() !== "S" && nDias.toUpperCase() !== "S")

}

datosPortatiles();

console.log("%cEl número total de equipos en el departamento es: "+dptoNaranco.getNEquipos()+" equipos--------------------", 'background: #FADBD8');
