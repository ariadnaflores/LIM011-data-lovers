/* eslint-disable import/prefer-default-export */
/* export const mostrarPokemon = (arr) => {
  let showPokemon = '';
  arr.forEach((obj) => {
    showPokemon += `
    <div class='box'>
    <img src='${obj.img}'/>
    <p><b>${obj.name}</b></p>
    <p>N° ${obj.num}</p>
    </div>`;
  });
  return showPokemon;
}; */

export const filter = (arr, condition, option) => {
  const element = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (option === 'type') {
      for (let index = 0; index < arr[i].type.length; index += 1) {
        if (arr[i].type[index] === condition) {
          element.push(arr[i]);
        }
      }
    } else if (option === 'weaknesses') {
      for (let index = 0; index < arr[i].weaknesses.length; index += 1) {
        if (arr[i].weaknesses[index] === condition) {
          element.push(arr[i]);
        }
      }
    }
  } return element;
};
