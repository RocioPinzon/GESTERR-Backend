const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');

router.get('/', async (req,res) => {

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

router.put('/:idUser', async (req,res) => { //actualizar campos almacenados
    console.log("req.body --> " , JSON.stringify(req.body));
    const userActualizado = await User.findByIdAndUpdate(req.params.idUser, req.body);

    console.log("userActualizado --> " + userActualizado);
    //res.json(campos);
    res.json(userActualizado);
});
router.delete('/:idUser', async(req,res)=>{

    const userEliminado = await User.findByIdAndDelete(req.params.idUser, req.body);
    //DEBO eliminar los campos y cultivos asociados al usuario?
    //const camposEliminados = await User.findByIdAndDelete(req.params.idUser, req.body);
    res.json(userEliminado);
});

module.exports = router;