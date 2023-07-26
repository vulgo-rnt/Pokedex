export class Pokemon {
  constructor(objOrdPokemon) {
    this.imgOgPokemon =
      objOrdPokemon.sprites.other["official-artwork"].front_default;

    this.name = objOrdPokemon.name;

    this.id = objOrdPokemon.id;

    this.weigth = objOrdPokemon.weight;

    this.height = objOrdPokemon.height;

    this.stats = this.getStats(objOrdPokemon);

    this.types = objOrdPokemon.types.map((element) => element.type.name);
  }
  // async loadPokeSpecies() {
  //   let res = await fetch(
  //     `https://pokeapi.co/api/v2/pokemon_species/${this.id}`
  //   );
  //   res.json();
  //   this.
  // }
  getStats(obj) {
    let results = {};
    for (let stats of obj.stats) {
      results[stats.stat.name] = stats.base_stat;
    }
    return results;
  }
}
