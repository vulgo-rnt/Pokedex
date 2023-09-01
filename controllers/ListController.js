import { ViewList } from "../views/ViewList.js";
import db from "../api/db/dbModel.js";

const viewer = new ViewList();

export class ListController {
  async list(param1, param2) {
    console.log(param1);
    console.log(param2);
    const list = await db.find({ [param1]: [param2] });
    return list;
    //return viewer.uptade(list);
  }
}
