const express = require("express");
const router = express.Router();

router.get("/fichaana", (req, res) => {
    res.send("Ficha de Anamnese!");
});

module.exports = router;