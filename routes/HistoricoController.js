const express = require("express");
const router = express.Router();
const Anamnese = require("../models/Anamnese");
const Prontuario = require("../models/Prontuario")
const adminAuth = require("../middlewares/adminAuth"); 


function formata_data (date) {
    let data = date;

    let dataFormatada = ((data.getDate() )) + "/" + ("0" + (data.getMonth() + 1)).slice(-2) +
     "/" + data.getFullYear() + " as " + data.getHours() + ":" + data.getMinutes(); 

    return dataFormatada;
}

router.get("/historicoAna", adminAuth ,(req, res) => {

        Anamnese.findAll().then(anamnese => {
            res.render("Historico/index", {anamnese: anamnese, formata_data: formata_data});
        });
    
});

router.get("/historicoProntu", adminAuth ,(req, res) => {


    Prontuario.findAll().then(prontuario => {
        res.render("Historico/prontuario", {prontuario: prontuario, formata_data: formata_data});
    });

});

module.exports = router;