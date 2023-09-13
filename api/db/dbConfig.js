import mongoose from "mongoose";

mongoose.connect(process.env.DATABASE);

let db = mongoose.connection;

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco: sucessfully");
});
