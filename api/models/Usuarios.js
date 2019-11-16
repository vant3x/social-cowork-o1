const Sequelize = require('sequelize');
const db = require('../db/connect.js');
const Roles = require('./Roles');
const Propiedades = require('./../models/Propiedades');
const bcrypt = require('bcrypt-nodejs');


 const Usuarios = db.define('usuarios', {
    id_usuario:  {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING,
    apellido: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                msg: 'Agrega un correo valido'
            },
            notEmpty: {
                msg: 'El email no puede ir vacío'
            }
        },
        unique: {
         args:true,
         msg: 'El usuario ya está registrado'
        },
      
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'El password no puede ir vacío'
            }
        }
    },
    ciudad: Sequelize.STRING,
    direccion: Sequelize.STRING,
    fecha_creacion: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    ultima_sesion: {
        type: Sequelize.DATE
    },
    estado_usuario:{
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    token: Sequelize.STRING,
    expiracionToken: Sequelize.DATE

 }, {
     hooks: {
         beforeCreate(usuario) {
             usuario.password = bcrypt.hashSync(usuario.password, bcrypt.genSaltSync(10));
         }
     }
 });

 // metodos personalizados
 Usuarios.prototype.verificarPassword = function (password) {
     return bcrypt.compareSync(password, this.password);
 }

 Usuarios.belongsTo(Roles);
//Usuarios.hasMany(Propiedades);

 module.exports = Usuarios;