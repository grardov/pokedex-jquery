$(document).ready(function() {
  const getPokemonList = 'https://pokeapi.co/api/v2/pokemon/?limit=150', //Get the first 150 pokemons
        getPokemonDetail = 'https://pokeapi.co/api/v2/pokemon/', //The endponit fot detail pokemon
        pokemonList = $('#item');

  //Get JSON from pokemonList
  $.getJSON(getPokemonList, (data) => {
    var pokemons = data.results;

    $.each(pokemons, (index, pokemon) => {
      let li = createItem(index+1, pokemon);
      pokemonList.append(li);
    })
  })
  .fail(() => { console.log("Error") });

});

//Function for generate li elements
function createItem(index, pokemon) {
  let liHtml = `<li class="pokemon-list__content__items-item heading" id="${index}">${index} ${pokemon.name}</li>`;
  
  return liHtml; //return the html tag
}