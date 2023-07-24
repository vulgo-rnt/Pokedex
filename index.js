import { Pokemon } from "./ClassPokemon.js";
import arrayIdPokemon from "./utils/arrayIdPokemon.js";

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

  const array = arrayIdPokemon(obj, 0);

  await fetchWithWorker(array);
}

function createListPokemon(poke) {
  let main = `
  <span id="${poke.name}">
  <img src = ${poke.imgOgPokemon} class= "imgPokemon"/>
  <p>${poke.name}<p/>
  <p>${poke.id}<p/>
  </span>
  `;
  document.querySelector("main").innerHTML += main;
}

async function fetchWithWorker(valueArray) {
  for (let pokemonId of valueArray) {
    const requestApi = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    const request = await requestApi.json();
    const pokemonObj = new Pokemon(request);
    pokemons[pokemonObj.name] = pokemonObj;
    createListPokemon(pokemonObj);
  }
  createInteration();
}

function createInteration() {
  document.querySelectorAll("span").forEach((element) => {
    element.addEventListener("click", (target) => {
      let poke = pokemons[target.target.id];
      console.log(target.target.id);
      let main = `
    <main>
      <span>
      <p>${poke.name}</p>
      <img src = ${poke.imgOgPokemon} class= "imgPokemon"/>
      <p>${poke.types.join()}</p>
      </span>
    </main>
    `;
      document.querySelector("main").innerHTML = main;
    });
  });
}
