const Propiedades = require('../models/Propiedades');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


// subida de imagen producto al servidor
const multer = require('multer');
const shortid = require('shortid');

const configMulter = {
    storage: fileStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname + '../../uploads/');
        },
        filename: (req, file, cb) => {
            const extension = file.mimetype.split('/')[1];
            cb(null, `${shortid.generate()}.${extension}`);
        }
    }),
    fileFilter(req, file, cb) {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(new Error('Formato No válido'))
        }
    },
}

// pasar la configuracion y el campo
const upload = multer(configMulter).single('imagen');

// sube un archivo
exports.subirArchivo = (req, res, next) => {
    upload(req, res, function (error) {
        if (error) {
            res.json({ mensaje: error });
        }
        return next();
    });
}

// añadir propiedad

exports.nuevaPropiedad = async (req, res, next) => {

    const { titulo, descripcion, precio, sector, direccion, area, banios, habitaciones, cod_referencia, tipoPropiedadId } = req.body;
    const estadoDisponible = 0;
    const img1 = "NULL";
    const img2 = "NULL";

    const resultado = await Propiedades.create({
        titulo,
        descripcion,
        precio,
        sector,
        direccion,
        area,
        banios,
        img1,
        img2,
        habitaciones,
        cod_referencia,
        estadoDisponible,
        tipoPropiedadId
    })
        .then(() => {
            console.log('Registro insertado con exito');
            res.send('Hola we, se registro');
        }).catch(error => console.log(error));

    if (!resultado) {
        next();
    }
}


// mostrar  todas las propiedades 
exports.mostrarPropiedades = async (req, res, next) => {
    const propiedades = await Propiedades.findAll();
    res.json(propiedades);
}

// mostrar propiedad especifica
exports.mostrarPropiedadId = async (req, res, next) => {
    const propiedad = await Propiedades.findOne({
        where: {
            id_propiedades: req.params.idPropiedad
        }
    });
    res.json(propiedad);
}

// filtros de busqueda
exports.filtrarPropiedades = async (req, res, next) => {
    try {
        // validar con titulo, area, tipo, rango precio y disponibilidad
        const { titulo, areamt, tipo_propiedad, rango_precio_1, rango_precio_2 } = req.body;
        const propiedades = await Propiedades.findAll({
            where: {
                titulo: {
                    [Op.substring]: titulo
                },
                area: {
                    [Op.gte]: areamt
                },
                tipoPropiedadId: tipo_propiedad,
                precio: {
                    [Op.between]: [rango_precio_1, rango_precio_2]
                }
            }
        });
        res.json(propiedades);
    } catch (error) {
        res.json({
            error: true,
            status: 400,
            mensaje: 'Something is wrong...'
        });
    }
}


exports.editarPropiedad = async (req, res, next) => {

    const { titulo, descripcion, precio, sector, direccion, area, banios, habitaciones, cod_referencia, tipoPropiedadId } = req.body;
    const estadoDisponible = 0;
    const img1 = "NULL";
    const img2 = "NULL";

    const resultado = await Propiedades.update(
        {
            titulo,
            descripcion,
            precio,
            sector,
            direccion,
            area,
            banios,
            img1,
            img2,
            habitaciones,
            cod_referencia,
            estadoDisponible,
            tipoPropiedadId
        },
        { where: { id_propiedades: req.params.idPropiedad } }
    )
        .then(() => {
            console.log('Registro actualizado con exito');
            res.send('Hola we, se actualizo');
        }).catch(error => console.log(error));

    if (!resultado) {
        next();
    }
}



exports.eliminarPropiedad = async (req, res, next) => {

    const { idPropiedad } = req.params;


    const resultado = await Propiedades.destroy({ where: { id_propiedades: idPropiedad } })
        .then(() => {
            console.log('Registro eliminado con exito');
            res.send('Hola we, se elimino');
        }).catch(error => console.log(error));

    if (!resultado) {
        next();
    }
}