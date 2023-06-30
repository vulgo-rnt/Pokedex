document.querySelector("[data-buttons]").addEventListener("click", (event) => {
  console.log(event.target.textContent);
});

async function getAllInApi(ord) {
  const htmlElements = document.querySelector("main");
  htmlElements.remove();
  const objApi = await fetch(
    `https://pokeapi.co/api/v2/${ord}/?limit=10&offset=0`
  );
  const obj = await objApi.json();
  return obj.results;
}

console.log(await getAllInApi("pokemon"));

async function createCardPokemon(getApi) {
  for (pokemon of getApi) {
    const promisePokemon = await fetch(pokemon.url);
    const objPokemon = await promisePokemon.json();

    let card = document.createElement("span");

    const linkImgPokemon = objPokemon.sprite.front_default;
    const imgPokemon = (document.createElement("img").src = linkImgPokemon);
  }
}
