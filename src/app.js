/*
    REQUISITOS PRINCIPALES
*/
const express = require('express');
const app = express();

const morgan = require('morgan');
require('./database');

/*
    REQUISITOS SECUNDATIOS
*/
const expressSession = require('express-session');
const passport = require('passport');


// Initiliazations // 
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev')); //para ver las trazas de peticiones http
app.use(express.urlencoded({ extended: false }));
//OJO: las peticiones que se hagan tienen que tener en el header Content-Type:  application/json
app.use(express.json());


// Middlewares // 
app.use(expressSession({
    secret: 'mySecretWord',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


// Global Variables  // 


// Routes // 
app.use('/user', require('./routes/users'));
app.use('/user', require('./routes/signin'));
app.use('/user/:idUser/productos', require('./routes/productos'));
app.use('/user/', require('./routes/campos'));
app.use('/user/:idUser/campos', require('./routes/cultivos'));


// Server is listenning  // 
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto', app.get('port'))
});

console.log("Bienvenido a GesTerr");