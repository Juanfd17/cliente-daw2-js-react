import React, {cloneElement, useState} from 'react';
import "./index.css"

function Padre({children}) {
    const [mensaje, setMensaje] = useState ("Mensaje")
    const manejadora = (quien, e)=>{
        setMensaje(quien + " dice: " + e.target.value)
    }

    return (
        <div className="padre">
            <h1>Mini-chat</h1>
            <p>{mensaje}</p>
            <textarea onChange={(e)=>{
                manejadora("Padre", e)}} rows="5" />
            <div className="hijos">
                {children.map((child, key)=>{
                    return cloneElement(child,{
                        mensaje: mensaje,
                        manejadora: manejadora,
                        key: key,
                    })
                })}
            </div>
        </div>
    );
}

export default Padre;