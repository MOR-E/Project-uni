const express = require("express");
const router = express.Router();

router.get("/historico", (req, res) => {
    res.send("Historico!");
});

module.exports = router;