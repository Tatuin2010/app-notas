export class Nota {

    static fromJSON({ id, nota, completado, creado }) {
        const notaTemp = new Nota(nota);
        notaTemp.id = id;
        notaTemp.completado = completado;
        notaTemp.creado = creado;
        return notaTemp;
    }

    constructor(nota) {
        this.nota = nota;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }
}