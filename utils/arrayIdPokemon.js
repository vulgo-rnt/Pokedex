export default function arrayIdPokemon(obj, offset) {
  const objPokemon = obj.pokemon ?? obj.pokemon_species ?? obj.results;
  let pokemonsId = [];
  for (let i = offset; i <= 10 + offset; i++) {
    const pokemonFind = objPokemon[i].url ?? objPokemon[i].pokemon.url;
    pokemonsId.push(getIdPokemon(pokemonFind));
  }
  return pokemonsId;
}
function getIdPokemon(urlPokemon) {
  let pokemonId = urlPokemon.split("/");
  return pokemonId[pokemonId.length - 2];
}
