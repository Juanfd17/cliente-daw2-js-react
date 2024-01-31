import React from 'react';

function Info({wieght, height, borrar, id, fecha}) {

    function imc(wieght, hieght){
        return parseFloat(wieght / ((hieght / 100) * (hieght / 100))).toFixed(2)
    }

    const borrado = valor => {
        borrar(valor.currentTarget.parentNode.id)
    }

    return (
        <div className="col two">
            <div className="card">
                <div className="card-content" id={id}>
                    <span className="card-title" data-test="imc">IMC: {imc(wieght, height)}</span>
                    <div className="card-data">
                        <span data-test="weight">Peso: {wieght}</span>
                        <span data-test="height">Altura: {height}</span>
                        <span data-test="date">Fecha: {fecha}</span>
                    </div>
                    <button className="delete-btn" onClick={borrado}> X</button>
                </div>
            </div>
        </div>
    );
}

export default Info;