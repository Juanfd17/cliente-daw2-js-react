import { useState, useEffect } from 'react'
import Formulario from "./Formulario"
import Header from "./Header"
import ListadoPacientes from "./ListadoPacientes"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FormularioEditar from "./FormularioEditar.jsx";

function App() {

    const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
    const [paciente, setPaciente] = useState({});

    useEffect(() => {
        localStorage.setItem('pacientes', JSON.stringify( pacientes ));
    }, [pacientes])

    const eliminarPaciente = id => {
        const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
        setPacientes(pacientesActualizados)
    }

    return (
        <BrowserRouter className="container mx-auto pt-20 bg-light">
            <Header />

            <Routes>
                <Route path='/create' element={
                    <Formulario
                        pacientes={pacientes}
                        setPacientes={setPacientes}
                        paciente={paciente}
                        setPaciente={setPaciente}
                    />
                }/>

                <Route path='/editar' element={
                    <FormularioEditar
                        pacientes={pacientes}
                        setPacientes={setPacientes}
                        paciente={paciente}
                        setPaciente={setPaciente}
                    />
                }/>

                <Route path='/' element={
                    <ListadoPacientes
                        pacientes={pacientes}
                        setPaciente={setPaciente}
                        eliminarPaciente={eliminarPaciente}
                    />
                }/>

                <Route path="*" element={<h1>404</h1>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
