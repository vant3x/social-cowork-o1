const Propiedades = require("../models/Propiedades");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// mostrar  todas las propiedades
exports.mostrarPropiedades = async (req, res, next) => {
  const propiedades = await Propiedades.findAll();
  res.json(propiedades);
};

// mostrar propiedad especifica
exports.mostrarPropiedadId = async (req, res, next) => {
  const propiedad = await Propiedades.findOne({
    where: {
      id_propiedades: req.params.idPropiedad
    }
  });

  res.json(propiedad);
};

// filtros de busqueda
exports.filtrarPropiedades = async (req, res, next) => {
  try {
    // validar con titulo, area, tipo, rango precio y disponibilidad
    const {
      titulo,
      areamt,
      tipo_propiedad,
      rango_precio_1,
      rango_precio_2
    } = req.body;

    let tipoPropiedad = {};

    if (!tipo_propiedad) {
      const propiedades = await Propiedades.findAll({
        where: {
          titulo: {
            [Op.substring]: titulo
          },
          area: {
            [Op.gte]: areamt || 0
          },
          precio: {
            [Op.between]: [rango_precio_1 || 0, rango_precio_2 || 500000]
          }
        }
      });

      res.json(propiedades);
      console.log(propiedades.length);
    }

    if (tipo_propiedad !== null) {
      const propiedades = await Propiedades.findAll({
        where: {
          titulo: {
            [Op.substring]: titulo
          },
          area: {
            [Op.gte]: areamt || 0
          },
          tipoPropiedadId: tipo_propiedad,
          precio: {
            [Op.between]: [rango_precio_1 || 0, rango_precio_2 || 500000]
          }
        }
      });
      res.json(propiedades);
      console.log(propiedades.length);
    }
  } catch (error) {
    res.json({
      error: true,
      status: 400,
      mensaje: "Something is wrong..."
    });
  }
};
