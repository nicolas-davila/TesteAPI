import express from "express";
import Users from "../models/Users";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({titulo: "Aprendendo Node.js"});
    })
    app.use(
        express.json(),
        Users,

    )
}