const express = require('express');
const path  = require('path');
const morgan  = require('morgan');
const exphandle = require('express-handlebars');
const methodOverride = require('method-override');
const expressSession = require('express-session');
const flash = require("connect-flash");
const passport = require('passport');


// Initiliazations // 
const app = express();
require('./database');

// Settings // 
app.set('port', process.env.PORT || 3000);
app.set(express(express.json()));


// Middlewares // 
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(expressSession({
    secret:'mySecretWord',
    resave:true,
    saveUninitialized:true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


// Global Variables  // 


// Routes // 


// Static files // 


app.use(express.static(path.join(__dirname,'public')));

// Server is listenning  // 
app.listen(app.get('port'), () =>{
    console.log('Servidor en puerto', app.get('port'))
});

console.log("Bienvenido a GesTerr");