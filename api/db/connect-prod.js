const Sequelize = require('sequelize');

const sequelize = new Sequelize('bgzfdvmk5uhaicuojvgz','uknkr3y9znaxs2ww','CjoX6O2CEccS8pUhgdPL', {
    host: 'bgzfdvmk5uhaicuojvgz-mysql.services.clever-cloud.com',
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