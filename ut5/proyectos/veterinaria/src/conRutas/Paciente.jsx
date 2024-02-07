import {useNavigate} from "react-router-dom";

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const { nombre, propietario, email, fecha, sintomas, id } = paciente
    const navigate = useNavigate()

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente?');

        if(respuesta) {
            eliminarPaciente(id)
        }
    }

    const editar = (paciente) =>{
        setPaciente(paciente)

        navigate("/create")

    }

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 card mt-10 pt-4 pb-4 mb-4">
            <p className="font-weight-bold mb-3 text-gray-700 text-uppercase">Nombre: {''}
                <span className="font-weight-normal text-lowercase">{nombre}</span>
            </p>

            <p className="font-weight-bold mb-3 text-gray-700 text-uppercase">Propietario: {''}
                <span className="font-weight-normal text-lowercase">{propietario}</span>
            </p>

            <p className="font-weight-bold mb-3 text-gray-700 text-uppercase">Email: {''}
                <span className="font-weight-normal text-lowercase">{email}</span>
            </p>

            <p className="font-weight-bold mb-3 text-gray-700 text-uppercase">Fecha Alta: {''}
                <span className="font-weight-normal text-lowercase">{fecha}</span>
            </p>

            <p className="font-weight-bold mb-3 text-gray-700 text-uppercase">Síntomas: {''}
                <span className="font-weight-normal text-lowercase">{sintomas}</span>
            </p>

            <div className="d-flex justify-content-between mt-10">
                <button 
                    type="button"
                    className="py-2 px-10 bg-primary hover:bg-primary bg gradient text-white font-bold uppercase rounded-lg"
                    onClick={() => editar(paciente)}
                >Editar</button>

                <button 
                    type="button"
                    className="py-2 px-10 bg-danger hover:bg-danger bg-gradient text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente
