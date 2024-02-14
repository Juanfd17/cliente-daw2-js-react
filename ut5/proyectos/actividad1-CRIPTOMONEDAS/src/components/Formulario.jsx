
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


import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled'
function Formulario({actualizar}) {
    const [criptos, setCriptos] = useState([])
    const [monedas, setMonedas] = useState([])
    const [seletMoneda, setSeletMoneda] = useState([])
    const [seletCripto, setSeletCripto] = useState([])
    const[loading, setLoading]= useState(false)


    useEffect(() => {
        setLoading(true)

        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("https://min-api.cryptocompare.com/data/all/coinlist", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                let newCripto = [...criptos];
                Object.values(result.Data).map((cripto) => {
                    newCripto.push({CoinName: cripto.CoinName, Name: cripto.Name});
                })
                setCriptos(newCripto);
            })
            .catch((error) => console.error(error));
        setLoading(false)

    }, [])

    useEffect(() => {
        setLoading(true)

        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("https://openexchangerates.org/api/currencies.json", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                let newMonedas = [...monedas];
                Object.keys(result).map((moneda) => {
                    newMonedas.push({Nombre: result[moneda], Codigo: moneda});
                })
                setMonedas(newMonedas);
            })
            .catch((error) => console.error(error));
        setLoading(false)

    }, [])

    return (
        <div>
            <Label>Elige tu Moneda</Label>
            <Select onChange={(e) => setSeletMoneda(e.target.value)}>
                <option value="">Selecciona</option>
                {loading ? (<div>Loading</div>) : (
                    monedas.map((moneda) =>
                        <option value={moneda.Codigo}>{moneda.Nombre} ({moneda.Codigo})</option>
                    )
                )}
            </Select>
            <Label>Elige tu Criptomoneda</Label>
            <Select onChange={(e) => setSeletCripto(e.target.value)}>
                <option value="">Selecciona</option>
                {loading ? (<div>Loading</div>) : (
                    criptos.map((cripto) =>
                        <option value={cripto.Name}>{cripto.CoinName}</option>
                    )
                )}
            </Select>
            <Button onClick={ () => actualizar(seletMoneda, seletCripto)}>COTIZAR</Button>
        </div>
    );
}

export default Formulario;