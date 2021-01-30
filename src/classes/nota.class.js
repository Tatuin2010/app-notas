export class Nota {

    static fromJSON({ id, nota, completado, creado, carpetaId }) {
        const notaTemp = new Nota(nota);
        notaTemp.id = id;
        notaTemp.completado = completado;
        notaTemp.creado = creado;
        notaTemp.carpetaId = carpetaId;
        return notaTemp;
    }

    constructor(nota, carpetaId) {
        this.nota = nota;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
        this.carpetaId = carpetaId;
    }
}