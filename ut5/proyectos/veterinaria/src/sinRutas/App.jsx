import {useEffect, useState} from 'react'
import Header from "./Header.jsx";
import Formulario from "./Formulario.jsx";
import ListaPacientes from "./ListaPacientes.jsx";
import {getData, storeData} from "./localStorage.js";
import paciente from "./Paciente.jsx";

function App() {
    const [pacientes, setPacientes] = useState(getData('pacientes') || []);
    const [pacienteActual, setPacienteActual] = useState(null);
    useEffect(() => {
        storeData('pacientes', pacientes)
    }, [pacientes]);

    const addPaciente = nuevoPaciente => {
        const indicePaciente = pacientes.findIndex(paciente => paciente.key === nuevoPaciente.key);

        if (indicePaciente !== -1) {
            let nuevosPacientes = [...pacientes];
            nuevosPacientes[indicePaciente] = nuevoPaciente;
            setPacientes(nuevosPacientes);
        } else {
            setPacientes([...pacientes, nuevoPaciente]);
        }
    }

    const delPaciente = pacienteBorrar => {
        setPacientes(pacientes.filter(paciente => paciente.key !== pacienteBorrar));
    }

    const seleccionarPaciente = (paciente) => {
        if (paciente === null) {
            setPacienteActual(null);
            return;
        }

        paciente = pacientes.find(p => p.key === paciente);
        setPacienteActual(paciente);
    }

  return (
      <div>
          <div className="container mx-auto pt-20 bg-light">
              <Header />

              <div className="mt-12 d-md-flex">
                  <div className="col-md-6 col-lg-4 mx-5">
                      <h2 className="font-weight-bold text-center">Seguimiento Pacientes</h2>

                      <p className="text-lg mt-5 text-center mb-10">
                          Añade Pacientes y
                          <span className="text-primary font-weight-bold">Administralos</span>
                      </p>

                      <Formulario addPaciente={addPaciente} delPaciente={delPaciente} pacienteActual={pacienteActual} seleccionarPaciente={seleccionarPaciente}/>
                  </div>

                  <ListaPacientes pacientes={pacientes} delPaciente={delPaciente} seleccionarPaciente={seleccionarPaciente}/>
              </div>
          </div>
      </div>
  )
}

export default App

