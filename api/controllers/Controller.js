import db from "../db/dbModel.js";

async function findInDB(req, res, query = null) {
  const response = await db
    .find(query)
    .skip(req.params.pag === 1 ? 0 : (req.params.pag - 1) * 27)
    .limit(27);

  const lengthList = await db.countDocuments(query);

  res.send({ response: response, lengthList: lengthList });
}

export class Controller {
  static async sendOne(req, res) {
    const response = await db.findOne({ name: `${req.params.name}` });
    res.send(response);
  }

  static async sendOneImg(req, res) {
    const response = await db.findOne({ name: `${req.params.name}` });
    res.send(response?.img);
  }

  static async sendAll(req, res) {
    await findInDB(req, res);
  }

  static async sendRegion(req, res) {
    const query = {
      ["region"]: { $in: [req.params.region] },
    };

    await findInDB(req, res, query);
  }

  static async sendType(req, res) {
    const query = {
      ["types"]: { $in: [req.params.type] },
    };

    await findInDB(req, res, query);
  }
}
