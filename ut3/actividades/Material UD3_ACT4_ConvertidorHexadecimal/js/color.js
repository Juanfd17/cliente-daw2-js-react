    export default class Color {
        #valorHex;
        #valorRGB;

    constructor(valor = '#ffffff') {
        if (typeof (valor) == 'string') {
            this.#valorHex = valor;
            this.#valorRGB = this.#hex2RGB(this.#valorHex);
        }
        if (Array.isArray(valor)) {
            this.#valorRGB = valor;
            this.#valorHex = this.#RGB2Hex(this.#valorRGB);
        }
    }

    set ValorRGB(rgb) {
        this.#valorRGB = [rgb[0], rgb[1], rgb[2]];
        this.#valorHex = this.#RGB2Hex(this.#valorRGB);
    }

    set ValorHex(hex) {
        this.#valorHex = hex;
        this.#valorRGB = this.#hex2RGB(this.#valorHex);
    }

    get ValorHex() {
        return this.#valorHex;
    }

    get Rojo() {
        return this.#valorRGB[0];
    }

    get Verde() {
        return this.#valorRGB[1];
    }

    get Azul() {
        return this.#valorRGB[2];
    }

    #RGB2Hex(rgb) {
        let cadenaHex = '';

        let rojo = parseInt(rgb[0]).toString(16);
        cadenaHex += rojo.length == 1 ? "0" + rojo : rojo;

        let verde = parseInt(rgb[1]).toString(16);
        cadenaHex += verde.length == 1 ? "0" + verde : verde;

        let azul = parseInt(rgb[2]).toString(16);
        cadenaHex += azul.length == 1 ? "0" + azul : azul;

        return cadenaHex;

        /* Otra forma:
         return '#' + ((1 << 24) + (parseInt(rgb[0]) << 16) + (parseInt(rgb[1]) << 8) + parseInt(rgb[2])).toString(16).slice(1);
         */
    }

    #hex2RGB(hex) {
        hex = "#"+hex;
        return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
    }

}


