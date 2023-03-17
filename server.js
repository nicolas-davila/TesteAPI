const express = require('express');
const uuid = require("uuid");

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

    const userExiste = users.find((user) => user.id === id)
})

server.get("/", (req, res) => {
    res.json("Aprendendo o Node.js com controllers!")
})