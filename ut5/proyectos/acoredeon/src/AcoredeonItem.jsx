import React from 'react';
import './App_acordeon.css'

function AcoredeonItem({faq, active, onToggle}) {
    return (
        <li className={`accordion_item ${active ? "active": ""}`}>
            <button className={'button'} onClick={onToggle}>{faq.question}
            <span className={'control'}>{active ? "-" : "+"}</span>
            </button>
            <div className={`answer_wrapper ${active ? "open" : ""}`}>
                <div className={'answer'}>{faq.answer}</div>
            </div>
        </li>
    );
}

export default AcoredeonItem;