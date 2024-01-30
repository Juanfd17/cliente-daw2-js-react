import React, {useState} from 'react';
import "./estilos ACT2/App.css"

function ImcForm({cambiar}) {
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')

    const handleSubmit = () => {
        cambiar({weight, height})
    }

    return (
        <div className='row'>
            <div className='row'>
                <div className='col two'>
                    <label>Peso (en Kg)</label>
                    <input id='weight' type='number' onChange={(e)=>setWeight(e.target.value)} value={weight}/>
                </div>

                <div className='col two'>
                    <label>Altura (en Cm)</label>
                    <input id='height' type='number' onChange={(e)=>setHeight(e.target.value)} value={height}/>
                </div>
            </div>

            <div className='center'>
                <button id='imc-btn' className='calculate-btn' onClick={handleSubmit}>
                    Calcular IMC
                </button>
            </div>
        </div>
    );
}

export default ImcForm;