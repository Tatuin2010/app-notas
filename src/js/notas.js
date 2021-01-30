import '../css/carpetas-notas.less';
import { Nota, Notas } from '../classes';

export const notas = new Notas();

const inpNota = document.createElement('input');
inpNota.setAttribute('id', 'addNota');
inpNota.setAttribute('placeholder', 'Agregar Nota');
export const addNota = inpNota;

const notasId = document.querySelector('#notas'),
    // addNota = document.querySelector('#addNota'),
    panelCentral = document.querySelector('#panel-central');



export const construirHtmlNota = (nota) => {

    const li = document.createElement('li');
    li.classList.add('nota');
    li.setAttribute('id', nota.id);
    li.innerHTML = ` <input type="checkbox"> ${nota.nota}<img class="ico ico-del" src="./assets/ico-del.png">`;
    notasId.appendChild(li);
}

// notas.notas.forEach(construirHtmlNota); // Muestra lista de notas en pantalla

addNota.addEventListener('keyup', (e) => {

    if (e.key === 'Enter' && addNota.value != '') {
        const nota = new Nota(addNota.value, panelCentral.getAttribute('data-id'));
        notas.nueva(nota);
        construirHtmlNota(nota);
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