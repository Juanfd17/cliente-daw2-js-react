var animales = ['cerdo', 'gato', 'perro', 'vaca', 'zorro', 'burro', 'rana', 'leon'];
var efectos = ["rota", "grande", "pequenio", "baja", "def"];

window.onload = inicio;

function inicio() {
    let body = document.body;
    let divAnimales = document.createElement("div");

    divAnimales.id = "animales"

    for (let animal of animales) {
        let divAnimal = document.createElement("div");

        divAnimal.id = animal;
        divAnimal.className = "animal";
        divAnimal.style.backgroundImage = `url(images/${animal}.png)`;


        divAnimal.addEventListener("click", function (){
            let audio = document.querySelector("#audio");
            let source = document.querySelector("#source");
            source.src = `sounds/${animal}.wav`;
            audio.load();
            audio.play();

            let efecto = efectos[Math.floor(randomNumber(0, efectos.length))]
            divAnimal.className = "animal " + efecto;

        })

        divAnimales.append(divAnimal);

    }

    let audio = document.createElement("audio");
    audio.id = "audio";
    audio.preload="auto";


    let source = document.createElement("source");
    source.id = "source";
    source.type = "audio/wav";

    audio.append(source)
    divAnimales.append(audio)


    body.append(divAnimales);
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}