const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("start/login")
});  

app.listen(8000, ()=>{
    console.log("aplicação rodando!")
})

