import express from "express";
import fs from "fs";

const routers = express.Router();

routers.get("/", (req, res) => {
  res.set("Content-type", "text/html");
  fs.readFile("./index.html", "utf-8", (err, data) => {
    res.send(data);
    console.log(err);
  });
});
routers.get("/main.js", (req, res) => {
  res.set("Content-Type", "text/javascript");
  fs.readFile("./main.js", "utf-8", (err, data) => {
    res.send(data);
    console.log(err);
  });
});
routers.get("/controllers/ListController.js", (req, res) => {
  res.set("Content-Type", "text/javascript");
  fs.readFile("./controllers/ListController.js", "utf-8", (err, data) => {
    res.send(data);
  });
});
routers.get("/style.css", (req, res) => {
  res.set("Content-Type", "text/css");
  fs.readFile("./style.css", "utf-8", (err, data) => {
    res.send(data);
  });
});
routers.get("/api/db/dbModel.js", (req, res) => {
  res.set("Content-Type", "text/javascript");
  fs.readFile("./api/db/dbModel.js", "utf-8", (err, data) => {
    res.send(data);
  });
});
routers.get("/views/ViewList.js", (req, res) => {
  res.set("Content-Type", "text/javascript");
  fs.readFile("./views/ViewList.js", "utf-8", (err, data) => {
    res.send(data);
  });
});
export default routers;
