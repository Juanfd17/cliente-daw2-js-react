import React from 'react'
import ReactDOM from 'react-dom/client'
import MIMIMI from "./ej1/MIMIMI.jsx";
import Buscador from "./ej2/Buscador.jsx";
import ContadorDeOvejas from "./ej3/ContadorDeOvejas.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MIMIMI></MIMIMI>
    <Buscador></Buscador>
    <ContadorDeOvejas></ContadorDeOvejas>
  </React.StrictMode>,
)
