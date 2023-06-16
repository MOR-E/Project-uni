const express = require("express");
const router = express.Router();
const Anamnese = require("../models/Anamnese");
const adminAuth = require("../middlewares/adminAuth"); 

router.get("/fichaana", adminAuth ,(req, res) => {
    res.render("Anamnese/index");
});

router.post("/anamnese/salvar", (req, res) => {
    var nome_paciente = req.body.nome_paciente;
    var idade_paciente = req.body.idade_paciente;
    var data_atendimento = req.body.data_atendimento;
    var responsavel_atendimento = req.body.responsavel_atendimento;
    var curso = req.body.curso_paciente;
    var email = req.body.email_paciente;
    var data_nascimento = req.body.data_nascimento;
    var telefone = req.body.telefone;
    var encaminhado = req.body.encaminhado;
    var periodo = req.body.periodo;
    var descricao = req.body.descricao;
    var historico = req.body.historico;
    var historico_familiar = req.body.historico_familiar;
    var relacao_familiar = req.body.relacao_familiar;

    

    Anamnese.create({
        nome_paciente: nome_paciente,
        idade: idade_paciente,
        data_atendimento: data_atendimento,
        responsavel_atendimento: responsavel_atendimento,
        curso: curso,
        email: email,
        data_nascimento: data_nascimento,
        telefone: telefone,
        encaminhado: encaminhado,
        periodo: periodo,
        descricao: descricao,
        historico: historico,
        historico_familiar: historico_familiar,
        relacao_familiar: relacao_familiar,

   

    }).then(() => {
        res.redirect("/home");
    }).catch((err) => {
        res.redirect("/home")
    })

});

module.exports = router;