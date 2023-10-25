function treatName(name) {
  return name[0].toUpperCase() + name.substring(1).replace(/-/g, " ");
}

function treatID(id) {
  let pokeId = "";
  if (id < 10) pokeId = `00${id}`;
  else if (id < 100) pokeId = `0${id}`;
  else pokeId = id;

  return pokeId;
}

export { treatName, treatID };
