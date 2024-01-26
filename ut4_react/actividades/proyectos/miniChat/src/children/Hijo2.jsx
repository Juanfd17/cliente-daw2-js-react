import React from 'react';

function Hijo2({mensaje, manejadora}) {
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