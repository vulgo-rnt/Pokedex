import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default () => {
  mongoose.connect(process.env.DATABASE);

  let db = mongoose.connection;

  db.on("error", console.log.bind(console, "Erro de conexão"));
  db.once("open", () => {
    console.log("Conexão com o banco: true");
  });
};
