/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable import/prefer-default-export */

// Funcion de filtrado por tipos de pokemon y debilidades
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

export const order = (arr, propiedad, condition) => {
  let result;
  if (condition === 'a-z' || condition === 'asc') {
    result = arr.sort((a, b) => {
      if (a[propiedad] > b[propiedad]) {
        return 1;
      } if (a[propiedad] < b[propiedad]) {
        return -1;
      }
    });
  } else if (condition === 'z-a' || condition === 'desc') {
    result = arr.sort((a, b) => {
      if (a[propiedad] < b[propiedad]) {
        return 1;
      } if (a[propiedad] > b[propiedad]) {
        return -1;
      }
    });
  }
  return result;
};
