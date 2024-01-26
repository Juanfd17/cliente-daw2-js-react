import React, {useState} from 'react';

function Traductor(inputTexto) {
    let bocales = ["a", "e", "o", "u"]
    let texto = ""
    for (let letra of inputTexto) {
        if (bocales.includes(letra.toLowerCase())){
            texto += "i"
        } else {
            texto += letra
        }
    }

    return texto
}

export default Traductor;