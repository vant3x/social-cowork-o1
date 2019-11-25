const adminPropiedades = require('../models/adminPropiedades');
const Usuarios = require('../models/Usuarios');
const Propiedades = require('../models/Propiedades');
const db = require('../db/connect');
const sequelize = require('sequelize');
const moment = require('moment');
const Op = sequelize.Op;

// reservas
exports.hacerReserva = async (req, res, next) => {
    const {fecha_in, fecha_out} = req.body; 
    let fecha1 = moment(fecha_in);
    let fecha2 =  moment(fecha_out);
    const diasTotales = (fecha2.diff(fecha1, 'days'));
    const cliente = {...req.user};
    cliente_id_usuario = cliente.id_usuario;
    const {idPropiedad} = req.params;
    // info de la propiedad para calcular el valor total
    const propiedad = await Propiedades.findOne({
        where: {
            id_propiedades: idPropiedad
        }
    });
    
    const precio = propiedad.precio;
    const propiedadId = propiedad.id_propiedades;
    console.log(precio);
   
    const valor = diasTotales * precio;
    const fecha_reserva = Date.now();

    const reserva = await adminPropiedades.create({
        fecha_in,
        fecha_out,
        valor,
        fecha_reserva,
        cliente_id_usuario,
        propiedadId
    })
    .then(() => {
        console.log('Reserva con exito');
        res.json({mensaje:'Hola we, se reservó'});
      }).catch(error => console.log(error));
    
    if(!reserva) {
        next(); 
    }
}

exports.historialReserva = async (req, res, next) => {
    const historial = await adminPropiedades.findAll();
    console.log(historial);
    res.json(historial);
}

exports.historialReservaPropiedad = async (req, res) => {
    const historial = await adminPropiedades.findAll({
        where: {
            id: req.params.idPropiedad
        }
    });
    console.log(historial);
}