const express = require("express");
const router = express.Router();

router.get("/prontuario", (req, res) => {
    res.render("prontuario/index");
});

module.exports = router;