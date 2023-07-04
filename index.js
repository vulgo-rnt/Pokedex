document.querySelector("[data-buttons]").addEventListener("click", (event) => {
  createOrd(event.target);
});

async function createOrd(ord) {
  document.querySelector("main").remove();
  const ordGeneration = ord.id;

  if (ordGeneration === "all") {
    const objApi = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0`
    );
    const obj = await objApi.json();

    const array = arrayIdPokemons(obj.results);

    createCardPokemon(array);
  } else if (Number(ord.id)) {
    const objApi = await fetch(
      `https://pokeapi.co/api/v2/generation/${ord.id}`
    );
    const obj = await objApi.json();

    const array = arrayIdPokemons(obj.pokemon_species);

    createCardPokemon(array);
  } else {
    const objApi = await fetch(
      `https://pokeapi.co/api/v2/type/${ord.innerText.toLowerCase()}`
    );
    const obj = await objApi.json();

    const array = arrayIdPokemons(obj.pokemon);

    createCardPokemon(array);
  }
}

async function createCardPokemon(arrayIdPokemon) {
  const body = document.querySelector("body");

  for (let i = 0; i < 50; i++) {
    const promisePokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${arrayIdPokemon[i]}`
    );
    const objPokemon = await promisePokemon.json();

    let main = document.createElement("main");

    let card = document.createElement("span");

    const linkImgPokemon =
      objPokemon.sprites.other["official-artwork"].front_default;
    let imgPokemon = document.createElement("img");
    imgPokemon.src = linkImgPokemon;
    imgPokemon.classList = "imgPokemon";

    const namePokemon = objPokemon.name;
    let paragName = document.createElement("p");
    paragName.innerText = namePokemon;

    const idPokemon = objPokemon.id;
    let paragId = document.createElement("p");
    paragId.innerText = idPokemon;

    card.appendChild(imgPokemon);
    card.appendChild(paragId);
    card.appendChild(paragName);
    main.appendChild(card);
    body.appendChild(main);
  }
}

function arrayIdPokemons(objPokemon) {
  let pokemonsId = [];

  for (let i = 0; i < 50; i++) {
    let pokemonFind = objPokemon[i].url ?? objPokemon[i].pokemon.url;
    pokemonsId.push(getIdPokemon(pokemonFind));
  }

  return pokemonsId;
}

function getIdPokemon(urlPokemon) {
  let pokemonId = urlPokemon.split("/");
  return pokemonId[pokemonId.length - 2];
}

document.getElementById("return").addEventListener("click", () => {
  location.reload();
});
