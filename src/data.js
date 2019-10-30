export const mostrarPokemon = (arr) => {
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
};
