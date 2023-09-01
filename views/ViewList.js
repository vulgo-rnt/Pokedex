export class ViewList {
  uptade(list) {
    return `
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pokedex</title>
    <link rel="stylesheet" href="style.css" />
    <link
      rel="shortcut icon"
      href="https://img.icons8.com/color/48/pokedex.png"
      type="image/x-icon"
    />
  </head>
  <body>
    <main>
      ${this.tagsPokemons(list)}
    </main>
    <footer>
    </footer>
  </body>
</html>
    `;
  }
  tagsPokemons(listOfPokemons) {
    let response = "";
    for (let i = 0; i <= 20; i++) {
      response += `
      <div>
        <span id="${listOfPokemons[i].name}">
        <p class="id">#${listOfPokemons[i].id}</p>
        <img src = ${listOfPokemons[i].img[0]} class= "imgPokemon"/>
        <p class="name">${listOfPokemons[i].name}</p>
        ${this.tagsTypes(listOfPokemons[i].types)}
      </div>`;
    }
    response += "";
    return response;
  }
  nextPags() {}
  tagsTypes(listOfTypesPokemons) {
    let response = "<div class=types>";
    for (const type of listOfTypesPokemons) {
      response += `
      <div class= "type ${type}">${type}</div>
      `;
    }
    response += "</div>";
    return response;
  }
}
