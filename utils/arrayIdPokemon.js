export default function arrayIdPokemon(objPokemon) {
  let pokemonsId = [];
  for (let pokemon of objPokemon) {
    let pokemonFind = pokemon.url ?? pokemon.pokemon.url;
    pokemonsId.push(getIdPokemon(pokemonFind));
  }
  return pokemonsId;
}
function getIdPokemon(urlPokemon) {
  let pokemonId = urlPokemon.split("/");
  return pokemonId[pokemonId.length - 2];
}
