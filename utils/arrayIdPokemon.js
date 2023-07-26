function arrayIdPokemon(obj, offset) {
  const objPokemon = toCheckIdPokemons(obj);
  let pokemonsId = [];
  try {
    for (let i = offset - 10; i <= offset; i++) {
      const pokemonFind = objPokemon[i].url ?? objPokemon[i].pokemon.url;
      pokemonsId.push(getIdPokemon(pokemonFind));
    }
    return pokemonsId;
  } catch {
    return pokemonsId;
  }
}
function getIdPokemon(urlPokemon) {
  let pokemonId = urlPokemon.split("/");
  return pokemonId[pokemonId.length - 2];
}
function toCheckIdPokemons(obj) {
  return obj.pokemon ?? obj.pokemon_species ?? obj.results;
}

export { arrayIdPokemon, getIdPokemon, toCheckIdPokemons };
