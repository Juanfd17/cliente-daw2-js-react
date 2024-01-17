import React from "react";
import ReactDOM from 'react-dom/client'
import ListarUsuarios from './propuesto1/ListarUsuarios.jsx'
import UserCard from "./propuesto2/UserCard.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ListarUsuarios />
      <UserCard name="Antonia" amount="1000" worker={true} points={[99,88.6,33]} address={{"address":"123 Main Streat", "city":"YN"}} avatar="https://robohash.org/Antonia" greet={function (){"Hola"}}/>
      <UserCard name="Antonia" amount="1000" worker={false} points={[99,88.6,33]} address={{"address":"123 Main Streat", "city":"YN"}} avatar="https://robohash.org/Antonia" greet={function (){"Hola"}}/>
  </React.StrictMode>,
)
