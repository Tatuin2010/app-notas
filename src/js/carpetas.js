import '../css/carpetas-notas.less';
import { Carpeta, Carpetas } from '../classes';
import { addNota, notas, construirHtmlNota } from './notas';

const carpetas = new Carpetas();
const carpetasId = document.querySelector('#carpetas'),
    addCarpeta = document.querySelector('#addCarpeta'),
    panelCentral = document.querySelector('#panel-central'),
    carpetaId = document.querySelector('#carpeta-id'),
    notasId = document.querySelector('#notas');


const construirHtmlCarpeta = (carpeta) => {

    const li = document.createElement('li');
    li.classList.add('carpeta');
    li.setAttribute('id', carpeta.id);
    li.innerHTML = `<img class="folder" src="./assets/ico-folder.png">${carpeta.carpeta}<img class="ico ico-del" src="./assets/ico-del.png">`;
    carpetasId.appendChild(li);
}

carpetas.carpetas.forEach(construirHtmlCarpeta);

addCarpeta.addEventListener('keyup', (e) => {

    if (e.key === 'Enter' && addCarpeta.value != '') {
        const carpeta = new Carpeta(addCarpeta.value);
        carpetas.nueva(carpeta);
        construirHtmlCarpeta(carpeta);
        addCarpeta.value = '';
    }
});

carpetasId.addEventListener('click', (e) => {




    const elemento = e.target.localName;
    const padre = e.target.parentElement;
    const id = padre.getAttribute('id');

    if (elemento === 'li') {
        panelCentral.prepend(addNota);
        panelCentral.setAttribute('data-id', e.target.id);
        carpetaId.innerText = e.target.innerText;
        notasId.innerHTML = '';

        for (const nota of notas.notas) {
            if (nota.carpetaId == e.target.id) {
                construirHtmlNota(nota);

                const check = document.getElementById(nota.id);
                if (nota.completado == true) {
                    check.classList.add('completado');
                    check.firstElementChild.setAttribute('checked', 'checked');
                }
            }
        }
    } else if (e.target.classList[1] == 'ico-del') {
        notas.notas = notas.notas.filter(nota => nota.carpetaId != id);
        localStorage.setItem('notas', JSON.stringify(notas.notas));
        notasId.innerHTML = '';
        carpetaId.innerHTML = '';

        carpetas.borrar(id);
        carpetasId.removeChild(padre);
    }
})