import React, {useState} from 'react';
import Hijo1 from "./Hijo1.jsx";
import Hijo2 from "./Hijo2.jsx";
import "./index.css"

function Padre() {
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
                <Hijo1 mensaje={mensaje} manejadora={manejadora}/>
                <Hijo2 mensaje={mensaje} manejadora={manejadora}/>
            </div>
        </div>
    );
}

export default Padre;