const express = require("express");
const Administrador = require("../models/Administrador");
const router = express.Router();
const bcrypt = require("bcryptjs");


router.get("/admin/usuario/criar", (req, res) => {
    res.render("usuario/criar");
});

router.post("/usuario/criar", (req, res) => {
    var email = req.body.email;
    var senha = req.body.senha;


    Administrador.findOne({where: {email: email}}).then(user => {
        if (user == undefined){
            
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(senha, salt);

            Administrador.create({
                email: email,
                senha: hash
            }).then(() => {
                res.redirect("/");
            }).catch((err) => {
                res.redirect("/")
            });

        }else{
            res.redirect("/usuario/criar")
        }
    });
});

module.exports = router;