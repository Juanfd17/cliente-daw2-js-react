let enlaces = ["https://www.google.com", "https://www.youtube.com", "https://www.facebook.com", "https://www.twitter.com", "https://www.instagram.com", "https://www.whatsapp.com", "https://www.linkedin.com", "https://www.pinterest.com", "https://www.tumblr.com", "https://www.reddit.com"];

document.write("<a href='" + enlaces[0] +"'>" + enlaces[0] + "</a>");

setInterval(cambiarenlace, 10000, enlaces);

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function cambiarenlace(enlaces) {
    let enlace = enlaces[numeroAleatorio(0, enlaces.length)]
    console.log(enlace);
    document.getElementsByTagName("a")[0].href = enlace;
    document.getElementsByTagName("a")[0].innerHTML = enlace;
}