import express from "express";
import { Controller } from "../controllers/Controller.js";

const routers = express.Router();

routers.get("/type/:type/:pag", Controller.sendType);
routers.get("/region/:region/:pag", Controller.sendRegion);
routers.get("/pokemon/:name", Controller.sendOne);
routers.get("/imgPokemon/:name", Controller.sendOneImg);
routers.get("/all/:pag", Controller.sendAll);

export default routers;
