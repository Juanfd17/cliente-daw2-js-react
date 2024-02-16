import { useState } from 'react'
import Header from "./Header.jsx";
import Acordeon from "./Acordeon.jsx";
import Formulario from "./Formulario.jsx"

function App() {
    const [url, setUrl] = useState("https://v2.jokeapi.dev/joke/Programming?lang=es&type=twopart&amount=3")

    return (
        <>
            <Header />
            <Formulario setUrl={setUrl}/>
            <Acordeon url={url}/>
        </>
    )
}

export default App
