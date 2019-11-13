/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
/* eslint-disable import/extensions */
import POKEMON from './data/pokemon/pokemon.js';
import { filter, order } from './data.js';

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
<div class="wrap">
  <div class="tarjeta-wrap">
    <div class="tarjeta">
      <div class='box adelante'>
      <div> <img class="img-styles" src='${obj.img}'/> </div>
      <div> <p class="letter1"><b>${obj.name}</b></p> </div>
      <div> <p class="letter2">N° ${obj.num}</p> </div>
      </div> 
      <div class='box atras' id='atras'> 
        <p class="letter2">Altura: ${obj.height}</p>
        <p class="letter2">Peso: ${obj.weight}</p>
        <p class="letter2">Tipo:<br>${obj.type}</p>
        <p class="letter2">Debilidades: <br>${obj.weaknesses}</p>
      </div>
    </div>
  </div>
</div> `;
  });
  pokemonList.innerHTML = showPokemon;
};

const orderList = document.getElementById('orderList');
const search = document.getElementById('search');
// cambio de vista de pantalla de inicio a pokedex
btnStart.addEventListener('click', () => {
  firstView.classList.add('hide');
  secondView.classList.remove('hide');
  pokemonSection.classList.remove('hide');
  search.classList.remove('hide');
  orderList.classList.remove('hide');
  mostrarPokemon(POKEMON);
});
const filterList = document.getElementById('filterList');
const weaknessesList = document.getElementById('weaknessesList');

// cambio de vista a pokedex
const btnPokedex = document.getElementById('btn-pokedex');
btnPokedex.addEventListener('click', () => {
  firstView.classList.add('hide');
  filterList.classList.add('hide');
  weaknessesList.classList.add('hide');
  search.classList.remove('hide');
  orderList.classList.remove('hide');
  secondView.classList.remove('hide');
  pokemonSection.classList.remove('hide');
  mostrarPokemon(POKEMON);
});
// cambio de vista a tipos
const btnTypes = document.getElementById('btn-types');
btnTypes.addEventListener('click', () => {
  firstView.classList.add('hide');
  orderList.classList.add('hide');
  search.classList.add('hide');
  secondView.classList.remove('hide');
  filterList.classList.remove('hide');
  weaknessesList.classList.remove('hide');
  pokemonSection.classList.remove('hide');
  mostrarPokemon(POKEMON);
});

// Orden por id y name
const orderSelector = document.getElementById('orderselector');
orderSelector.addEventListener('change', () => {
  const select2 = orderSelector.value;
  if (select2 === 'asc' || select2 === 'desc') {
    return mostrarPokemon(order(POKEMON, 'id', select2));
  }
  return mostrarPokemon(order(POKEMON, 'name', select2));
});

// Seleccion y filtrado de tipos de pokemon
const typeSelector = document.getElementById('typeselector');
typeSelector.addEventListener('change', () => {
  const select = typeSelector.value;
  mostrarPokemon(filter(POKEMON, 'type', select));
});
// Seleccion y filtrado por debilidades
const weaknessesSelector = document.getElementById('weaknesses-selector');
weaknessesSelector.addEventListener('change', () => {
  const select1 = weaknessesSelector.value;
  mostrarPokemon(filter(POKEMON, 'weaknesses', select1));
});
// Selección de buscar en la pokedex
const searchPokemons = (pokemonList, inputValue) => {
  return pokemonList.filter((obj) => obj.name.toLowerCase().startsWith(inputValue));
};
const inputSearch = document.getElementById('input-search');
inputSearch.addEventListener('input', (event) => {
  mostrarPokemon(searchPokemons(POKEMON, event.target.value.toLowerCase()));
});
// esconder la lupa
inputSearch.addEventListener('click', () => {
  document.getElementById('btn-search').classList.add('hide');
});
// Para que se muestre el top 10
const filterTopshow = (allpokemons) => {
  return allpokemons.filter((obj) => obj.spawn_chance > 2.5);
};
// Cambio de vista a los top 10
const btnTop = document.getElementById('btn-topten');
btnTop.addEventListener('click', () => {
  mostrarPokemon(filterTopshow(POKEMON));
  orderList.classList.add('hide');
  search.classList.add('hide');
});
