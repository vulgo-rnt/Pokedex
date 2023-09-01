import { ViewList } from "../views/ViewList.js";
import db from "../api/db/dbModel.js";

export class ListController {
  constructor() {
    this.viewer = new ViewList();
  }

  async list(param1, param2) {
    const list = await db.find({ [param1]: { $in: [param2] } });
    return this.viewer.uptade(list);
  }
  async listAll() {
    const list = await db.find();
    return this.viewer.uptade(list);
  }
}
