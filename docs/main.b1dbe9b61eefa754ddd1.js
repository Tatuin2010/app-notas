(()=>{'use strict';class a{static fromJSON({id:b,nota:c,completado:d,creado:e}){const f=new a(c);return f.id=b,f.completado=d,f.creado=e,f}constructor(a){this.nota=a,this.id=new Date().getTime(),this.completado=!1,this.creado=new Date}}const b=new class{constructor(){this.cargarNotas()}nueva(a){this.notas.push(a),this.guardarNotas()}borrar(a){this.notas=this.notas.filter((b)=>b.id!=a),this.guardarNotas()}completar(a){for(const b of this.notas)if(b.id==a){b.completado=!b.completado,this.guardarNotas();break}}guardarNotas(){localStorage.setItem('notas',JSON.stringify(this.notas))}cargarNotas(){this.notas=localStorage.getItem('notas')?JSON.parse(localStorage.getItem('notas')):[],this.notas=this.notas.map(a.fromJSON)}},c=document.querySelector('#notas'),d=document.querySelector('#addNota'),e=(a)=>{const b=document.createElement('li');b.classList.add('nota'),b.setAttribute('id',a.id),b.innerHTML=` <input type="checkbox"> ${a.nota}<img class="ico ico-del" src="./assets/ico-del.png"><hr>`,c.appendChild(b)};b.notas.forEach(e),d.addEventListener('keyup',(c)=>{if('Enter'===c.key&&''!=d.value){const c=new a(d.value);b.nueva(c),e(c),d.value=''}}),c.addEventListener('click',(a)=>{const d=a.target.localName,e=a.target.parentElement,f=e.getAttribute('id');'input'===d?(b.completar(f),e.classList.toggle('completado')):'ico-del'==a.target.classList[1]&&(b.borrar(f),c.removeChild(e))})})();