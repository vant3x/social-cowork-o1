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


router.get(
  "/propiedades",
  propiedadesController.mostrarPropiedades,
  authController.validarAuth
);


router.get(
  "/propiedades/:idPropiedad",
  propiedadesController.mostrarPropiedadId
);

router.delete('/eliminar-propiedad/:idPropiedad', 
    propiedadesController.eliminarPropiedad
);
//tipo propiedad
router.get("/tipo-propiedades", tipoPropiedadesController.mostrarTipoPropiedad);



router.post("/propiedades/filter", propiedadesController.filtrarPropiedades);
//router.get('/propiedades/filter/:query', propiedadesController.filtrarPropiedades);

// admin propiedades / reserva
router.post(
  "/propiedades/reserva/:idPropiedad",
  // authController.usuarioAutenticado,
  adminPropiedadesController.hacerReserva
);
 router.get('/historial-reserva', 
    adminPropiedadesController.historialReserva
 );   
    
 router.get('/historial-reserva/:idReserva', 
    adminPropiedadesController.historialReservaPropiedad
);   


router.get('/reservas/ganancias', adminPropiedadesController.historialReservaGananciasTotales);

module.exports = router;
