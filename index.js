document.querySelector("[data-buttons]").addEventListener("click", (event) => {
  getOrdInApi(event.target.id);
});

async function getOrdInApi(ord) {
  const htmlElements = document.querySelector("main");
  htmlElements.remove();

  if (ord === "all") {
    const objApi = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0`
    );
    const obj = await objApi.json();

    const array = arrayIdPokemons(obj.results);

    createCardPokemon(array);
  } else {
    const objApi = await fetch(`https://pokeapi.co/api/v2/generation/${ord}`);
    const obj = await objApi.json();

    const array = arrayIdPokemons(obj.pokemon_species);

    createCardPokemon(array);
  }
}

async function createCardPokemon(arrayIdPokemon) {
  const body = document.querySelector("body");

  for (let i = 0; i < 10; i++) {
    const promisePokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${arrayIdPokemon[i]}`
    );
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

function arrayIdPokemons(objPokemon) {
  let pokemonsId = [];

  for (let i = 0; i < 10; i++) {
    let pokemonFind = objPokemon[i].url;
    pokemonsId.push(getIdPokemon(pokemonFind));
  }

  return pokemonsId;
}

function getIdPokemon(urlPokemon) {
  let pokemonId = urlPokemon.split("/");
  return pokemonId[pokemonId.length - 2];
}
