import React from 'react';

function Info(props) {
    function handleDelete() {
        console.log("a")
    }

    function imc(wieght, hieght){
        return parseFloat(wieght / ((hieght / 100) * (hieght / 100))).toFixed(2)
    }

    return (
        <div className="col two">
            <div className="card">
                <div className="card-content">
                    <span className="card-title" data-test="imc">IMC: {imc(props.wieght, props.height)}</span>
                    <div className="card-data">
                        <span data-test="weight">Peso: {props.wieght}</span>
                        <span data-test="height">Altura: {props.height}</span>
                        <span data-test="date">Fecha: {new Date().toLocaleDateString()}</span>
                    </div>
                    <button className="delete-btn" onClick={handleDelete}> X</button>
                </div>
            </div>
        </div>
    );
}

export default Info;