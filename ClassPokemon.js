export class Pokemon {
  constructor(objOrdPokemon) {
    //this.locationEncounter = this.getInApi(
    //  objOrdPokemon["location_area_encounters"]
    //).then((res) => this.reduceResponse(res, "location_area"));

    //this.objPokeSpecies = this.getInApi(objOrdPokemon.species.url);

    this.imgOgPokemon =
      objOrdPokemon.sprites.other["official-artwork"].front_default;

    this.name = objOrdPokemon.name;

    this.id = objOrdPokemon.id;
  }
  async getInApi(url) {
    let res = await fetch(url);
    return await res.json();
  }
  reduceResponse(obj, endPoint) {
    let response = [];

    for (let element of obj) {
      response.push(element[endPoint].name);
    }
    return response;
  }
}
