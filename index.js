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

async function createOrd(ord) {
  document.querySelector("main").innerHTML = "";

  if (ord.parentNode.id === "all") {
    const objApi = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1281`
    );
    const obj = await objApi.json();

    const array = arrayIdPokemon(obj.results);

    fetchInApi(array);
  } else if (Number(ord.id)) {
    const objApi = await fetch(
      `https://pokeapi.co/api/v2/generation/${ord.id}`
    );
    const obj = await objApi.json();

    const array = arrayIdPokemon(obj.pokemon_species);

    fetchInApi(array);
  } else {
    const objApi = await fetch(
      `https://pokeapi.co/api/v2/type/${ord.innerText.toLowerCase()}`
    );
    const obj = await objApi.json();

    const array = arrayIdPokemon(obj.pokemon);

    await fetchInApi(array);
  }
}

async function createCardPokemon(poke) {
  let main = `<main>
        <span>
          <img src = ${poke.imgOgPokemon} class= "imgPokemon"/>
          <p>${poke.name}<p/>
          <p>${poke.id}<p/>
          </span>
          </main>
      `;
  document.querySelector("main").innerHTML += main;
}

async function fetchInApi(valueArray) {
  try {
    for (let pokemonId of valueArray) {
      const worker = new Worker("./workerFetch.js");
      worker.postMessage(pokemonId);
      worker.addEventListener("message", (msn) => {
        const pokemonObj = new Pokemon(msn.data);
        createCardPokemon(pokemonObj);
      });
    }
  } catch (error) {
    console.log(error);
  }
}
