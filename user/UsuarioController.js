const express = require("express");
const Usuario = require("./Usuario");
const router = express.Router();



router.get("/admin/criaruser", (req, res) => {
    res.render("usuario/criar")
});

module.exports = router;