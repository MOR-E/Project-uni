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
        res.redirect("/home");
    }).catch((err) => {
        res.redirect("/home")
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
                res.redirect("/prontuario/index")
            });
        }else{
            res.redirect("/prontuario/index");
        }
    }else{ //caso seja null
        res.redirect("/prontuario/index");
    }
});

module.exports = router;