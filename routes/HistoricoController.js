const express = require("express");
const router = express.Router();
const Anamnese = require("../models/Anamnese");
const Prontuario = require("../models/Prontuario");

router.get("/historico", (req, res) => {
    Prontuario.findAll({
        order: [
            ['id','DESC']
        ],
        limit: 4
    }).then(prontuario => {
        Anamnese.findAll().then(anamnese => {
            res.render("Historico/index", {prontuario: prontuario, anamnese: anamnese});
        });
    });
    
});

module.exports = router;