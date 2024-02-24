import React, { useState } from 'react';
import Header from "./Header.jsx";
import Tabla from "./Tabla.jsx";
import {useEffect} from "react";
export const UserContext = React.createContext();

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
        <div>
            <Header />
            <Tabla  rows={rows}/>
        </div>
    )
}

export default App