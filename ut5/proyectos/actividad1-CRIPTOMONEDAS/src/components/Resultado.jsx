const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const IMG= styled.img`

    display: block;
    width: 120px;
`
const P = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`

import React from 'react';
import styled from '@emotion/styled'

function Resultado({precio, simbolo, precioMax, precioMin, variacion, ultimaAct, img, mostrar}) {
    return (
        <div>
            {!mostrar ? ("") : (
                <Contenedor>
                    <P>El precio es de: <Precio>{simbolo}{precio}</Precio></P>
                    <p>Precio mas alto del dia: <Precio>{simbolo}{precioMax}</Precio></p>
                    <p>Precio mas bajo del dia: <Precio>{simbolo}{precioMin}</Precio></p>
                    <p>Variacion ultimas 24h: <Precio>{variacion}</Precio></p>
                    <p>Ultima actualizacion: <Precio>{ultimaAct}</Precio></p>
                    <IMG src={img}></IMG>
                </Contenedor>
            )}
        </div>
    );
}

export default Resultado;