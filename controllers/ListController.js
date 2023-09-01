import { ViewList } from "../views/ViewList.js";
import db from "../api/db/dbModel.js";

const viewer = new ViewList();

export class ListController {
  async list(param1, param2) {
    const list = await db.find({ [param1]: { $in: [param2] } });
    return viewer.uptade(list);
  }
  async listAll() {
    const list = await db.find();
    return viewer.uptade(list);
  }
}
