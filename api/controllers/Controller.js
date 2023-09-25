import db from "../db/dbModel.js";

export class Controller {
  static async sendOne(req, res) {
    const response = await db.findOne({ name: `${req.params.name}` });
    res.send(response);
  }
  static async sendAll(req, res) {
    const response = await db
      .find()
      .skip(req.params.pag === 1 ? 0 : (req.params.pag - 1) * 27)
      .limit(27);

    const lengthList = await db.countDocuments();

    res.send({ response: response, lengthList: lengthList });
  }
  static async sendRegion(req, res) {
    const query = {
      ["region"]: { $in: [req.params.region] },
    };

    const response = await db
      .find(query)
      .skip(req.params.pag === 1 ? 0 : (req.params.pag - 1) * 27)
      .limit(27);

    const lengthList = await db.countDocuments(query);

    res.send({ response: response, lengthList: lengthList });
  }
  static async sendType(req, res) {
    const query = {
      ["types"]: { $in: [req.params.type] },
    };

    const response = await db
      .find(query)
      .skip(req.params.pag === 1 ? 0 : (req.params.pag - 1) * 27)
      .limit(27);

    const lengthList = await db.countDocuments(query);

    res.send({
      response: response,
      lengthList: lengthList,
    });
  }
}
