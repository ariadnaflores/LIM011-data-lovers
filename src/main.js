import POKEMON from './data/pokemon/pokemon.js';
import { filter } from './data.js';

const firstView = document.getElementById('first-view');
const secondView = document.getElementById('second-view');
const pokemonList = document.getElementById('pokemonList');
const btnStart = document.getElementById('btn-start');
const pokemonSection = document.getElementById('pokemonSection');

// Mostrar todos los pokemones
const mostrarPokemon = (arr) => {
  let showPokemon = '';
  arr.forEach((obj) => {
    showPokemon += `
    <div class='box'>
    <img src='${obj.img}'/>
    <p><b>${obj.name}</b></p>
    <p>N° ${obj.num}</p>
    </div>`;
  });
  pokemonList.innerHTML = showPokemon;
};

// cambio de vista de pantalla de inicio a pokedex
btnStart.addEventListener('click', () => {
  firstView.classList.add('hide');
  secondView.classList.remove('hide');
  pokemonSection.classList.remove('hide');
  mostrarPokemon(POKEMON);
});
const filterList = document.getElementById('filterList');

// cambio de vista a pokedex
const btnPokedex = document.getElementById('btn-pokedex');
btnPokedex.addEventListener('click', () => {
  firstView.classList.add('hide');
  filterList.classList.add('hide');
  secondView.classList.remove('hide');
  pokemonSection.classList.remove('hide');
  mostrarPokemon(POKEMON);
});
// cambio de vista a tipos
const btnTypes = document.getElementById('btn-types');
btnTypes.addEventListener('click', () => {
  firstView.classList.add('hide');
  secondView.classList.remove('hide');
  filterList.classList.remove('hide');
  pokemonSection.classList.remove('hide');
  mostrarPokemon(filter(POKEMON, 'Water'));
});
// Seleccion y filtrado de tipos de pokemon
const typeSelector = document.getElementById('typeselector');
typeSelector.addEventListener('change', () => {
  const select = typeSelector.value;
  return mostrarPokemon(filter(POKEMON, select));
});
