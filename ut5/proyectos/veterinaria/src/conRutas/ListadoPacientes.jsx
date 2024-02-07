import Paciente from "./Paciente"
import {Link} from "react-router-dom"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
    return (
        <div className="col-md-7" style={{height:750+'px'}}>
            <Link to='/create'>
                <input type='button' className='col-md-6 p-3 col-lg-6 bg-primary' value='Agregar Paciente'/>
            </Link>

            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-weight-bold text-center">Listado Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-primary font-weight-bold">Pacientes y Citas</span>
                    </p>

                    { pacientes.map( paciente => (
                        <Paciente 
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                </>

            ) : (
                <>
                    <h2 className="font-weight-bold text-center">No hay pacientes</h2>
                    <p className="mt-5 mb-4 text-center">
                        Comienza agregando pacientes {''}
                        <span className="text-primary font-weight-bold ">y aparecerán en este lugar</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default ListadoPacientes
