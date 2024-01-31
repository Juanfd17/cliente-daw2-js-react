import React from 'react';
import './estilos ACT2/App.css'
import Info from "./Info.jsx";

function ListarRegistros({registros, borrar}) {
    return (
        <div className='data-container row'>
            {registros.length > 0 ? (
                    <>
                        {registros.map((info) => (
                            <Info id={info.key} key={info.key} wieght={info.weight} height={info.height} borrar={borrar} fecha={info.fecha}/>
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