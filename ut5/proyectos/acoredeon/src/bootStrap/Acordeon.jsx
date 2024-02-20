import Accordion from 'react-bootstrap/Accordion';
import { BsFillPatchQuestionFill } from "react-icons/bs";


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

function BasicExample() {
    return (
        <Accordion defaultActiveKey="0">
            {faqs.map((faq, index) => (
                <Accordion.Item eventKey={index}>
                    <Accordion.Header> <BsFillPatchQuestionFill /> {faq.question}</Accordion.Header>
                    <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}

export default BasicExample;