const { Router } = require("express");
const router = Router();

const usuariosController = require("../controllers/usuariosController");
const authController = require("../controllers/authController");
const propiedadesController = require("./../controllers/propiedadesController");
const tipoPropiedadesController = require("../controllers/tipoPropiedadController");
const adminPropiedadesController = require("../controllers/adminPropiedadesController");

router.get("/", (req, res) => {
  res.send("funciona");
});

router.get("/authValidate", authController.validarAuth);

// usuarios
router.post("/signup", usuariosController.registrarUsuario);
router.post("/login", authController.autenticarUsuario);
router.get("/logout", authController.cerrarSesion);
router.post("/restablecer-password", authController.enviarToken);
router.get("/restablecer/:token", authController.validarToken);
router.post("/restablecer/:token", authController.actualizarPassword);

<<<<<<< HEAD
// propieades 
router.post('/nueva-propiedad', 
    propiedadesController.nuevaPropiedad,
    propiedadesController.subirArchivo,
    authController.usuarioAutenticado
=======
router.get(
  "/propiedades",
  propiedadesController.mostrarPropiedades,
  authController.validarAuth
);
router.get(
  "/propiedades/:idPropiedad",
  propiedadesController.mostrarPropiedadId
>>>>>>> 76f4da14c2f6ce9d8715dc8d8b5473e14132e841
);
//tipo propiedad
<<<<<<< HEAD
router.get('/tipo-propiedades', tipoPropiedadesController.mostrarTipoPropiedad);
router.post('/editar-propiedad/:idPropiedad', 
    propiedadesController.editarPropiedad,
    propiedadesController.subirArchivo,
    authController.usuarioAutenticado
); 
router.post('/propiedades/filter', propiedadesController.filtrarPropiedades);
=======
router.get("/tipo-propiedades", tipoPropiedadesController.mostrarTipoPropiedad);

router.post("/propiedades/filter", propiedadesController.filtrarPropiedades);
>>>>>>> 76f4da14c2f6ce9d8715dc8d8b5473e14132e841
//router.get('/propiedades/filter/:query', propiedadesController.filtrarPropiedades);

// admin propiedades / reserva
<<<<<<< HEAD
router.post('/propiedades/reserva/:idPropiedad', 
   // authController.usuarioAutenticado,
    adminPropiedadesController.hacerReserva);

 
 router.get('/historial-reserva', 
    adminPropiedadesController.historialReserva
 );   
    
 router.get('/historial-reserva/:idPropiedad', 
    adminPropiedadesController.historialReservaPropiedad
);   
module.exports = router;
=======
router.post(
  "/propiedades/reserva/:idPropiedad",
  // authController.usuarioAutenticado,
  adminPropiedadesController.hacerReserva
);
module.exports = router;
>>>>>>> 76f4da14c2f6ce9d8715dc8d8b5473e14132e841
