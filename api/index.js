const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path =  require('path');
const routes = require('./routes/index');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash')
const passport = require('./auth/passport');
const app = express();
// require db
const db = require('./db/connect');

// modelos
require('./models/Roles');
require('./models/Usuarios');
require('./models/TipoPropiedad');
require('./models/Propiedades');
require('./models/Servicios');
require('./models/adminPropiedades');
require('./models/Transacciones');

db.sync()
    .then(() => console.log('Conectado al Servidor de la BD'))
    .catch(error => console.log(error));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('port', 5000 || process.env.PORT);

// middlewares
app.use(morgan('dev'));
app.use(cors()); // habilitar cors
//app.use(expressValidator());
app.use(cookieParser());

// sessiones nos permiten navegar entre distintas paginas sin volvernos a autenticar
app.use(session({ 
    secret: "keyboard cat", 
    resave: false, 
    saveUninitialized: false 
}));


app.use(passport.initialize());
app.use(passport.session());

//  flash messages
app.use(flash());
app.use((req, res, next) => {
    res.locals.mensajes = req.flash();
    res.locals.usuario = {...req.user} || null;
    next();
});

/// rutas
app.use('/',routes);

app.use(express.static('./uploads'));

app.listen(app.get('port'), () => {
    console.log(`El servidor está corriendo en el puerto ${app.get('port')}`);
});

//require('./handlers/emailHandler');