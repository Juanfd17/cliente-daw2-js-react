import React from 'react'
import ReactDOM from 'react-dom/client'
import TraductorMIMIMI from "./ej1/TraductorMIMIMI.jsx";
import Buscador from "./ej2/Buscador.jsx";
import ContadorDeOvejas from "./ej3/ContadorDeOvejas.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TraductorMIMIMI></TraductorMIMIMI>
    <Buscador></Buscador>
    <ContadorDeOvejas></ContadorDeOvejas>
  </React.StrictMode>,
)
