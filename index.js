const express = require("express");
const app = express();
const connection = require("./database/database");
const bodyParser = require("body-parser");

//View Engine
app.set('view engine', 'ejs');

//Static    
app.use(express.static('public'));


//Body parser
app.use(bodyParser.urlencoded({extends: false}));
app.use(bodyParser.json());

//database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso");
    }).catch((error) => {
        console.log(error)
    })


app.get("/", (req, res) => {
    res.render("start/login")
});  



app.listen(8001, ()=>{
    console.log("aplicação rodando!")
})

