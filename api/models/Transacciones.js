const Sequelize = require('sequelize');
const db = require('./../db/connect');
const Propiedades = require('./../models/Propiedades');

const Transacciones = db.define('transacciones', {
  id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  id_transaccion: {
      type: Sequelize.INTEGER
  },
  valor: {
      type: Sequelize.DOUBLE(8,2)
  },
  estado_transaccion: Sequelize.INTEGER
  
}, {underscored: true});

Transacciones.belongsTo(Propiedades);

module.exports = Transacciones;