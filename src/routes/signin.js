const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');

const { isAuthenticated } = require('../helpers/auth');

//router.post('/signin', async (req, res) => {
    router.post('/signin', async (req, res) => {
  
    console.log("SIGNUP BODY: " + JSON.stringify(req.body));
    const { email, password } = req.body;
    const errors = [];

    if (!email || email.length <= 0) {
        errors.push({ error: 'El nombre no puede estar vacio.' });
    }
    if (!password || password.length <= 0) {
        errors.push({ error: 'La contraseña no puede estar vacia.' });
    }

    if (errors.length > 0) {
        res.status(400).json({ errors, email, password });
    } else {
        const usuarioEncontrado = await User.findOne({ email: email});
        if (!usuarioEncontrado) {

            res.status(400).json({ error: 'email o contraseña invalida' });
        } else {
            const pwValida = await usuarioEncontrado.matchPassword(password);
            if (`${pwValida}`==="true") {
                res.status(200).json({ userId: usuarioEncontrado.id, admin:usuarioEncontrado.admin});
            } else {   
                res.status(400).json({ error: 'email o contraseña invalidas' });
            }
        }
    }
});

router.post('/signup', async (req, res) => {
    console.log("SIGNUP BODY: " + JSON.stringify(req.body));
    const { name, apellidos, email, username, password, confirmPassword } = req.body;
    const errors = [];

    if (!name || name.length <= 0) {
        errors.push({ error: 'El nombre no puede estar vacio.' });
    }
    if (!apellidos || apellidos.length <= 0) {
        errors.push({ error: 'El apellidos no puede estar vacio.' });
    }
    if (!email || email.length <= 0) {
        errors.push({ error: 'El email no puede estar vacio.' });
    }
    if (!username || username.length <= 0) {
        errors.push({ error: 'El username no puede estar vacio.' });
    }
    if (!password || password.length <= 0) {
        errors.push({ error: 'La contraseña no puede estar vacia.' });
    }

    if (password != confirmPassword) {
        errors.push({ error: 'Las contraseñas no son iguales.' });
    }

    if (!password || password.length <= 7 ||password.length >= 15 ) {
        errors.push({ error: 'La contraseña debe tener al menos 7 caracteres.' });
    }
    if (errors.length > 0) {
        res.status(400).json({ errors, name, apellidos, email, username, password, confirmPassword });
    } else {
        const emailUser = await User.findOne({ email: email });
        if (emailUser) {
            res.status(400).json({ error: 'El email ya está en uso' });
        } else {
            const newUser = new User({ name, apellidos, email, username, password });
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            res.status(200).json({ msg: 'Estás registrado' });
        }
    }
});

module.exports = router;