import React from 'react';
import Paciente from "./Paciente.jsx";

function ListaPacientes({pacientes, delPaciente, seleccionarPaciente}) {
    return (
        <div className="col-md-7 overflow-y-scroll">

            {pacientes.length > 0 ? (
            <>
                <h2 className="font-weight-bold text-center">Listado Pacientes</h2>
                <p className="text-xl mt-5 mb-10 text-center">Administra tus<span className="text-primary font-weight-bold">Pacientes y Citas</span></p>
                {pacientes.map(paciente => <Paciente key={paciente.key} paciente={paciente} delPaciente={delPaciente} seleccionarPaciente={seleccionarPaciente}/>)}
            </>
            ) : (
            <>
                <h2 className="font-weight-bold text-center">No hay pacientes</h2>
                <p className="mt-5 mb-4 text-center">Comienza agregando pacientes<span className="text-primary font-weight-bold ">y aparecerán en este lugar</span></p>
            </>
            )}
        </div>
    );
}

export default ListaPacientes;