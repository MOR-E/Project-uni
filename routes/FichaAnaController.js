const express = require("express");
const router = express.Router();

router.get("/fichaana", (req, res) => {
    res.render("Anamnese/index");
});



module.exports = router;