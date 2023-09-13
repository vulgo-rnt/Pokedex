import "dotenv/config";
import "./db/dbConfig.js";
import express from "express";
import routers from "./routers/route.js";

const app = express();

app.use("/", routers);

const PORT = process.env.PORT || 4111;

app.listen(PORT, console.log("Servidor escutando na porta: " + PORT));

export default app;
