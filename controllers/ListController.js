import { ViewList } from "../views/ViewList.js";
import db from "../api/db/dbModel.js";

export class ListController {
  classPokemon;
  ord;
  constructor(attributesPokemon) {
    this.classPokemon = attributesPokemon.parentNode.id;
    this.ord = classPokemon.id;
  }
  list() {
    if (this.classPokemon === "pokemons") {
    } else {
      const list = db.find({ [this.classPokemon]: [this.ord] });
      console.log(list);
      ViewList.uptade(list);
    }
  }
}
