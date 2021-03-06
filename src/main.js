/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
/* eslint-disable import/extensions */
/* eslint-disable object-curly-newline */
import POKEMON from './data/pokemon/pokemon.js';
import { filter, order, searchPokemons, filterTopshow, calculateCandies } from './data.js';

// Declaración de variables
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
        <div class="card-wrap">
          <div class="card">
            <div class='box forward'>
              <div> <img class="img-styles" src='${obj.img}'/> </div>
              <div> <p class="letter1"><b>${obj.name}</b></p> </div>
              <div> <p class="letter2">N° ${obj.num}</p> </div>
              <span> <img src="img/pokeball.png"> </span>
              <p class="letter2"><span>Tipo:</span> <br> ${obj.type.join(' & ')}</p>
            </div> 
            <div class="box backward" id="backward""> 
              <div class='extrainfo1'> 
                <div class='extrainfo2'> <p class="letter2">${obj.height}</p> <span>
                Altura</span></div>
                <div class='extrainfo2'> <p class="letter2">${obj.weight}</p> <span>
                Peso</span> </div>
              </div>
              <div class='extrainfo1'> 
                <div class='extrainfo2'> <p class="letter2">${obj.candy_count}
                <img src="img/caramelo.png"></p><span>
                Caramelos</span> </div>
              </div >
              <p class="letter2"> <span>Hora de aparicion:</span> ${obj.spawn_time}</p>
              <p class="letter2"><span>Debilidades:</span> <br>${obj.weaknesses.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  pokemonList.innerHTML = showPokemon;
};

const orderList = document.getElementById('orderList');
const search = document.getElementById('search');
// Cambio de vista de pantalla de inicio a segunda pantalla
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
const evolutionSection = document.getElementById('evolutionSection');
// Cambio de vista a pokedex
const btnPokedex = document.getElementById('btn-pokedex');
btnPokedex.addEventListener('click', () => {
  firstView.classList.add('hide');
  filterList.classList.add('hide');
  weaknessesList.classList.add('hide');
  evolutionSection.classList.add('hide');
  search.classList.remove('hide');
  orderList.classList.remove('hide');
  secondView.classList.remove('hide');
  pokemonSection.classList.remove('hide');
  mostrarPokemon(POKEMON);
});
// Cambio de vista a tipos
const btnTypes = document.getElementById('btn-types');
btnTypes.addEventListener('click', () => {
  firstView.classList.add('hide');
  orderList.classList.add('hide');
  search.classList.add('hide');
  evolutionSection.classList.add('hide');
  secondView.classList.remove('hide');
  filterList.classList.remove('hide');
  weaknessesList.classList.remove('hide');
  pokemonSection.classList.remove('hide');
  mostrarPokemon(POKEMON);
});

// Orden por identificador y nombre
const orderSelector = document.getElementById('orderselector');
orderSelector.addEventListener('change', () => {
  const select2 = orderSelector.value;
  if (select2 === 'asc' || select2 === 'desc') {
    return mostrarPokemon(order(POKEMON, 'id', select2));
  }
  return mostrarPokemon(order(POKEMON, 'name', select2));
});

// Selección y filtrado de tipos de pokemon
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
const inputSearch = document.getElementById('input-search');
inputSearch.addEventListener('input', (event) => {
  mostrarPokemon(searchPokemons(POKEMON, event.target.value.toLowerCase()));
});
// Esconder la lupa
inputSearch.addEventListener('click', () => {
  document.getElementById('btn-search').classList.add('hide');
});

// Cambio de vista a los top 10 con mayor frecuencia de aparición
const btnTop = document.getElementById('btn-topten');
btnTop.addEventListener('click', () => {
  mostrarPokemon(filterTopshow(POKEMON));
  orderList.classList.add('hide');
  search.classList.add('hide');
  evolutionSection.classList.add('hide');
  filterList.classList.add('hide');
  weaknessesList.classList.add('hide');
});

// Cambio de vista a Evolucion
const btnEvolution = document.getElementById('btn-evolution');
btnEvolution.addEventListener('click', () => {
  evolutionSection.classList.remove('hide');
  filterList.classList.add('hide');
  weaknessesList.classList.add('hide');
  orderList.classList.add('hide');
  search.classList.add('hide');
  pokemonList.innerHTML = '';
});

const namePokemon = document.getElementById('namepokemon');
const numberOfCandies = document.getElementById('numberOfCandies');
const btnCalculate = document.getElementById('btn-calculate');
// Calcular el numero de caramelos para la siguiente evolucion
btnCalculate.addEventListener('click', () => {
  const candy = calculateCandies(POKEMON, namePokemon.value, numberOfCandies.value);
  const wantedPokemon = POKEMON.filter((obj) => obj.name.toLowerCase() === namePokemon.value);
  const nextEvolution = POKEMON.filter(
    (obj) => {
      return obj.name.toLowerCase() === wantedPokemon[0].next_evolution[0].name.toLowerCase();
    },
  );
  let showEvolution;
  wantedPokemon.forEach((obj) => {
    showEvolution = ` 
    <div class="wrap2">
        <div class="boxEvolution">
           <div><p class="letter2"> A tu ${namePokemon.value}</p> 
           <img class="img-styles" src='${obj.img}'/> 
           <p class="letter2"> le faltan ${candy} caramelos para evolucionar a: </p>
           <img class="img-styles" src='${nextEvolution[0].img}'/> 
           <p class="letter2"> ${obj.next_evolution[0].name}</p>
        </div>
        </div>
        </div> `;
  });
  pokemonList.innerHTML = showEvolution;
});
