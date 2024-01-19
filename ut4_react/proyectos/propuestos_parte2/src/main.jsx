import React from "react";
import ReactDOM from 'react-dom/client'
import ListarUsuarios from './propuesto1/ListarUsuarios.jsx'
import Users from "./propuesto2/Users.jsx";
import CheeseHater from "./propuesto3/CheeseHater.jsx";
import ConectarElementos from "./propuesto4/ConectarElementos.jsx";
import Desabilitar from "./propuesto5/Desabilitar.jsx";

let usuarios= [
    {
        name: "Antonia",
        amount: "1000",
        worker: true,
        points: [99, 88.6, 33],
        address:{"address": "123 Main Streat", "city":"YN"},
        avatar: "https://robohash.org/Antonia",
        greet: function (name) {alert("Hola " + name)},
    },

    {
        name: "Antonia1",
        amount: "1000",
        worker: true,
        points: [99, 88.6, 33],
        address:{"address": "123 Main Streat", "city":"YN"},
        avatar: "https://robohash.org/Antonia",
        greet: function (name) {alert("Hola " + name)},
    },

    {
        name: "Antonia2",
        amount: "1000",
        worker: true,
        points: [99, 88.6, 33],
        address:{"address": "123 Main Streat", "city":"YN"},
        avatar: "https://robohash.org/Antonia",
        greet: function (name) {alert("Hola " + name)},
    },
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ListarUsuarios />
      <Users usuarios = {usuarios}/>
      <CheeseHater></CheeseHater>
      <ConectarElementos></ConectarElementos>
      <Desabilitar></Desabilitar>
  </React.StrictMode>,
)
