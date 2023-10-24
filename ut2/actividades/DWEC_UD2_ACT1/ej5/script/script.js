class Robot {
    constructor(x, y, orientacion) {
        this._x = x;
        this._y = y;
        this._orientacion = orientacion;
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
        switch (this._orientacion){
            case "norte":
                this._y += cuanto;
                break;

            case "sur":
                this._y -= cuanto;
                break;

            case "este":
                this._x += cuanto;
                break;

            case "oeste":
                this._x -= cuanto;
                break;
        }
    }

    gira(hacia){
        switch (this._orientacion) {
            case "norte":
                if (hacia === "D") {
                    this._orientacion = "este";
                } else {
                    this._orientacion = "oeste";
                }
                break;

            case "sur":
                if (hacia === "D") {
                    this._orientacion = "oeste";
                } else {
                    this._orientacion = "este";
                }
                break;

            case "este":
                if (hacia === "D") {
                    this._orientacion = "sur";
                } else {
                    this._orientacion = "norte";
                }
                break;

            case "oeste":
                if (hacia === "D") {
                    this._orientacion = "norte";
                } else {
                    this._orientacion = "sur";
                }
                break;
        }
    }

    toString(){
        return "(" + this._x + "," + this._y + ") mirando al " + this._orientacion + ".";
    }
}


let robot = new Robot(7, 3, "norte")
robot.instrucciones("DAAIAI");
console.log(robot.toString());