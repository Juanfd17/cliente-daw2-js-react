frase = "Hola, me llamo Juan"
console.log(giraPalabras(frase));


function giraPalabras(frase) {
    let palabras = frase.split(" ");
    let palabrasReves = "";

    let fraseReves = "";
    for (const palabra in palabras) {
        fraseReves += palabras[palabra].split("").reverse().join("");
        fraseReves += " ";
    }

    return fraseReves;
}