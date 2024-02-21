import Header from "./Header.jsx";
import Tabla from "./Tabla.jsx";
import {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import CrearUsuario from "./CrearUsuario.jsx";
import {BrowserRouter as Router} from "react-router-dom";
import EditarUsuario from "./EditarUsuario.jsx";

function App() {
    const [rows, setRows] = useState([])

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("https://www.melivecode.com/api/users", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                setRows(result)
            })
            .catch((error) => console.error(error));
    }, []);



    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={
                    <Tabla  rows={rows}/>
                }/>

                <Route path='/crearUsuario' element={
                    <CrearUsuario/>
                }/>

                <Route path="/editarUsuario/:id" element={<EditarUsuario />} />
            </Routes>
        </Router>
    )
}

export default App