import React from 'react';
import './estilos ACT2/App.css'
import Info from "./Info.jsx";

function ListarRegistros({registros}) {
    return (
        <div className='data-container row'>
            {registros.length > 0 ? (
                    <>
                        {registros.map((info, index) => (
                            <Info key={index} wieght={info.weight} height={info.height}/>
                        ))}
                    </>
                ) : (
                    <div>No se encuentra</div>
                )
            }
        </div>
    );
}

export default ListarRegistros;