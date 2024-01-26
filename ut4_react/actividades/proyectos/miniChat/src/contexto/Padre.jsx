import React, {useState, createContext} from 'react';
import Hijo1 from "./Hijo1.jsx";
import Hijo2 from "./Hijo2.jsx";
import "./index.css"

export const Contexto = createContext();

function Padre() {
    const [mensaje, setMensaje] = useState("Mensaje");

    const manejadora = (quien, e)=>{
        setMensaje(quien + " dice: " + e.target.value);
    }

    return (
        <Contexto.Provider value={{mensaje: mensaje, manejadora: manejadora}}>
            <div className="padre">
                <h1>Mini-chat</h1>
                <p>{mensaje}</p>
                <textarea onChange={(e)=>{
                    manejadora("Padre", e)}} rows="5" />
                <div className="hijos">
                    <Hijo1 />
                    <Hijo2 />
                </div>
            </div>
        </Contexto.Provider>
    );
}

export default Padre;