import React, {useState} from 'react';


function CheeseHater() {
    const [color, setColor] = useState(true);
    const manejadora = (evento)=>{
        if (evento.target.value.toLowerCase().includes("queso") ){
            setColor(true)
            alert ("Odio el queso");
        } else {
            setColor(false)
        }
    }

    return (
        <textarea onChange={manejadora} className={color?"bg-danger":""}></textarea>
    );
}

export default CheeseHater;