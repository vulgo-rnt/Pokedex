import express from "express";
import routers from "../routers/routs.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4111;

app.use("/", routers);

app.listen(PORT, console.log("Server don start for port: " + PORT));
