
const Button = styled.button`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`
const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`


import React from 'react';
import styled from '@emotion/styled'
function Formulario(props) {
    return (
        <div>
            <Label>Elige tu Moneda</Label>
            <Select>
                <option value="nada">Seleccione</option>
                <option value="USD">Dolares $</option>
                <option value="EUR">Euros €</option>
            </Select>
            <Label>Elige tu Criptomoneda</Label>
            <Select></Select>
            <Button>COTIZAR</Button>
        </div>
    );
}

export default Formulario;