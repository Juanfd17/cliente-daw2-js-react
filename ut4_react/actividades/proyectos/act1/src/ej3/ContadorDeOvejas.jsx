import React, {useState} from 'react';
import "./contadorOvejas.css"
import SheepList from "./SheepList.jsx";

function ContadorDeOvejas(props) {
    const [contador, setContador] = useState(0)
    function manejadora() {
        setContador(contador + 1)
    }

    return (
        <div>
            <h3>Contador de ovejas</h3>
            <h4>{contador}</h4>
            <button onClick={manejadora}>Contar</button>
            <SheepList contador={contador}></SheepList>
        </div>
    );
}

export default ContadorDeOvejas;