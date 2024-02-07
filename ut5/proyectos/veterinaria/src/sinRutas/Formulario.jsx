import React, {useEffect, useState} from 'react';
import Error from './Error'

function Formulario({addPaciente, pacienteActual, seleccionarPaciente}) {
    const [error, setError] = useState(false)

    const [nombreMascota, setNombreMascota] = useState('')
    const [nombrePropietario, setNombrePropietario] = useState('')
    const [correo, setCorreo] = useState('')
    const [fechaAlta, setFechaAlta] = useState('')
    const [sintomas, setSintomas] = useState('')


    const [texto, setTexto] = useState('Agregar paciente')

    const handleSubmit = () => {
        if( [ nombre, propietario, email, fecha, sintomas ].includes('') ) {
            setError(true)
            return;
        }

        setError(false)

        let key = ""

        if (pacienteActual !== null) {
            key = pacienteActual.key
        } else {
            key = uuid.v4()
        }

        addPaciente({key, nombreMascota, nombrePropietario, correo, fechaAlta, sintomas})

        setNombreMascota('')
        setNombrePropietario('')
        setCorreo('')
        setFechaAlta('')
        setSintomas('')

        setTexto("Agregar paciente")

        seleccionarPaciente(null)
    }

    const actualizarPaciente = (paciente) => {
        setNombreMascota(paciente.nombreMascota)
        setNombrePropietario(paciente.nombrePropietario)
        setCorreo(paciente.correo)
        setFechaAlta(paciente.fechaAlta)
        setSintomas(paciente.sintomas)

        setTexto("Actualizar paciente")
    }

    useEffect(() => {
        if (pacienteActual) {
            actualizarPaciente(pacienteActual);
        }
    }, [pacienteActual]);

    return (
        <div>
            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 card mt-10 pt-4 pb-4">
                {error &&  <Error><p>Todos los campos son obligatorios</p></Error>}
                <div className="mb-2">
                    <label htmlFor="mascota" className="text-gray-700 font-weight-bold text-uppercase">Nombre Mascota</label>
                    <input id="mascota" type="text" placeholder="Nombre de la Mascota" className="border border-2 w-100 p-2 mt-2 form-control form-control-rounded placeholder-gray-400" onChange={(e)=>setNombreMascota(e.target.value)} value={nombreMascota}/>
                </div>

                <div className="mb-2">
                    <label htmlFor="propietario" className="text-gray-700 font-weight-bold text-uppercase">Nombre Propietario</label>
                    <input id="propietario" type="text" placeholder="Nombre del Propietario" className="border border-2 w-100 p-2 mt-2 form-control form-control-rounded placeholder-gray-400" onChange={(e)=>setNombrePropietario(e.target.value)} value={nombrePropietario}/>
                </div>

                <div className="mb-2">
                    <label htmlFor="email" className="text-muted text-uppercase font-weight-bold">Email</label>
                    <input id="email" type="email" placeholder="Email Contacto Propietario" className="border border-2 w-100 p-2 mt-2 form-control form-control-rounded placeholder-gray-400" onChange={(e)=>setCorreo(e.target.value)} value={correo}/>
                </div>

                <div className="mb-2">
                    <label htmlFor="alta" className="text-gray-700 font-weight-bold text-uppercase">Alta</label>
                    <input id="alta" type="date" className=" border-2 w-100 p-2 mt-2 form-control form-control-rounded placeholder-gray-400" onChange={(e)=>setFechaAlta(e.target.value)} value={fechaAlta}/>
                </div>

                <div className="mb-2">
                    <label htmlFor="sintomas" className="text-gray-700 font-weight-bold text-uppercase">Síntomas</label>
                    <textarea id="sintomas" className=" border-2 w-100 p-2 mt-2 form-control form-control-rounded placeholder-gray-400" placeholder="Describe los Síntomas" onChange={(e)=>setSintomas(e.target.value)} value={sintomas}/>
                </div>

                <button className="bg-primary text-white w-100 p-3 text-uppercase font-weight-bold hover:bg-primary-dark cursor-pointer transition-colors" onClick={handleSubmit}>{texto}</button>
            </form>
        </div>
    );
}

export default Formulario;