import React, {useEffect, useState} from 'react';
import AcoredeonItem from "./AcoredeonItem.jsx";
import './App_acordeon.css'


function Acordeon() {
    const [clicked, setClicked] = useState(-1)
    const [faqs, setFaqs] = useState([])
    const[loading, setLoading]= useState(false)

    useEffect(() => {
        setLoading(true)
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("https://v2.jokeapi.dev/joke/Programming?lang=es&type=twopart&amount=3", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                let newFaqs = [...faqs];
                result.jokes.map((joke) => {
                    newFaqs.push({question: joke.setup, answer: joke.delivery});
                })
                setFaqs(newFaqs);
            })
            .catch((error) => console.error(error));
        setLoading(false)
    }, [])

    const handleToggle = (index) => {
        if (clicked === index){
            return setClicked(-1)
        }
        setClicked(index)
    }

    return (
        <ul className={'accordion'}>
            {loading ? (<div>Loading</div>): (
                faqs.map((faq, index) => (
                    <AcoredeonItem active={clicked === index} onToggle={() => handleToggle(index)} key={index} faq={faq}/>
                ))
            )}
        </ul>
    );
}

export default Acordeon;