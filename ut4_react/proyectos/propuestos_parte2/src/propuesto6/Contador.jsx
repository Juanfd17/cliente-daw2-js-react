import React, {useState} from 'react';

function Contador() {
    const [valor, setValor] = useState(0);
    const [color, setColor] = useState("");
    const manejadora = (evento)=>{
        if (evento.target.value === ""){
            setDisabled(true);
        } else {
            setDisabled(false)
        }
    }

    const mas = (evento)=>{
        setValor(valor + 1)
        canbiaColor(valor + 1)
    }

    const menos = (evento)=>{
        setValor(valor - 1)
        canbiaColor(valor - 1)
    }

    const canbiaColor = (nuevoValor) =>{
        if (nuevoValor > 0){
            setColor("green")
        } else if (nuevoValor < 0){
            setColor("red")
        } else {
            setColor("")
        }
    }

    return (
        <div>
            <h1 style={{color: color}}>{valor}</h1>
            <button onClick={mas}>+</button>
            <button onClick={menos}>-</button>
        </div>
    );
}

export default Contador;