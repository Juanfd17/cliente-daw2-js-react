import React, {useState} from 'react';
import AcoredeonItem from "./AcoredeonItem.jsx";
import './App_acordeon.css'

let faqs = [
    {
        question: "¿Quiénes somos?",
        answer:
            "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
    {
        question: "¿De dónde venimos?",
        answer:
            "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
    },
    {
        question: "¿Estamos solos en la galaxia o acompañados?",
        answer:
            "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
];

function Acordeon() {
    const [clicked, setClicked] = useState(-1)
    const handleToggle = (index) => {
        if (clicked === index){
            return setClicked(-1)
        }
        setClicked(index)
    }

    return (
        <ul className={'accordion'}>
            {faqs.map((faq, index) => (
                <AcoredeonItem active={clicked === index} onToggle={() => handleToggle(index)} key={index} faq={faq}/>
            ))}
        </ul>
    );
}

export default Acordeon;