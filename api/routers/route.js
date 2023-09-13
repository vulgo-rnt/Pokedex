import express from "express";
import { Controller } from "../controllers/Controller.js";

const routers = express.Router();

routers.get("/all", Controller.sendAll);
routers.get(/generation-*/, Controller.sendGeneration);
routers.get(/type-*/, Controller.sendType);
routers.get("/pokemon/:name", Controller.sendOne);

export default routers;
