const Sequelize = require("sequelize");
const connection = require("../database/database");
const Anamnese = require("./Anamnese");
const Prontuario = require("./Prontuario");

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

Anamnese.belongsTo(Administrador);

Prontuario.belongsTo(Administrador);

Administrador.hasMany(Anamnese);

Administrador.hasMany(Prontuario);

Administrador.sync({force: true});
Anamnese.sync({force: true});
Prontuario.sync({force: true});

modelo.exports = Administrador;