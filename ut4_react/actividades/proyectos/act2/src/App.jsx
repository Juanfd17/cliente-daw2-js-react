import React, {useState} from 'react';
import "./estilos ACT2/App.css"
import IMCForm from "./IMCForm.jsx";
import ListarRegistros from "./ListarRegistros.jsx";
import {Graficos} from "./Graficos.jsx";

function App(props) {
    const [registros, setRegistros] = useState([])
    const manejaCambiar = valor => {
        setRegistros([...registros, valor])
    }

    const manejaBorrar = valor => {
        setRegistros(registros.filter(registro => registro.key !== valor));
    }

    return (
        <div className='container'>
            <div className='row'>
                <h1>Calculaodra de Inidice de Masa Corporal</h1>
            </div>

            <div className='row'>
                <IMCForm cambiar={manejaCambiar}/>
            </div>

            <div className='row'>
                <h4>Datos de 7 dias</h4>
            </div>

            <div className='row data-container'>
                <ListarRegistros registros={registros} borrar={manejaBorrar}/>
            </div>

            <div className='row'>
                <Graficos registros={registros} />
            </div>
        </div>
    );
}

export default App;