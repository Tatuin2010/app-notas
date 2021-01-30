export class Carpeta {

    static fromJSON({ id, carpeta }) {
        const carpetaTemp = new Carpeta(carpeta);
        carpetaTemp.id = id;
        return carpetaTemp;
    }

    constructor(carpeta) {
        this.carpeta = carpeta;
        this.id = new Date().getTime();
    }
}