import "./mimimi.css"
import React, {useState} from 'react';
import Traductor from "./Traductor.jsx";

function MIMIMI(props) {
    const [nombre, setNombre] = useState ("")
    const manejadora = (e)=>{
        setNombre(Traductor(e.target.value))
    }

    return (
        <div>
            <h1>Traductor MIMIMI</h1>
            <textarea onChange={manejadora}></textarea>
            <p>{nombre}</p>
        </div>
    );
}

export default MIMIMI;