const { Router } = require('express');
const router = Router();


const usuariosController = require('../controllers/usuariosController');
const authController = require('../controllers/authController');
const propiedadesController = require('./../controllers/propiedadesController');
const tipoPropiedadesController = require('../controllers/tipoPropiedadController');
const adminPropiedadesController = require('../controllers/adminPropiedadesController');



router.get('/', (req, res) => {
    res.render('funciona');
});

// usuarios

router.post('/signup', usuariosController.registrarUsuario);
router.post('/login', authController.autenticarUsuario, authController.msgAuth);
router.get('/logout', authController.cerrarSesion);
router.post('/restablecer-password', authController.enviarToken);
router.get('/restablecer/:token', authController.validarToken);
router.post('/restablecer/:token', authController.actualizarPassword);

// propieades 

router.post('/nueva-propiedad',
    propiedadesController.nuevaPropiedad,
    //   authController.usuarioAutenticado
);
router.get('/propiedades', propiedadesController.mostrarPropiedades);
router.get('/propiedades/:idPropiedad', propiedadesController.mostrarPropiedadId);
//tipo propiedad
router.get('/tipo-propiedades', tipoPropiedadesController.mostrarTipoPropiedad);
router.post('/editar-propiedad/:idPropiedad',
    propiedadesController.editarPropiedad,
    authController.usuarioAutenticado
);
router.post('/propiedades/filter', propiedadesController.filtrarPropiedades);
//router.get('/propiedades/filter/:query', propiedadesController.filtrarPropiedades);
router.delete('/eliminar-propiedad/:idPropiedad',
    propiedadesController.eliminarPropiedad,
    authController.usuarioAutenticado
);

// admin propiedades / reserva
router.post('/propiedades/reserva/:idPropiedad',
    // authController.usuarioAutenticado,
    adminPropiedadesController.hacerReserva);

module.exports = router;