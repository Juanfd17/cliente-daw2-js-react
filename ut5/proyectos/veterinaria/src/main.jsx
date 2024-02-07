import React from 'react'
import ReactDOM from 'react-dom/client'
//sin rutas
/*
import App from 'sinRutas/App.jsx'
*/


//con rutas
import App from "./conRutas/App.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
