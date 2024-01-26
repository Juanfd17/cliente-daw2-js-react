import React from 'react'
import ReactDOM from 'react-dom/client'
/*Lifting*/
/*import Padre from "./lifting/Padre.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Padre></Padre>
  </React.StrictMode>,
)*/

/*children*/
/*import Padre from "./children/Padre.jsx";
import Hijo1 from "./children/Hijo1.jsx";
import Hijo2 from "./children/Hijo2.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Padre>
            <Hijo1/>
            <Hijo2/>
        </Padre>
    </React.StrictMode>,
)*/

/*contexto*/
import Padre from "./contexto/Padre.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Padre />
    </React.StrictMode>,
)