const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const H1 = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

import React, {useState} from 'react'
import ImagenCripto from './img/imagen-criptos.png'
import styled from '@emotion/styled'
import Formulario from './components/Formulario.jsx'
import Resultado from "./components/Resultado.jsx";

function App(props) {
    const [precio, setPrecio] = useState("")
    const [simbolo, setSimbolo] = useState("")
    const [precioMin, setPrecioMin] = useState("")
    const [precioMax, setPrecioMax] = useState("")
    const [variacion, setVariacion] = useState("")
    const [ultimaAct, setUltimaAct] = useState("")
    const [img, setImg] = useState("")
    const [mostrar, setMostrar] = useState(false)


    const actualizar = (moneda, cripto) => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`, requestOptions)
            .then((response) => response.json())
            .then((result) =>{
                const data = result.RAW[cripto][moneda];
                setPrecio(data.PRICE);
                setSimbolo(result.DISPLAY[cripto][moneda].TOSYMBOL)
                setPrecioMin(data.LOWDAY);
                setPrecioMax(data.HIGHDAY);
                setVariacion(data.CHANGEPCT24HOUR);
                setUltimaAct(data.LASTUPDATE);
                setImg("https://www.cryptocompare.com/" + data.IMAGEURL);
                setMostrar(true)

            })
            .catch((error) => console.error(error));
    }

    return (
        <Contenedor>
            <Imagen src={ImagenCripto} alt="imagenes criptomonedas" />
            <H1>Cotiza Criptomonedas al instante</H1>
            <Formulario actualizar={actualizar}></Formulario>
            <Resultado precio={precio} simbolo={simbolo} precioMax={precioMax} precioMin={precioMin} variacion={variacion} ultimaAct={ultimaAct} img={img} mostrar={mostrar}></Resultado>
        </Contenedor>
    );
}

export default App;