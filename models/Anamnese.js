const Sequelize = require("sequelize");
const connection = require("../database/database");

const Anamnese = connection.define('anamnese', {
    nome_paciente:{
        type: Sequelize.STRING,
        allowNull: false
    },idade:{
        type: Sequelize.INTEGER,
        allowNull: false
    },data_atendimento:{
        type: Sequelize.DATE,
        allowNull: false,
        timestamps: false
    },responsavel_atendimento:{
        type: Sequelize.STRING,
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
    },encaminhado:{
        type: Sequelize.STRING,
        allowNull: false
    },periodo:{
        type: Sequelize.INTEGER,
        allowNull: false
    },descricao:{
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
    }
    
})

//Anamnese.sync({force: false})

module.exports = Anamnese;