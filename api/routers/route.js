import express from "express";
import { Controller } from "../controllers/Controller.js";

const routers = express.Router();

routers.get("/pokemon/:name", Controller.sendOne);
routers.get("/all", Controller.sendAll);
routers.get(/region-*/, Controller.sendRegion);
routers.get(/type-*/, Controller.sendType);

export default routers;
