/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable import/prefer-default-export */

// Función de filtrado por tipos de pokemon y debilidades
export const filter = (arr, propiedad, condition) => {
  const element = [];
  for (let i = 0; i < arr.length; i += 1) {
    for (let index = 0; index < arr[i][propiedad].length; index += 1) {
      if (arr[i][propiedad][index] === condition) {
        element.push(arr[i]);
      }
    }
  } return element;
};

// Función de ordenado por identificador y nombre
export const order = (arr, propiedad, condition) => {
  let result;
  if (condition === 'a-z' || condition === 'asc') {
    result = arr.sort((a, b) => (a[propiedad] > b[propiedad] ? 1 : -1));
  } else {
    result = arr.sort((a, b) => (a[propiedad] < b[propiedad] ? 1 : -1));
  }
  return result;
};

// Función de buscar
export const searchPokemons = (pokemonList, inputValue) => pokemonList.filter(
  (pokemon) => pokemon.name.toLowerCase().startsWith(inputValue),
);

// Función de aparición top 10 más frecuentes
export const filterTopshow = (allpokemons) => allpokemons.filter(
  (obj) => obj.spawn_chance > 2.5,
);

// Función de calcular los caramelos para la siguiente evolución
export const calcular = (array, nombre, caramelo) => {
  const filtrado1 = array.filter((obj) => obj.name.toLowerCase() === nombre.toLowerCase());
  const caramelofaltante = filtrado1[0].candy_count - caramelo;
  return caramelofaltante;
};
