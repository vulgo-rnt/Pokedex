import db from "../db/dbModel.js";

async function findDB(key, value) {
  const paramsFindDb = { [key]: { $in: [value] } } || null;
  const dbData = await db.find(paramsFindDb);
  return dbData;
}

export class Controller {
  static async sendOne(req, res) {
    const response = await db.findOne({ name: `${req.params.name}` });
    res.send(response);
  }
  static async sendAll(req, res) {
    const response = await findDB();
    res.send(response);
  }
  static async sendGeneration(req, res) {
    const response = await findDB(["region", req.url.substring(1)]);
    res.send(response);
  }
  static async sendType(req, res) {
    console.log(req.url.substring(5));
    const response = await findDB(["types", req.url.substring(6)]);
    res.send(response);
  }
}
