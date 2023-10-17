class Robot {
    constructor(x, y, orientacion) {
        this.x = x;
        this.y = y;
        this.orientacion = orientacion;
    }

    instrucciones(instrucciones){
        for (const instruccion of instrucciones) {
            switch (instruccion){
                case "A":
                    this.avanza(1);
                    break;

                case "D":
                    this.gira("D");
                    break

                case "I":
                    this.gira("I");
            }
        }
        console.log(instrucciones)
    }

    avanza(cuanto){
        switch (this.orientacion){
            case "norte":
                this.y += cuanto;
                break;

            case "sur":
                this.y -= cuanto;
                break;

            case "este":
                this.x += cuanto;
                break;

            case "oeste":
                this.x -= cuanto;
                break;
        }
    }

    gira(hacia){
        switch (this.orientacion) {
            case "norte":
                if (hacia === "D") {
                    this.orientacion = "este";
                } else {
                    this.orientacion = "oeste";
                }
                break;

            case "sur":
                if (hacia === "D") {
                    this.orientacion = "oeste";
                } else {
                    this.orientacion = "este";
                }
                break;

            case "este":
                if (hacia === "D") {
                    this.orientacion = "sur";
                } else {
                    this.orientacion = "norte";
                }
                break;

            case "oeste":
                if (hacia === "D") {
                    this.orientacion = "norte";
                } else {
                    this.orientacion = "sur";
                }
                break;
        }
    }

    toString(){
        return "(" + this.x + "," + this.y + ") mirando al " + this.orientacion + ".";
    }
}


let robot = new Robot(7, 3, "norte")
robot.instrucciones("DAAIAI");
console.log(robot.toString());