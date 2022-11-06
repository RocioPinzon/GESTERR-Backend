const express = require('express');
const path  = require('path');
const morgan  = require('morgan');

// Initiliazations // 
const app = express();
require('./database');

// Settings // 
app.set('port', process.env.PORT || 3000);
app.set(express(express.json()));


// Middlewares // 
app.use(morgan('dev'));



// Global Variables  // 


// Routes // 


// Static files // 


app.use(express.static(path.join(__dirname,'public')));

// Server is listenning  // 
app.listen(app.get('port'), () =>{
    console.log('Servidor en puerto', app.get('port'))
});

console.log("Bienvenido a GesTerr");