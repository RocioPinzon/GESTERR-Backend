const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');

router.get('/', async (req,res) => { //obtner producos de un cultivo almacenados

    //necestas el id del usuario - necesito req.params.idUser
    const users = await User.find();
    console.log("users --> " + users);
    res.json(users);
});

router.get('/:idUser', async (req,res) => { //obtner campos almacenados
    const user = await User.findById(req.params.idUser);
    console.log("user --> " + user);
    //res.json(campos);
    res.json(user);
});

module.exports = router;