const Sequelize = require("sequelize");
const connection = require("../database/database");

const Prontuario = connection.define('prontuario', {
    nome_paciente:{
        type: Sequelize.STRING,
        allowNull: false
    },
    data_atendimento:{
        type: Sequelize.DATE,
        allowNull: false,
        timestamps: false
    },responsavel_atendimento:{
        type: Sequelize.STRING,
        allowNull: false
    },descricao:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

//Prontuario.sync({force: false})

module.exports = Prontuario;