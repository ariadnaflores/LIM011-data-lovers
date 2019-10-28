export const mostrarPokemon = (arr) => {
  let showPokemon = '';
  arr.forEach((obj) => {
    showPokemon += ` 
    <div class='box'> 
    <img src='${obj.img}'
    <p>${obj.name}</p>
    <p>${obj.num}</p>
    </div>`;
  });
  return showPokemon;
};
