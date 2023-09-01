import express from "express";
import fs from "fs";
import { ListController } from "../../controllers/ListController.js";
const controller = new ListController();

const routers = express.Router();

routers.get("/", (req, res) => {
  res.set("Content-type", "text/html");
  fs.readFile("./index.html", "utf-8", (err, data) => {
    res.send(data);
  });
});
routers.get("/main.js", (req, res) => {
  res.set("Content-Type", "text/javascript");
  fs.readFile("./main.js", "utf-8", (err, data) => {
    res.send(data);
  });
});
routers.get("/style.css", (req, res) => {
  res.set("Content-Type", "text/css");
  fs.readFile("./style.css", "utf-8", (err, data) => {
    res.send(data);
  });
});
routers.get(/generation-(.*)/, async (req, res) => {
  res.set("Context-Type", "text/html");
  const templateList = await controller.list(
    "region",
    req.originalUrl.substring(1)
  );
  res.send(templateList);
});
routers.get("/all", async (req, res) => {
  res.set("Context-Type", "text/html");
  const templateList = await controller.listAll();
  res.send(templateList);
});
routers.get(/type-(.*)/, async (req, res) => {
  res.set("Context-Type", "text/html");
  const templateList = await controller.list(
    "types",
    req.originalUrl.substring(6)
  );
  res.send(templateList);
});

export default routers;
