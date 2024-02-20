import Header from "./Header.jsx";
import Tabla from "./Tabla.jsx";
import {useState} from "react";

function App() {
    const [rows, setRows] = useState([])


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


  return (
    <>
        <Header />
        <Tabla  rows={rows}/>
    </>
  )
}

export default App
