

const firstView = document.getElementById('first-view');
const start = document.getElementById('start');
const secondView = document.getElementById('second-view');
start.addEventListener('click',() =>{
    firstView.classList.add('hide');
    secondView.classList.remove('hide');
}
);

import POKEMON from './data/pokemon/pokemon.js';
console.log(POKEMON);

