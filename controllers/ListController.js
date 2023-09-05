import { ViewList } from "../views/ViewList.js";
import db from "../api/db/dbModel.js";

async function list({ 0: key, 1: value }) {
  const paramsFindDb = value === "all" ? null : { [key]: { $in: [value] } };
  const dbData = await db.find(paramsFindDb);
  return ViewList.uptade(dbData);
}

export class ListController {
  async send(req, res) {
    const regex = new RegExp(/css|js|html/);
    console.log(req.query);

    if (regex.test(req.params[1]) && !req.query?.pag) {
      const mimeType = `text/${req.params[1]}`;
      res.set("Content-type", mimeType);
      const UrlFile = `${req.params[0]}.${req.params[1]}`;
      res.sendFile(`C:/Users/Adm/Documents/vscode exer/Pokedex/${UrlFile}`);
    } else if (req.query.pag) {
      res.set("Content-type", "text/html");
      res.send(ViewList.uptade(null, req.query.pag));
    } else {
      const templateList = await list(req.params);
      res.send(templateList);
    }
  }
}
