import express from "express";
import { ListController } from "../../controllers/ListController.js";
const controller = new ListController();

const routers = express.Router();

routers.get("/*.*", controller.send);
routers.get("/", (req, res) => res.redirect("/index.html"));

export default routers;
