import React from 'react';

function Paciente({paciente, delPaciente, seleccionarPaciente}) {
    const borrar = valor => {
        delPaciente(valor.currentTarget.parentNode.id)
    }

    const actualizar = valor => {
        seleccionarPaciente(valor.currentTarget.parentNode.id)
    }

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 card mt-10 pt-4 pb-4 mb-4">
            <p className="font-weight-bold mb-3 text-gray-700 text-uppercase">Nombre:
                <span className="font-weight-normal text-lowercase">{paciente.nombreMascota}</span>
            </p>

            <p className="font-weight-bold mb-3 text-gray-700 text-uppercase">Propietario:
                <span className="font-weight-normal text-lowercase">{paciente.nombrePropietario}</span>
            </p>

            <p className="font-weight-bold mb-3 text-gray-700 text-uppercase">Email:
                <span className="font-weight-normal text-lowercase">{paciente.correo}</span>
            </p>

            <p className="font-weight-bold mb-3 text-gray-700 text-uppercase">Fecha Alta:
                <span className="font-weight-normal text-lowercase">{paciente.correo}</span>
            </p>

            <p className="font-weight-bold mb-3 text-gray-700 text-uppercase">Síntomas:
                <span className="font-weight-normal text-lowercase">{paciente.sintomas}</span>
            </p>

            <div className="d-flex justify-content-between mt-10" id={paciente.key}>
                <button type="button" className="py-2 px-10 bg-primary hover:bg-primary bg gradient text-white font-bold uppercase rounded-lg" onClick={actualizar}>Editar</button>
                <button type="button" className="py-2 px-10 bg-danger hover:bg-danger bg-gradient text-white font-bold uppercase rounded-lg" onClick={borrar}>Eliminar</button>
            </div>
        </div>
    );
}

export default Paciente;