/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable import/prefer-default-export */

// Función de filtrado por tipos de pokemon y debilidades
export const filter = (arr, property, condition) => {
  const element = [];
  for (let i = 0; i < arr.length; i += 1) {
    for (let index = 0; index < arr[i][property].length; index += 1) {
      if (arr[i][property][index] === condition) {
        element.push(arr[i]);
      }
    }
  } return element;
};

// Función de ordenado por numero y nombre
export const order = (arr, property, condition) => {
  let result;
  if (condition === 'a-z' || condition === 'asc') {
    result = arr.sort((a, b) => (a[property] > b[property] ? 1 : -1));
  } else {
    result = arr.sort((a, b) => (a[property] < b[property] ? 1 : -1));
  }
  return result;
};

// Función de buscar
export const searchPokemons = (pokemonList, inputValue) => pokemonList.filter(
  (pokemon) => pokemon.name.toLowerCase().startsWith(inputValue),
);

// Función de aparición top 10 más frecuentes
export const filterTopshow = (pokemonList) => pokemonList.filter(
  (pokemon) => pokemon.spawn_chance > 2.5,
);

// Función de calcular los caramelos para la siguiente evolución
export const calculateCandies = (array, nombre, candy) => {
  const compareName = array.filter((obj) => obj.name.toLowerCase() === nombre.toLowerCase());
  const newCandies = compareName[0].candy_count - candy;
  return newCandies;
};
