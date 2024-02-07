import { useState, useEffect } from 'react';
import Error from './Error'
import {useNavigate} from "react-router-dom";
import {v4 as uuidv4} from 'uuid'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        if( paciente?.id ) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del Formulario
        if( [ nombre, propietario, email, fecha, sintomas ].includes('') ) {
            setError(true)
            return;
        }    
        setError(false)
        
        // Objeto de Paciente
        const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas
        }

        if(paciente.id) {
            // Editando el Registro
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

            setPacientes(pacientesActualizados)
            setPaciente({})

        } else {
            // Nuevo registro
            objetoPaciente.id = uuidv4();
            setPacientes([...pacientes, objetoPaciente]);
        }

        // Reiniciar el form
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')

        navigate("/")
    }

    return (
        <div className="col-md-6 col-lg-4 mx-5">
            <h2 className="font-weight-bold text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-primary font-weight-bold">Administralos</span>
            </p>

            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 card mt-10 pt-4 pb-4"
            >
                { error &&  <Error><p>Todos los campos son obligatorios</p></Error>}
                <div className="mb-2">
                    <label htmlFor="mascota" className="text-gray-700 font-weight-bold text-uppercase">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-100 p-2 mt-2 form-control form-control-rounded placeholder-gray-400"
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value) }
                    />  
                </div>

                <div className="mb-2">
                    <label htmlFor="propietario" className="text-gray-700 font-weight-bold text-uppercase">
                        Nombre Propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-100 p-2 mt-2 form-control form-control-rounded placeholder-gray-400"
                        value={propietario}
                        onChange={ (e) => setPropietario(e.target.value) }
                    />  
                </div>

                <div className="mb-2">
                    <label htmlFor="email" className="text-muted text-uppercase font-weight-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email Contacto Propietario"
                        className="border-2 w-100 p-2 mt-2 form-control form-control-rounded placeholder-gray-400"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />  
                </div>

                <div className="mb-2">
                    <label htmlFor="alta" className="text-gray-700 font-weight-bold text-uppercase">
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className=" border-2 w-100 p-2 mt-2 form-control form-control-rounded placeholder-gray-400"
                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value) }
                    />  
                </div>

                <div className="mb-2">
                    <label htmlFor="sintomas" className="text-gray-700 font-weight-bold text-uppercase">
                        Síntomas
                    </label>
                    <textarea 
                        id="sintomas"
                        className=" border-2 w-100 p-2 mt-2 form-control form-control-rounded placeholder-gray-400"
                        placeholder="Describe los Síntomas"
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value) }
                    />
                </div>

                <input
                    type="submit"
                    className="bg-primary text-white w-100 p-3 text-uppercase font-weight-bold hover:bg-primary-dark cursor-pointer transition-colors"
                    value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
                />
            </form>
        </div>
    )
}

export default Formulario
