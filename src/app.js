const express = require('express');
//const path  = require('path');
//const morgan  = require('morgan');
//const exphandle = require('express-handlebars');
//const methodOverride = require('method-override');
const expressSession = require('express-session');
//const flash = require("connect-flash");
const passport = require('passport');


// Initiliazations // 
const app = express();
require('./database');

// Settings // 
app.set('port', process.env.PORT || 3000);
app.set(express(express.json()));
//app.use(express.bodyParser());

//app.set('views', path.join(__dirname,'views'));

// app.engine('.hbs', exphandle.engine({
//     defaultLayout: 'main',
//     layoutsDir: path.join(app.get('views'),'layouts'),
//     partialsDir: path.join(app.get('views'),'partials'),
//     extname: '.hbs'
// }));
// app.set('view engine', '.hbs');

// Middlewares // 
//app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
//app.use(methodOverride('_method'));
app.use(expressSession({
    secret:'mySecretWord',
    resave:true,
    saveUninitialized:true
}));
app.use(passport.initialize());
app.use(passport.session());



// Global Variables  // 


// Routes // 
app.use('/user',require('./routes/users'));
app.use('/user',require('./routes/signin'));
app.use('/user/:idUser/productos',require('./routes/productos'));
app.use('/user/',require('./routes/campos'));
app.use('/user/:idUser/campos',require('./routes/cultivos'));

// Static files // 


//app.use(express.static(path.join(__dirname,'public')));

// Server is listenning  // 
app.listen(app.get('port'), () =>{
    console.log('Servidor en puerto', app.get('port'))
});

console.log("Bienvenido a GesTerr");