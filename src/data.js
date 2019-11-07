/* eslint-disable import/prefer-default-export */

// Funcion de filtrado por tipos de pokemon y debilidades
export const filter = (arr, condition, option) => {
  const element = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (option === 'type') {
      for (let index = 0; index < arr[i].type.length; index += 1) {
        if (arr[i].type[index] === condition) {
          element.push(arr[i]);
        }
      }
    } else {
      for (let index = 0; index < arr[i].weaknesses.length; index += 1) {
        if (arr[i].weaknesses[index] === condition) {
          element.push(arr[i]);
        }
      }
    }
  } return element;
};
