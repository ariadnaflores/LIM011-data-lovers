import POKEMON from './data/pokemon/pokemon.js';
import { mostrarPokemon } from './data.js';

const firstView = document.getElementById('first-view');
const secondView = document.getElementById('second-view');
const nodeFather = document.getElementById('root');
const btnStart = document.getElementById('btn-start');

btnStart.addEventListener('click', () => {
  firstView.classList.add('hide');
  secondView.classList.remove('hide');
  nodeFather.classList.remove('hide');
});
nodeFather.innerHTML = mostrarPokemon(POKEMON);
