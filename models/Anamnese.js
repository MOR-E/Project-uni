const Sequelize = require("sequelize");
const connection = require("../database/database");

const Anamnese = connection.define('anamnese', {
    nome_paciente:{
        type: Sequelize.STRING,
        allowNull: false
    },data_atendimento:{
        type: Sequelize.DATE,
        allowNull: false
    },responsavel_atendimento:{
        type: Sequelize.STRING,
        allowNull: false
    },descricao:{
        type: Sequelize.STRING,
        allowNull: false
    },usuario:{
        type: Sequelize.STRING,
        allowNull: false
    },historico:{
        type: Sequelize.STRING,
        allowNull: false
    },historico_familiar:{
        type: Sequelize.STRING,
        allowNull: false
    },relacao_familiar:{
        type: Sequelize.STRING,
        allowNull: false
    },idade:{
        type: Sequelize.INTEGER,
        allowNull: false
    },curso:{
        type: Sequelize.STRING,
        allowNull: false
    },email:{
        type: Sequelize.STRING,
        allowNull: false
    },data_nascimento:{
        type: Sequelize.DATE,
        allowNull: false
    },telefone:{
        type: Sequelize.INTEGER,
        allowNull: false
    },periodo:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    
})

//Anamnese.sync({force: true})

module.exports = Anamnese;