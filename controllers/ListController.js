import { ViewList } from "../views/ViewList.js";
import db from "../api/db/dbModel.js";
import fs from "fs";

async function list(param1, param2) {
  const dbData = await db.find({ [param1]: { $in: [param2] } });
  return ViewList.uptade(dbData);
}
async function listAll() {
  const dbData = await db.find();
  return ViewList.uptade(dbData);
}

export class ListController {
  async allPag(req, res) {
    const templateList = await listAll();
    res.send(templateList);
  }
  async typesPag(req, res) {
    res.set("Context-Type", "text/html");
    const templateList = await list("types", req.originalUrl.substring(6));
    res.send(templateList);
  }
  async generationPag(req, res) {
    res.set("Context-Type", "text/html");
    const templateList = await list("region", req.originalUrl.substring(1));
    res.send(templateList);
  }
  arqCss(req, res) {
    res.set("Content-Type", "text/css");
    fs.readFile("./style.css", "utf-8", (err, data) => {
      res.send(data);
    });
  }
  arqJs(req, res) {
    res.set("Content-Type", "text/javascript");
    fs.readFile("./main.js", "utf-8", (err, data) => {
      res.send(data);
    });
  }
  pag(req, res) {
    res.set("Content-type", "text/html");
    fs.readFile("./index.html", "utf-8", (err, data) => {
      res.send(data);
    });
  }
}
