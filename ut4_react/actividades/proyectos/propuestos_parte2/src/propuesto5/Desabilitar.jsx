import React, {useState} from 'react';

function Desabilitar(props) {
    const [disabled, setDisabled] = useState(true);
    const manejadora = (evento)=>{
        if (evento.target.value === ""){
            setDisabled(true);
        } else {
            setDisabled(false)
        }
    }

    return (
        <div>
            <textarea onChange={manejadora}></textarea>
            <button disabled={disabled?true:false}>prueba</button>
        </div>
    );
}

export default Desabilitar;