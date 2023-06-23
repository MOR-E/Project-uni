const express = require("express");
const router = express.Router();
const PDFDocument = require('pdfkit');
const Prontuario = require("../models/Prontuario")
const Anamnese = require("../models/Anamnese");

router.post("/prontuario/baixar/:id", (req, res) => {
    const doc = new PDFDocument({});

    const name = "teste";

    res.setHeader(
        "Content-disposition", 
        'inline: filename="'+ name + ".pdf" + '"'
        );

    res.setHeader("Content-type", "application/pdf");

    var id = req.params.id

    Prontuario.findByPk(id).then(prontuario => {
        var nome_paciente = prontuario.nome_paciente;
        var data_atendimento = prontuario.data_atendimento;
        var responsavel_atendimento = prontuario.responsavel_atendimento;
        var descricao = prontuario.descricao;

        doc.fontSize(10).text("Nome do paciente: " + nome_paciente);
        doc.fontSize(10).text("Data de atendimento: " + data_atendimento);
        doc.fontSize(10).text("Reponsavel pelo atendimento: " + responsavel_atendimento);
        doc.fontSize(10).text("Descrição: " + descricao);

        
    doc.pipe(res);
    doc.end();
    });


});

router.post("/anamnese/baixar/:id", (req, res) => {
    const doc = new PDFDocument({});

    const name = "teste";

    res.setHeader(
        "Content-disposition", 
        'inline: filename="'+ name + ".pdf" + '"'
        );

    res.setHeader("Content-type", "application/pdf");

    var id = req.params.id

    Anamnese.findByPk(id).then(anamnese => {
        var nome_paciente = anamnese.nome_paciente;
        var idade_paciente = anamnese.idade;
        var data_atendimento = anamnese.data_atendimento;
        var responsavel_atendimento = anamnese.responsavel_atendimento;
        var curso = anamnese.curso;
        var email = anamnese.email;
        var data_nascimento = anamnese.data_nascimento;
        var telefone = anamnese.telefone;
        var encaminhado = anamnese.encaminhado;
        var periodo = anamnese.periodo;
        var descricao = anamnese.descricao;
        var historico = anamnese.historico;
        var historico_familiar = anamnese.historico_familiar;
        var relacao_familiar = anamnese.relacao_familiar;


        doc.fontSize(10).text("Nome do paciente: " + nome_paciente);
        doc.fontSize(10).text("Idade do paciente: " + idade_paciente);
        doc.fontSize(10).text("Data de atendimento: " + data_atendimento);
        doc.fontSize(10).text("Responsavel pelo atendimento: " + responsavel_atendimento);
        doc.fontSize(10).text("Curso do paciente: " + curso);
        doc.fontSize(10).text("Email do paciente: " + email);
        doc.fontSize(10).text("Data de nascimento: " + data_nascimento);
        doc.fontSize(10).text("Telefone para contato: " + telefone);
        doc.fontSize(10).text("Encaminhado por: " + encaminhado);
        doc.fontSize(10).text("Periodo do paciente: " + periodo);
        doc.fontSize(10).text("Descricao: " + descricao);
        doc.fontSize(10).text("Historico: " + historico);
        doc.fontSize(10).text("Historico familiar: " + historico_familiar);
        doc.fontSize(10).text("Relação familiar: " + relacao_familiar);
        

        
    doc.pipe(res);
    doc.end();
    });


});

module.exports = router;