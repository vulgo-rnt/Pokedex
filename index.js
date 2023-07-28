import { Pokemon } from "./ClassPokemon.js";
import { arrayIdPokemon, toCheckIdPokemons } from "./utils/arrayIdPokemon.js";

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
  let main = `
  <span id="${poke.name}">
    <p class="id">#${poke.id}</p>
    <img src = ${poke.imgGif ?? poke.imgOgPokemon} class= "imgPokemon"/>
    <p class="name">${poke.name}</p>
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
