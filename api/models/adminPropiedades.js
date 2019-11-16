const Sequelize = require('sequelize');
const db = require('./../db/connect');
const Propiedades = require('./Propiedades');
const Cliente = require('./Usuarios');

const adminPropiedades = db.define('admin_propiedades', {
    id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
    },
    fecha_in: {
        type: Sequelize.DATE
    },
    fecha_out: Sequelize.DATE,
    valor: Sequelize.DOUBLE(8,3),
    
}, {  underscored: true
});
    
adminPropiedades.belongsTo(Cliente, {as:'cliente'});
adminPropiedades.belongsTo(Propiedades);


module.exports = adminPropiedades;