const Sequelize = require("sequelize");
const db = require("./../db/connect.js");
const TipoPropiedad = require("./TipoPropiedad");
const Servicios = require("./Servicios");

const Propiedades = db.define("Propiedades", {
  id_propiedades: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  titulo: {
    type: Sequelize.STRING
  },
  descripcion: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  precio: {
    type: Sequelize.DOUBLE(8, 3),
    allowNull: true
  },
  sector: Sequelize.STRING(255),
  direccion: Sequelize.STRING(150),
  area: Sequelize.INTEGER,
  banios: Sequelize.INTEGER,
  imagen: Sequelize.STRING(255),
  habitaciones: Sequelize.INTEGER,
  cod_referencia: {
    type: Sequelize.STRING(20),
    unique: true
  },
  estado_disponible: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

// Propiedades.hasMany(Servicios);
Propiedades.belongsTo(TipoPropiedad);
module.exports = Propiedades;
