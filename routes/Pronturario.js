const express = require("express");
const router = express.Router();

router.get("/prontuario", (req, res) => {
    res.send("Ficha de Pronturario");
});

module.exports = router;