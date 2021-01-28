import { Nota } from './index';

export class Notas {

    constructor() {
        this.cargarNotas();
    }

    nueva(nota) {
        this.notas.push(nota);
        this.guardarNotas();
    }

    borrar(id) {
        this.notas = this.notas.filter(nota => nota.id != id);
        this.guardarNotas();
    }

    completar(id) {
        for (const nota of this.notas) {
            if (nota.id == id) {
                nota.completado = !nota.completado;
                this.guardarNotas();
                break;
            }
        }
    }

    guardarNotas() {
        localStorage.setItem('notas', JSON.stringify(this.notas));
    }

    cargarNotas() {
        this.notas = (localStorage.getItem('notas')) ?
            JSON.parse(localStorage.getItem('notas')) : [];

        this.notas = this.notas.map(Nota.fromJSON);
    }
}