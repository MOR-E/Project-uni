const Sequelize = require("sequelize");
const connection = require("../database/database");
const Anamnese = require("./Anamnese");
const Prontuario = require("./Prontuario");

const Administrador = connection.define('admin', {
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

Anamnese.belongsTo(Administrador);

Prontuario.belongsTo(Administrador);

Administrador.hasMany(Anamnese);

Administrador.hasMany(Prontuario);

Administrador.sync({force: false});
Anamnese.sync({force: false});
Prontuario.sync({force: false});

module.exports = Administrador;