const express = require("express");
const router = express.Router();
const Anamnese = require("../models/Anamnese");

router.get("/fichaana", (req, res) => {
    res.render("Anamnese/index");
});

router.post("/anamnese/salvar", (req, res) => {
    var nome_paciente = req.body.nome_paciente;
    var data_atendimento = req.body.data_atendimento;
    var responsavel_atendimento = req.body.responsavel_atendimento;
    var descricao = req.body.descricao;
    var usuario = req.body.usuario;
    var historico = req.body.historico;
    var historico_familiar = req.body.historico_familiar;
    var relacao_familiar = req.body.relacao_familiar;
    var idade = req.body.idade;
    var curso = req.body.curso;
    var email = req.body.email;
    var data_nascimento = req.body.data_nascimento;
    var telefone = req.body.telefone;
    var periodo = req.body.periodo;



    Anamnese.create({
        nome_paciente: nome_paciente,
        data_atendimento: data_atendimento,
        responsavel_atendimento: responsavel_atendimento,
        descricao: descricao,
        usuario: usuario,
        historico: historico,
        historico_familiar: historico_familiar,
        relacao_familiar: relacao_familiar,
        idade: idade,
        curso: curso,
        email: email,
        data_nascimento: data_nascimento,
        telefone: telefone,
        periodo: periodo,

    }).then(() => {
        res.redirect("/home");
    }).catch((err) => {
        res.redirect("/home")
    })

});

module.exports = router;