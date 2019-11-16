const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba-ong-sql','root','', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: false
}); 

module.exports = sequelize;