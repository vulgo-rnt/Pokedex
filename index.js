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

async function createOrd(target) {
  document.querySelector("main").innerHTML = "";

  const objApi = await fetch(
    `https://pokeapi.co/api/v2/${target.parentNode.id}/${target.id}`
  );
  const obj = await objApi.json();

  const array = arrayIdPokemon(obj, 0);

  await fetchWithWorker(array);
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

async function fetchWithWorker(valueArray) {
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
