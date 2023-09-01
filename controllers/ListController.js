import { ViewList } from "../views/ViewList.js";
import db from "../api/db/dbModel.js";

const viewer = new ViewList();

export class ListController {
  async list(param1, param2) {
    const list = await db.find({ [param1]: [param2] });
    return viewer.uptade(list);
  }
  async listAll() {
    const list = await db.find();
    console.log(list);
    return viewer.uptade(list);
  }
}
