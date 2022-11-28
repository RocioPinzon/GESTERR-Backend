const express = require('express');
const router = express.Router();

const Campos = require('../models/Campo');

const { isAuthenticated } = require('../helpers/auth');

router.get('/:idUser/campos', async (req,res) => { //obtner campos de un usuaio almacenados
    console.log("Obtener campo: " +JSON.stringify(req.params));
    //necestas el id del usuario - necesito req.params.idUser
    const campos = await Campos.find({user:req.params.idUser});
    console.log("campos --> " + campos);
    res.json(campos);
}); 

router.post('/:idUser/campos', async (req,res)=>{ //nos permite guardar campos
    console.log("req.body --> " , JSON.stringify(req.body));

    const campos = new Campos(req.body);
    campos.user = req.params.idUser;

    const campoCreado = await campos.save();
    res.json(campoCreado);
});

router.get('/:idUser/campos/:idCampo', async (req,res) => { //obtener un campo (ID)
    console.log(req.params);
    const campos = await Campos.findById(req.params.idCampo);
    console.log("campos --> " + campos);
    res.json(campos);
});

router.put('/:idUser/campos/:idCampo',async (req,res)=>{
    console.log("req.body --> " , JSON.stringify(req.body));

    const campo = await Campos.findByIdAndUpdate(req.params.idCampo, req.body);
    res.json(campo);
});

router.delete('/:idUser/campos/:idCampo', async(req,res)=>{
    console.log("req.params --> " , JSON.stringify(req.params));

    const campo = await Campos.findByIdAndDelete(req.params.idCampo, req.body);
    res.json(campo);
});

module.exports = router;