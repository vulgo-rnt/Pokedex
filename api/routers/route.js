import express from "express";
import { ListController } from "../../controllers/ListController.js";
const controller = new ListController();

const routers = express.Router();

routers.get("/", (req, res) => res.redirect("/index.html"));
routers.get("/*.*", controller.send);

export default routers;
