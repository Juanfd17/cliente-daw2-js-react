import React, {useState} from 'react';

function ConectarElementos(props) {
    const [nombre, setNombre] = useState ("")
    const manejadora = (e)=>{
        setNombre(e.target.value)
    }

    return (
        <div>
            <h1>Conectando Elementos</h1>
            <div>
                <textarea onChange={manejadora}></textarea>
                <p>{nombre}</p>
            </div>
        </div>
    );
}

export default ConectarElementos;