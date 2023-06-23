const express = require("express");
const router = express.Router();
const Prontuario = require("../models/Prontuario")
const adminAuth = require("../middlewares/adminAuth"); 


router.get("/prontuario", adminAuth ,(req, res) => {
    res.render("prontuario/index");
});

router.post("/prontuario/salvar", (req, res) => {
    
    var nome_paciente = req.body.nome_paciente;
    var data_atendimento = req.body.data_atendimento;
    var responsavel_atendimento = req.body.responsavel_atendimento;
    var descricao = req.body.descricao;
  

    Prontuario.create({
        nome_paciente: nome_paciente,
        data_atendimento: data_atendimento,
        responsavel_atendimento: responsavel_atendimento,
        descricao: descricao,

    }).then(() => {
        res.redirect("/historicoProntu");
    }).catch((err) => {
        res.redirect("/prontuario")
    })
});


router.post("/prontuario/deletar" , (req, res) => {
    var id = req.body.id;
    if (id != undefined){
        if(!isNaN(id)){ //caso seja um numero
            Prontuario.destroy({
                where: {
                    id: id
                }
            }).then(() =>{
                res.redirect("/historicoProntu")
            });
        }else{
            res.redirect("/historicoProntu");
        }
    }else{ //caso seja null
        res.redirect("/historicoProntu");
    }
});

function formata_datatime (date) {
    let data = date;

    let formataDatatime = data.getFullYear() + "-" + ("0" + (data.getMonth() + 1)).slice(-2) + "-" + ("0" + data.getDate()).slice(-2)  +
     "T" +  data.getHours() + ":" + ("0" + (data.getMinutes())).slice(-2); 

    return formataDatatime;
}

router.get("/prontuario/edit/:id", (req, res) => { 
    var id = req.params.id;
        if(isNaN(id)) {
            res.redirect("/historicoProntu");
        }
        Prontuario.findByPk(id).then(prontuario => {
        if(prontuario != undefined){
            res.render("prontuario/edit",{prontuario: prontuario, formata_datatime: formata_datatime});
        }else{
            res.redirect("/historicoProntu");
        }
    }).catch(erro => {
        res.redirect("/historicoProntu ");
    })
});

router.post("/prontuario/update", (req,res) => {
    var nome_paciente = req.body.nome_paciente;
    var data_atendimento = req.body.data_atendimento;
    var responsavel_atendimento = req.body.responsavel_atendimento;
    var descricao = req.body.descricao;
    var id = req.body.id;

    Prontuario.update({
        nome_paciente: nome_paciente,
        data_atendimento: data_atendimento,
        responsavel_atendimento: responsavel_atendimento,
        descricao: descricao,}, {
        where:{
            id: id
        }
    }).then(() => {
        res.redirect("/historicoProntu")
    })
});

module.exports = router;