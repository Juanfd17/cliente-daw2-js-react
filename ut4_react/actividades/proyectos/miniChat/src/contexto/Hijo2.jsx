import React, {useContext} from 'react';
import { Contexto } from './Padre.jsx';

function Hijo2() {
    const { mensaje, manejadora } = useContext(Contexto);
    return (
        <div className="hijo">
            <h1>Hijo2</h1>
            <p>{mensaje}</p>
            <textarea rows="5" onChange={(e)=>{
                manejadora("Hijo2", e)}}/>
        </div>
    );
}

export default Hijo2;