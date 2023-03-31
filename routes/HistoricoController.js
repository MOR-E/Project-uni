const express = require("express");
const router = express.Router();

router.get("/historico", (req, res) => {
    res.render("Historico/index");
});

module.exports = router;