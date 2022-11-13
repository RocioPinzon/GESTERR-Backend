const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');

/*
// SIGNIN //
router.get('/signin', (req,res) => {
    res.render('users/signin');
});

router.post('/signin', passport.authenticate("local", {
    successRedirect:'/users',
    failureRedirect:'/users/signin',
    failureFlash:true
}));


// SIGNUP //
router.get('/signup', (req,res) => {
    res.render('users/signup');
});*/

router.post('/signup', async(req,res) =>{
    console.log("SIGNUP BODY: " + JSON.stringify(req.body));
    const {name,email,password, confirmPassword} = req.body;
    const errors = [];
    
    if(!name || name.length<=0){
        errors.push({text:'El nombre no puede estar vacio.'});
    }
    
    if(!password || password.length<=0){
        errors.push({text:'La contraseña no puede estar vacia.'});
    }

    if(password!=confirmPassword){
        errors.push({text:'Las contraseñas no son iguales.'});
    }

    if(!password || password.length < 4){
        errors.push({text:'La contraseña debe tener al menos 4 caracteres.'});
    }
    if(errors.length > 0){
        res.json({errors,name, email, password, confirmPassword});
    }else{
        const emailUser = await User.findOne({email: email});
        if(emailUser){
            req.flash('error_msg','El email ya está en uso');
        } 
        
        const newUser = new User({name, email, password});
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        req.flash('success_msg','Estás registrado');
    }
});

/*
router.get("/logout", (req, res) => {
    req.logout(req.user, err => {
      if(err) return next(err);
      res.redirect("/");
    });
  });
*/
module.exports = router;