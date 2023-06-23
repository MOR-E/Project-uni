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
        res.redirect("/historicoAna");
    }).catch((err) => {
        res.redirect("/fichaana")
    })

});

router.post("/ana/deletar" , (req, res) => {
    var id = req.body.id;
    if (id != undefined){
        if(!isNaN(id)){ //caso seja um numero
            Anamnese.destroy({
                where: {
                    id: id
                }
            }).then(() =>{
                res.redirect("/historicoAna")
            });
        }else{
            res.redirect("/historicoAna");
        }
    }else{ //caso seja null
        res.redirect("/historicoAna");
    }
});

function formata_datatime (date) {
    let data = date;

    let formataDatatime = data.getFullYear() + "-" + ("0" + (data.getMonth() + 1)).slice(-2) + "-" + ("0" + data.getDate()).slice(-2)  +
     "T" +  data.getHours() + ":" + ("0" + (data.getMinutes())).slice(-2); 

    return formataDatatime;
}


router.get("/anamnese/edit/:id", (req, res) => { 
    var id = req.params.id;
        if(isNaN(id)) {
            res.redirect("/historicoAna");
        }
        Anamnese.findByPk(id).then(anamnese => {
        if(anamnese != undefined){

                res.render("anamnese/edit",{anamnese: anamnese, formata_datatime: formata_datatime});

        }else{
            res.redirect("/historicoAna");
        }
    }).catch(erro => {
        res.redirect("/historicoAna ");
    })
});




router.post("/anamnese/update", (req,res) => {
    var id = req.body.id;
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

    Anamnese.update({
        id: id,
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
        relacao_familiar: relacao_familiar
    }, {
        where:{
            id: id
        }
    }).then(() => {
        res.redirect("/historicoAna")
    })
});


module.exports = router;