const adminPropiedades = require('../models/adminPropiedades');
const Usuarios = require('../models/Usuarios');
const Propiedades = require('../models/Propiedades');
const db = require('../db/connect');
const sequelize = require('sequelize');
const Op = sequelize.Op;

// reservas
exports.hacerReserva = async (req, res, next) => {
    const {fecha_in, fecha_out} = req.body; 
    const clientePrueba = 9;
    const {idPropiedad} = req.params.id;
    // info de la propiedad para calcular el valor total
    const propiedadInfo = await Propiedades.findOne({
        where: {
            id_propiedades: idPropiedad
        }
    });

    // const valorTotal = valor * propiedadInfo.precio;

    const reserva = await adminPropiedades.create({
        fecha_in,
        fecha_out,
        valor,
        clientePrueba,
        idPropiedad
    })
    .then(() => {
        console.log('Reserva con exito');
        res.send('Hola we, se reservó');
      }).catch(error => console.log(error));
    
    if(!reserva) {
        next(); 
    }
}