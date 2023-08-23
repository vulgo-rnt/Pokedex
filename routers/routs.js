import express from "express";
import fs from "fs";

const routers = express.Router();

routers.get("/", (req, res) => {
  res.set("Content-type", "text/html");
  fs.readFile("./views/index.html", "utf-8", (err, data) => {
    res.send(data);
    console.log(err);
  });
});
routers.get("/index.js", (req, res) => {
  res.set("Content-Type", "text/javascript");
  fs.readFile("./index.js", "utf-8", (err, data) => {
    res.send(data);
    console.log(err);
  });
});
routers.get("/style.css", (req, res) => {
  res.set("Content-Type", "text/css");
  fs.readFile("./style.css", "utf-8", (err, data) => {
    res.send(data);
  });
});

export default routers;
