addEventListener("message", async (pokemonName) => {
  const requestApi = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName.data}`
  );
  const request = await requestApi.json();

  postMessage(request);
});
