import dotenv from "dotenv";

export class ViewList {
  pokeData;
  listSize;

  static uptade(dbData) {
    dotenv.config;

    this.pokeData = dbData;
    this.listSize = process.env.LIST_SIZE;

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
      ${this.createTagsPokemons(dbData)}
    </main>
    <footer>
    ${this.pagination()}
    </footer>
    <script src="mainPag.js"></script>
  </body>
</html>
    `;
  }
  static pagination() {
    let resolve = "";
    const mediaList = Math.ceil(this.pokeData.length / this.listSize);
    for (let i = 1; i <= mediaList; i++) {
      resolve += `
      <button>${i}</button>
      `;
    }
    return resolve;
  }

  static createTagsPokemons(listOfPokemons) {
    let response = "";
    for (let i = 0; i <= this.listSize; i++) {
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

  static tagsTypes(listOfTypesPokemons) {
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
