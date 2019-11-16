const Sequelize = require('sequelize');
const db = require('../db/connect');

const TipoPropiedad = db.define('tipo_propiedad', {
  id: {
      type: Sequelize.INTEGER(11),
      autoIncrement: true,
      primaryKey: true
  },
  nombre: {
       type: Sequelize.STRING(100),
       allowNull: false
    }
    
});

module.exports = TipoPropiedad;