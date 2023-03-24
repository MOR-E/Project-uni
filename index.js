const express = require("express");
const app = express();
const connection = require("./database/database");
const bodyParser = require("body-parser");

//Controllers
const homeController = require("./routes/HomeController")
const fichaController = require("./routes/FichaAnaController");
const prontuarioController = require("./routes/Pronturario");
const historicoController = require("./routes/HistoricoController");


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


app.use("/", homeController);    

app.use("/", fichaController);   

app.use("/", prontuarioController);   

app.use("/", historicoController);   

app.get("/", (req, res) => {
    res.render("start/login")
});  



app.listen(8001, ()=>{
    console.log("Aplicação rodando!")
})

