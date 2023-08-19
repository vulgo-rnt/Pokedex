import express from "express";
import fs from "fs";

const app = express();
app.use(express.static("Pokedex"));

app.get("/", (req, res) => {
  res.set("Content-type", "text/html");
  fs.readFile("./index.html", "utf-8", (err, data) => {
    res.send(data);
  });
});
app.get("/index.js", (req, res) => {
  res.set("Content-Type", "text/javascript");
  fs.readFile("./index.js", "utf-8", (err, data) => {
    res.send(data);
  });
});
app.get("/style.css", (req, res) => {
  res.set("Content-Type", "text/css");
  fs.readFile("./style.css", "utf-8", (err, data) => {
    res.send(data);
  });
});

app.listen(3000);
