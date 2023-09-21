import db from "../db/dbModel.js";

async function findDB([key, value]) {
  const paramsFindDb = { [key]: { $in: [value] } };
  const dbData = await db.find(paramsFindDb);
  return dbData;
}

export class Controller {
  static async sendOne(req, res) {
    const response = await db.findOne({ name: `${req.params.name}` });
    res.send(response);
  }
  static async sendAll(req, res) {
    const response = await db.find();
    res.send(response);
  }
  static async sendRegion(req, res) {
    const response = await findDB(["region", req.url.substring(8)]);
    res.send(response);
  }
  static async sendType(req, res) {
    const response = await findDB(["types", req.url.substring(6)]);
    res.send(response);
  }
}
