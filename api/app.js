import express from "express";
import routers from "./routers/route.js";
import dbConnect from "./db/dbConfig.js";
import dotenv from "dotenv";

dbConnect();
dotenv.config();

const app = express();

app.use("/", routers);

const PORT = process.env.PORT || 4111;

app.listen(PORT, console.log("Servidor escutando na porta: " + PORT));
