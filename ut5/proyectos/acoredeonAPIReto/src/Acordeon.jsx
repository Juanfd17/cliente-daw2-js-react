import React, {useEffect, useState} from 'react';
import AcoredeonItem from "./AcoredeonItem.jsx";
import './App_acordeon.css'

function Acordeon({url}) {
    const [clicked, setClicked] = useState(-1)
    const [faqs, setFaqs] = useState([])
    const[loading, setLoading]= useState(false)

    useEffect(() => {
        getChistes()
    }, [])

    useEffect(() => {
        getChistes()
    }, [url])

    function getChistes() {
        setLoading(true)
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch(url, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setFaqs([])
                let newFaqs = []
                result.jokes.map((joke) => {
                    newFaqs.push({question: joke.setup, answer: joke.delivery})
                })
                setFaqs(newFaqs)
            })
            .catch((error) => console.error(error))
        setLoading(false)
    }

    const handleToggle = (index) => {
        if (clicked === index){
            return setClicked(-1)
        }
        setClicked(index)
    }

    return (
        <div>
            <ul className={'accordion'}>
                {loading ? (<div>Loading</div>): (
                    faqs.map((faq, index) => (
                        <AcoredeonItem active={clicked === index} onToggle={() => handleToggle(index)} key={index} faq={faq}/>
                    ))
                )}
            </ul>
        </div>
    );
}

export default Acordeon;