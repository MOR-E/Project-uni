const Sequelize = require("sequelize");
const connection = require("../database/database");

const Administrador = connection.definte('administrador', {
    usuario:{
        type: Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

modelo.exports = Administrador;