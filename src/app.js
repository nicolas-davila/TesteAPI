import express from "express";
import db from "./config/dbConnect";

db.on("error", console.log.bind(console, "Erro de conexão! :("));
db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso! :)");
});

const app = express();
app.use(express.json());

module.exports = app;