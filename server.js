const mongoose = require("mongoose");
const express = require('express');
const uuid = require("uuid");

mongoose.connect("mongodb+srv://mateus:vzVVSNvtoL9B7M65@cluster0.e91rvpv.mongodb.net/?retryWrites=true&w=majority")

let db = mongoose.connection;

db.on("error", console.log.bind(console, 'Erro de conexão! :('));
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso! :)')
})

const server = express();

server.use(express.json())

server.listen(3000, () => console.log('Server is running!'));

const users = [];

const toDos = [];

server.post("/users", (req, res) => {
    const { nome, email, senha} = req.body;

    const userJaExiste = users.find((user) => user.email === email);

    if(userJaExiste) {
        res.status(400).json({mensagem: "Este usuário já existe!"})
    }

    const id = uuid.v4();

    const user = {
        nome,
        email,
        senha,
        id
    }

    users.push(user)

    res.status(201).json(user)
})

server.post("/to-do/:id", (req, res) => {
    const { id } = req.params;
    const { nome, descricao } = req.body;

    const userExiste = users.find((user) => user.id === id);

    if(!userExiste) {
        res.status(404).json({ mensagem: "O usuário não existe!" })
    }

    const toDoId = uuid.v4();


    const toDo = {
        id: toDoId,
        nome,
        descricao,
        criado_em: new Date(),
        user_id: id
    }

    toDos.push(toDo);

    res.status(201).json(toDo)

})

server.get("/to-do/:id", (req, res) => {

    const { id } = req.params;

    const userExiste = users.find((user) => user.id === id);

    if(!userExiste) {
        res.status(404).json({ mensagem: "To-dos não existe!" })
    }

    const userToDos = toDos.filter((todo) => todo.user_id === id);

    res.json(userToDos);
})

server.delete("/to-do/:id", (req, res) => {
    const { id } = req.params;

    const todo = toDos.find((todo) => todo.id === id);

    const todoIndex = toDos.indexOf(todo);

    if(todoIndex === -1) {
        res.status(404).json({ mensagem: "To-do não existe!" })
    }

    toDos.splice(todoIndex, 1);

    res.json({ mensagem: "To-do exluido com sucesso!" })
})

server.get("/", (req, res) => {
    res.json("Aprendendo o Node.js com controllers!")
})