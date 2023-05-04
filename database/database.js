const Sequelize = require("sequelize");

const connection = new Sequelize('moreiraprojeto','aluno','123456', {
    host:'localhost',
    dialect: 'mysql'
});

module.exports =  connection;

// root

//  abc@123