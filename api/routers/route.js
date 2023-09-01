import express from "express";
import { ListController } from "../../controllers/ListController.js";
const controller = new ListController();

const routers = express.Router();

routers.get("/", controller.pag);
routers.get("/main.js", controller.arqJs);
routers.get("/style.css", controller.arqCss);
routers.get(/generation-(.*)/, controller.generationPag);
routers.get("/all", controller.allPag);
routers.get(/type-(.*)/, controller.typesPag);

export default routers;
