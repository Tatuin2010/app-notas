import '../css/notas.less';
import { Nota, Notas } from '../classes';

const notas = new Notas();

const notasId = document.querySelector('#notas'),
    addNota = document.querySelector('#addNota');

const construirHtml = (nota) => {

    const li = document.createElement('li');
    li.classList.add('nota');
    li.setAttribute('id', nota.id);
    li.innerHTML = ` <input type="checkbox"> ${nota.nota}<img class="ico ico-del" src="./assets/ico-del.png"><hr>`;
    notasId.appendChild(li);
}

notas.notas.forEach(construirHtml);

addNota.addEventListener('keyup', (e) => {

    if (e.key === 'Enter' && addNota.value != '') {
        const nota = new Nota(addNota.value);
        notas.nueva(nota);
        construirHtml(nota);
        addNota.value = '';
    }
});

notasId.addEventListener('click', (e) => {

    const elemento = e.target.localName;
    const padre = e.target.parentElement;
    const id = padre.getAttribute('id');

    if (elemento === 'input') { // Click en el checkbox
        notas.completar(id);
        padre.classList.toggle('completado'); // Click en el button
    } else if (e.target.classList[1] == 'ico-del') {
        notas.borrar(id);
        notasId.removeChild(padre);
    }
})