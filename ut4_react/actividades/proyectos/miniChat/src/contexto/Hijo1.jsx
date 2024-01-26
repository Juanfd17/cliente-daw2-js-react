import React, {useContext} from 'react';
import { Contexto } from './Padre.jsx';

function Hijo1() {
    const { mensaje, manejadora } = useContext(Contexto);
    return (
        <div className="hijo">
            <h1>Hijo1</h1>
            <p>{mensaje}</p>
            <textarea rows="5" onChange={(e)=>{
                manejadora("Hijo1", e)}}/>
        </div>
    );
}

export default Hijo1;