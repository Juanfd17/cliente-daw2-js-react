import React, {useState, useEffect} from 'react';
import "./buscador.css"

function Buscador(props) {
    const [lista, setLista] = useState ("")
    const manejadora = (e)=>{
        let palabras = ["manzana", "kiwi", "melocoton", "mango", "piña", "uvas"]
        let lista = []
        for (let palabra of palabras) {
            if (palabra.startsWith(e.target.value) || e.target.value === "" || e.target.value === null){
                lista += palabra + " "
            }
        }

        setLista(lista)
    }

    useEffect(() => {
        manejadora({ target: { value: "" } });
    }, []);
    return (
        <div>
            <textarea onChange={manejadora}></textarea>
            <p>
                {lista}
            </p>
        </div>
    );
}

export default Buscador;