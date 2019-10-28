const firstView = document.getElementById('first-view');
const start = document.getElementById('start');
const secondView = document.getElementById('second-view');
start.addEventListener('click',() =>{
    firstView.classList.add('hide');
    secondView.classList.remove('hide');
}
);
/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */

/*import { example } from './data.js';

console.log(example);*/

/*
 * console.log(POKEMON);
 * console.log(LoL);
 * console.log(POTTER)
*/
