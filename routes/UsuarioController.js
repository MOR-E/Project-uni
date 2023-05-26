const express = require("express");
const router = express.Router();
const Usuario = require("../models/Administrador")
const bcrypt = require("bcryptjs");

router.get("/admin/users", (req, res) => {
    res.send("Listagem de usuarios");
});

router.get("/admin/usuario/criar", (req, res) => {
    res.render("usuario/criar");
});

router.post("/usuario/criar", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    User.create({
        email: email,
        password: hash
    }).then(() => {
        res.redirect("/");
    }).catch((err) => {
        res.redirect("/")
    })

        
});

module.exports = router;