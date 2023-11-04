import "dotenv/config";
import "./db/dbConfig.js";
import express from "express";
import routers from "./routers/route.js";
import cors from "cors";
import https from "https";

const app = express();

app.use(cors());
app.use("/", routers);

const PORT = process.env.PORT || 4111;

https.createServer(app).listen(PORT, console.log("Server in port: " + PORT));

export default app;
