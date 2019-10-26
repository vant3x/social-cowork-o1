const Sequelize = require('sequelize');
const db = require('./../db/connect');

const Roles = db.define('roles', {
    id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING(50), 
        allowNull: false
    }
});

module.exports = Roles;
