import "./mimimi.css"
import React, {useState} from 'react';


function TraductorMIMIMI(props) {
    const [nombre, setNombre] = useState ("")
    const manejadora = (e)=>{
        let bocales = ["a", "e", "o", "u"]
        let texto = ""
        for (let letra of e.target.value) {
            if (bocales.includes(letra.toLowerCase())){
                texto += "i"
            } else {
                texto += letra
            }
        }

        setNombre(texto)
    }

    return (
        <div>
            <h1>Traductor MIMIMI</h1>
            <textarea onChange={manejadora}></textarea>
            <p>{nombre}</p>
        </div>
    );
}

export default TraductorMIMIMI;