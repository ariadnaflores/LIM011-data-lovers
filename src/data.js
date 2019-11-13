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

export const order = (arr, key, esperado) => {
  let result;
  if (key === 'name') {
    if (esperado === 'a-z') {
      result = arr.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    } else if (esperado === 'z-a') {
      result = arr.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });
    }
  } else if (key === 'id') {
    if (esperado === 'asc') {
      result = arr.sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      });
    } else if (esperado === 'desc') {
      result = arr.sort((a, b) => {
        if (a.id < b.id) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
        return 0;
      });
    }
  }
  return result;
};
