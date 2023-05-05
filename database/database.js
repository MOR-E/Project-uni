const Sequelize = require("sequelize");

const connection = new Sequelize('moreiraprojeto','root','abc@123', {
    host:'localhost',
    dialect: 'mysql'
});

module.exports =  connection;

// root aluno

//  abc@123 123456