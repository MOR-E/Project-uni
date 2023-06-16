const express = require("express");
const router = express.Router();
const Anamnese = require("../models/Anamnese");
const Prontuario = require("../models/Prontuario")
const adminAuth = require("../middlewares/adminAuth"); 

router.get("/historicoAna", adminAuth ,(req, res) => {

        Anamnese.findAll().then(anamnese => {
            res.render("Historico/index", {anamnese: anamnese});
        });
    
});

router.get("/historicoProntu", adminAuth ,(req, res) => {

    Prontuario.findAll().then(prontuario => {
        res.render("Historico/prontuario", {prontuario: prontuario});
    });

});

module.exports = router;