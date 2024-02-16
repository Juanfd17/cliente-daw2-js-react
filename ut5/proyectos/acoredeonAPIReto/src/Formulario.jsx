import React from 'react';

function Formulario({setUrl}) {
    function actualizarUrl() {
        let selecionados = []

        let inputs = document.querySelectorAll("input")

        inputs.forEach(input => {
            if(input.checked) {
                selecionados.push(input.value);
            }
        });

        if (selecionados.length === 0){
            setUrl("https://v2.jokeapi.dev/joke/Any?lang=es&type=twopart&amount=3")
        } else {
            let url = "https://v2.jokeapi.dev/joke/"
            selecionados.map((selecionado) =>  {
                url += selecionado + ","
            })

            url = url.slice(0, -1);
            url += "?lang=es&type=twopart&amount=3"

            setUrl(url)

            console.log(url)
        }
    }
    
    return (
        <div>
            <input type="checkbox" onChange={actualizarUrl} value="Programming" defaultChecked={true}/>
            <label>Programming </label>

            <input type="checkbox" onChange={actualizarUrl} value="Misc"/>
            <label>Misc </label>

            <input type="checkbox" onChange={actualizarUrl} value="Dark"/>
            <label>Dark </label>

            <input type="checkbox" onChange={actualizarUrl} value="Pun"/>
            <label>Pun </label>

            <input type="checkbox" onChange={actualizarUrl} value="Spooky"/>
            <label>Spooky </label>

            <input type="checkbox" onChange={actualizarUrl} value="Christmas"/>
            <label>Christmas </label>
        </div>
    );
}

export default Formulario;