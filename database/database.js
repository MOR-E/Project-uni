const Sequelize = require("sequelize");

const connection = new Sequelize('moreiraprojeto','root','abc@123', {
    host:'localhost',
    dialect: 'mysql'
});

module.exports =  connection;

//aluno

//123456