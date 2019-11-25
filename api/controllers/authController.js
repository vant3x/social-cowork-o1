const passport = require('passport');
const Usuarios = require('./../models/Usuarios');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const crypto = require('crypto');

exports.autenticarUsuario = passport.authenticate('local', {
    successRedirect: '/', 
    failureFlash : true,
    badRequestMessage: 'Ambos Campos son Obligatorios'
});

// Función para revisar si el usuario esta logueado o no
exports.usuarioAutenticado = (req, res, next) => {

    // si el usuario esta autenticado, adelante
    if(req.isAuthenticated()) {
        return next();
    }
    // sino esta autenticado, redirigir al formulario
    return res.redirect('/login');
}

exports.validarAuth = (req, res) => {
    const auth = req.isAuthenticated();
    res.json(auth);
    console.log(auth)
}



// función para cerrar sesión
exports.cerrarSesion = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/iniciar-sesion'); // al cerrar sesión nos lleva al login
    })
}

// enviar token reestablecer password
// genera el token si el usuario es valido
exports.enviarToken =  async (req, res) => {
    // verificar que el usuario existe
    const usuario = await Usuarios.findOne({where: { email: req.body.email }});
    // si no existe el usuario
    if (!usuario) {
        res.json({mensaje: 'El usuario no se encontró'});
    }
    // usuario existe
    usuario.token = crypto.randomBytes(12).toString('hex');
    // expira en 1 hora
    usuario.expiracionToken = Date.now() + 3600000;

    // guardarlos en la base de datos
    await usuario.save();

    // url de reset
    const resetUrl = `http://${req.headers.host}/reestablecer/${usuario.token}`;
} 

exports.validarToken = async (req, res) => {
   // res.json(req.params.token);
   const usuario = await Usuarios.findOne({
       where: {
           token: req.params.token
       }
   });

   // si no encuentra el usuario
   if (!usuario) {
       console.log('Usuario no valido');
   }

   // generar nueva password form

}

exports.actualizarPassword = async (req, res) => {
    // verifica el token valido y la fech de expiracion
    const usuario = await findOne({
        where: {
            token: req.params.token,
            expiracionToken: {
                [Op.gte]: Date.now()
            }
        }
    });

    // verificamos si el usuario existe
    if (!usuario) {
        console.log('error, no valido');
    }

    // hashear el nuevo password
    usuario.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    usuario.token = null;
    usuario.expiracionToken = null;

    // guardar
    await usuario.save();
    console.log('Correcto, password actualizado');
}