const express = require("express");
const router = express.Router();

router.get("/admin/prontuario/new", (req, res) => {
    res.render("prontuario/index");
});

module.exports = router;