const Usuarios = require('./../models/Usuarios');

exports.registrarUsuario = async (req, res, next) => {
    const fecha1 = Date.now();
    const ultima_sesion = new Date();

    const {email, password, roleId } = req.body;
    const nombre = "null";
    const apellido = "null";
    const direccion = "null";
    const estado_usuario = 1;
    const ciudad = "null";
    try {
        const usuario = await Usuarios.create({
            nombre,
            apellido,
            email,
            password,
            ciudad,
            direccion,
            fecha1,
            ultima_sesion,
            estado_usuario,
            roleId
        })
            console.log('Usuario registrado exitosamente');
            res.json({mensaje: 'Usuario registrado con exito'});
    } catch(error) {
        res.json({mensaje:'No se registró :('})
        console.log(error);
    }

}




