const tipoPropiedad = require('./../models/TipoPropiedad');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.mostrarTipoPropiedad = async (req, res, next) => {
    try {
        const tipoPropiedadData = await tipoPropiedad.findAll(); 
        res.json(tipoPropiedadData);
        //console.log(tipoPropiedadData);
    } catch(error) {
        console.log(error);
    }

}
