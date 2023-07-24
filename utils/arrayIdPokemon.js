export default function arrayIdPokemon(obj, times) {
  const objPokemon = obj.pokemon ?? obj.pokemon_species ?? obj.results;
  let pokemonsId = [];
  for (let i = times; i <= 10 + times; i++) {
    const pokemonFind = objPokemon[i].url ?? objPokemon[i].pokemon.url;
    pokemonsId.push(getIdPokemon(pokemonFind));
  }
  return pokemonsId;
}
function getIdPokemon(urlPokemon) {
  let pokemonId = urlPokemon.split("/");
  return pokemonId[pokemonId.length - 2];
}
