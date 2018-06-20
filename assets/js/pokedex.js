$(document).ready(function() {
  const getPokemonList = 'https://pokeapi.co/api/v2/pokemon/?limit=150', //Get the first 150 pokemons
        getPokemonDetail = 'https://pokeapi.co/api/v2/pokemon/', //The endponit fot detail pokemon
        pokemonList = $('#item'),
        pokemonInfo = $('#detail');

  //Get JSON from pokemonList
  $.getJSON(getPokemonList, (data) => {
    var pokemons = data.results;

    $.each(pokemons, (index, pokemon) => {
      let li = createItem(index+1, pokemon);
      pokemonList.append(li);
    })
  })
  .fail(() => { console.log("Error") });

  //Print pokemon
  pokemonList.on('click', '.pokemon-list__content__items-item', (event) => {
    let pokemonId = event.target.id;
    let pokemonUrl = getPokemonDetail + pokemonId.toString() + '/';

    $.getJSON(pokemonUrl, (pokemonData) => {
      let pokemonDetails = createPokemonCard(pokemonData);

      pokemonInfo.removeClass('pokemon-detail-empty');
      pokemonInfo.addClass('pokemon-detail');
      pokemonInfo.html(pokemonDetails);
    })
    .fail(() => { console.log("Error"); })
  });

});

function createPokemonCard(pokemon) {
  let html = `<div class="pokemon-detail__card">
                <div class="pokemon-detail__card__thumbnails">
                  <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="pokemon-detail__card__thumbnails-img">
                  <div class="pokemon-detail__card__thumbnails-elements">`
                    $.each(pokemon.types, (index, type) => {
                      html+=`<span class="label label-${type.type.name}">${type.type.name}</span>`
                    })
                  html+=`
                  </div>
                  <span class="pokemon-detail__card__thumbnails-name">${pokemon.name}</span>
                  <span class="pokemon-detail__card__thumbnails-num">No. ${pokemon.id}</span>
                </div>
                <div class="pokemon-detail__card__info">
                  <span class="pokemon-detail__card__info-span">
                    <strong>ID: </strong>${pokemon.id}
                  </span>
                  <span class="pokemon-detail__card__info-span">
                    <strong>Name: </strong>${pokemon.name}
                  </span>
                  <span class="pokemon-detail__card__info-span">
                    <strong>Height: </strong>${pokemon.height/10} m | 
                    <strong>Weight: </strong>${pokemon.weight/10} kg
                  </span>
                  <span class="pokemon-detail__card__info-span">
                    <strong>Habilidades: </strong>
                  </span>
                  <ul class="pokemon-detail__card__info-ul">`
                    $.each(pokemon.abilities, (index, ability)=>{
                      html+=`<li>${ability.ability.name}</li>`
                    })
                  html+=`</ul>
                  <div class="pokemon-detail__card__info-sprites">
                    <p><strong>Forms: </strong></p>`
                    $.each(pokemon.sprites, (index, sprite)=>{
                      if(sprite !== null)
                        html+=`<img src="${sprite}" alt="Pokémon Form">`
                    });
                  html+=`
                  </div>
                </div>`

  return html;
}

//Function for generate li elements
function createItem(index, pokemon) {
  let liHtml = `<li class="pokemon-list__content__items-item heading" id="${index}">${index} ${pokemon.name}</li>`;
  
  return liHtml; //return the html tag
}