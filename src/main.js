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
// Seleccion de tipos de pokemon
const typeSelector = document.getElementById('typeselector');
typeSelector.addEventListener('change', () => {
  const select = typeSelector.value;
  if (select === '01') {
    mostrarPokemon(filter(POKEMON, 'Water'));
  } else if (select === '02') {
    mostrarPokemon(filter(POKEMON, 'Bug'));
  } else if (select === '03') {
    mostrarPokemon(filter(POKEMON, 'Dragon'));
  } else if (select === '04') {
    mostrarPokemon(filter(POKEMON, 'Electric'));
  } else if (select === '05') {
    mostrarPokemon(filter(POKEMON, 'Ghost'));
  } else if (select === '06') {
    mostrarPokemon(filter(POKEMON, 'Fire'));
  } else if (select === '07') {
    mostrarPokemon(filter(POKEMON, 'Ice'));
  } else if (select === '08') {
    mostrarPokemon(filter(POKEMON, 'Fighting'));
  } else if (select === '09') {
    mostrarPokemon(filter(POKEMON, 'Normal'));
  } else if (select === '10') {
    mostrarPokemon(filter(POKEMON, 'Grass'));
  } else if (select === '11') {
    mostrarPokemon(filter(POKEMON, 'Psychic'));
  } else if (select === '12') {
    mostrarPokemon(filter(POKEMON, 'Rock'));
  } else if (select === '13') {
    mostrarPokemon(filter(POKEMON, 'Ground'));
  } else if (select === '14') {
    mostrarPokemon(filter(POKEMON, 'Poison'));
  } else if (select === '15') {
    mostrarPokemon(filter(POKEMON, 'Flying'));
  }
});

