const express = require("express");
const router = express.Router();
const Prontuario = require("../models/Prontuario")

router.get("/prontuario", (req, res) => {
    res.render("prontuario/index");
});

router.post("/prontuario/salvar", (req, res) => {
    var nome_paciente = req.body.nome_paciente;
    var data_atendimento = req.body.data_atendimento;
    var responsavel_atendimento = req.body.responsavel_atendimento;
    var corpo = req.body.corpo;


    Prontuario.create({
        nome_paciente: nome_paciente,
        data_atendimento: data_atendimento,
        responsavel_atendimento: responsavel_atendimento,
        corpo: corpo,

    }).then(() => {
        res.redirect("/home");
    }).catch((err) => {
        res.redirect("/home")
    })

});

module.exports = router;