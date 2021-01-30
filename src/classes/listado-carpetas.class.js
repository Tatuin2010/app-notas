import { Carpeta } from './index';

export class Carpetas {

    constructor() {
        this.cargarCarpetas();
    }

    nueva(carpeta) {
        this.carpetas.push(carpeta);
        this.guardarCarpetas();
    }

    borrar(id) {
        this.carpetas = this.carpetas.filter(carpeta => carpeta.id != id);
        this.guardarCarpetas();
    }

    guardarCarpetas() {
        localStorage.setItem('carpetas', JSON.stringify(this.carpetas));
    }

    cargarCarpetas() {
        this.carpetas = (localStorage.getItem('carpetas')) ?
            JSON.parse(localStorage.getItem('carpetas')) : [];

        this.carpetas = this.carpetas.map(Carpeta.fromJSON);
    }
}