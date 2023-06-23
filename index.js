const express = require("express");
const app = express();
const connection = require("./database/database");
const bodyParser = require("body-parser");
const session = require("express-session");




//Controllers
const homeController = require("./routes/HomeController")
const fichaController = require("./routes/FichaAnaController");
const prontuarioController = require("./routes/PronturarioController");
const historicoController = require("./routes/HistoricoController");
const adminConstroller = require("./routes/adminController")
const createPdfRouter = require("./routes/baixar")

//Models
const Anamnese = require("./models/Anamnese");
const Prontuario = require("./models/Prontuario");
const Administrador = require("./models/Administrador"); 

//Sessions
app.use(session({
    secret: "tester_running", cookie: {/*maxAge: 30000*/}
}))

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

app.use("/", adminConstroller)

app.use("/", createPdfRouter)

app.get("/", (req, res) => {
    res.render("usuario/login")
});  


const port = process.env.PORT || 3000;
app.listen(port,"0.0.0.0", ()=>{
    console.log("Aplicação rodando!")
})

