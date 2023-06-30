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

async function createCardPokemon(getApi) {
  const body = document.querySelector("body");
  for (let pokemon of getApi) {
    const promisePokemon = await fetch(pokemon.url);
    const objPokemon = await promisePokemon.json();

    let card = document.createElement("span");

    const linkImgPokemon = objPokemon.sprites.front_default;
    let imgPokemon = document.createElement("img");
    imgPokemon.src = linkImgPokemon;

    const namePokemon = objPokemon.name;
    let paragName = document.createElement("p");
    paragName.innerText = namePokemon;

    const idPokemon = objPokemon.id;
    let paragId = document.createElement("p");
    paragId.innerText = idPokemon;

    card.appendChild(imgPokemon);
    card.appendChild(paragId);
    card.appendChild(paragName);
    body.appendChild(card);
  }
}

const test = await getAllInApi("pokemon");

await createCardPokemon(test);
