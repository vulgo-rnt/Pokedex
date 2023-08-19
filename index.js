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

class Pokemon {
  constructor(objOrdPokemon) {
    this.imgOgPokemon =
      objOrdPokemon.sprites.other["official-artwork"].front_default;

    this.imgGif =
      objOrdPokemon.sprites.versions["generation-v"][
        "black-white"
      ].animated?.front_default;

    this.name = objOrdPokemon.name;

    this.id = objOrdPokemon.id;

    this.weigth = objOrdPokemon.weight;

    this.height = objOrdPokemon.height;

    this.stats = this.getStats(objOrdPokemon);

    this.types = objOrdPokemon.types.map((element) => element.type.name);
  }
  getStats(obj) {
    let results = {};
    for (let stats of obj.stats) {
      results[stats.stat.name] = stats.base_stat;
    }
    return results;
  }
}

const returnButton = document.getElementById("return");

returnButton.addEventListener("click", () => {
  location.reload();
});
//--------------------------------------------------------------------------------
document.querySelector("[data-buttons]").addEventListener("click", (event) => {
  createOrd(event.target);
});

let pokemons = {};

async function createOrd(target) {
  document.querySelector("main").innerHTML = "";

  const objApi = await fetch(
    `https://pokeapi.co/api/v2/${target.parentNode.id}/${target.id}`
  );
  const obj = await objApi.json();

  await fetchWithWorker(obj, 10);
}

function createListPokemon(poke) {
  let pokeName = poke.name[0].toUpperCase() + poke.name.substr(1);
  let main = `
  <span id="${poke.name}">
    <p class="id">#${poke.id}</p>
    <img src = ${poke.imgGif ?? poke.imgOgPokemon} class= "imgPokemon"/>
    <p class="name">${pokeName.replace("-", " ")}</p>
  `;

  let div = '<div class = "types">';

  for (let type of poke.types) {
    let typeElement = `
  <div class= "type ${type}">${type}</div>
  `;
    div += typeElement;
  }

  div += "</div>";
  main += div;
  main += "</span>";

  document.querySelector("main").innerHTML += main;
}

async function fetchWithWorker(obj, offset) {
  document.querySelector("main").innerHTML = "";
  const arrayId = arrayIdPokemon(obj, offset);

  for (let pokemonId of arrayId) {
    const requestApi = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    const request = await requestApi.json();

    const pokemonObj = new Pokemon(request);
    createListPokemon(pokemonObj);

    pokemons[pokemonObj.name] = pokemonObj;
  }
  createInteration();
  createPagNext(obj);
}

function createInteration() {
  let cardPokemonsNodes = document.querySelectorAll("span");

  cardPokemonsNodes.forEach((element) => {
    element.childNodes.forEach((childsElements) => {
      childsElements.addEventListener("click", (node) => {
        let poke = pokemons[node.target.parentNode.id];
        let htmlCardPokemon = `
<main>
  <span>
    <p>${poke.name}</p>
    <img src = ${poke.imgOgPokemon} class= "imgPokemon"/>
    <p>${poke.types.join()}</p>
  </span>
</main>
              `;
        document.querySelector("main").innerHTML = htmlCardPokemon;
      });
    });
  });
}

function createPagNext(obj) {
  let idPokemons = toCheckIdPokemons(obj);
  let div = document.createElement("div");
  for (let i = 1; i <= Math.ceil(idPokemons.length / 10); i++) {
    let button = document.createElement("button");
    button.innerText = i;
    button.addEventListener("click", (element) => {
      fetchWithWorker(obj, element.target.innerText * 10);
    });
    div.appendChild(button);
  }
  document.querySelector("main").appendChild(div);
}
