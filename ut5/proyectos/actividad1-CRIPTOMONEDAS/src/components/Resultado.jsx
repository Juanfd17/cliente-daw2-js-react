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

const Precio = styled.span`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`

import React from 'react';
import styled from '@emotion/styled'

function Resultado({precio, precioMax, precioMin, variacion, ultimaAct, img}) {
    return (
        <Contenedor>
            <IMG src={img} />
            <div>
                <P>El precio es de: <Precio>{precio}</Precio></P>
                <P>Precio mas alto del dia: <Precio>{precioMax}</Precio></P>
                <P>Precio mas bajo del dia: <Precio>{precioMin}</Precio></P>
                <P>Variacion ultimas 24h: <Precio>{variacion}</Precio></P>
                <P>Ultima actualizacion: <Precio>{ultimaAct}</Precio></P>
            </div>
        </Contenedor>
    )
}

export default Resultado;