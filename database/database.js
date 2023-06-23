const Sequelize = require("sequelize");

const connection = new Sequelize('railway','root','Ziqx8WS6YsD3wgO0HiyS', {
    host: 'containers-us-west-20.railway.app',
    dialect: 'mysql',
    timezone: "-03:00",
    port: 6184,
    username: 'root',
    password: 'Ziqx8WS6YsD3wgO0HiyS',
    database: 'railway',
});

module.exports =  connection;

// root aluno

//  abc@123 123456