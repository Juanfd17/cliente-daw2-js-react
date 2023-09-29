setInterval(() => {
    let operaccion = () => {
        let operaccion = prompt("Introduce una operación matemática sencilla");
        alert(eval(operaccion));                
    };
    operaccion();
}, 5000);