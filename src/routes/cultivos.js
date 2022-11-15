const express = require('express');
const router = express.Router();

const Cultivos = require('../models/Cultivo');
//const User = require('../models/User');

router.get('/:idUser/campos/:idCampo/cultivos', async (req,res) => { //obtner cultivos de un usuaio almacenados
    console.log("Obtener cultivos: " +JSON.stringify(req.params));
    //necestas el id del usuario - necesito req.params.idUser
    const cultivos = await Cultivos.find({idCampo: req.params.idCampo});
    console.log("Cultivos --> " + cultivos);
    res.json(cultivos);
});



router.post('/:idUser/campos/:idCampo/cultivos', async (req,res)=>{ //nos permite guardar campos
    
    console.log("req.body --> " , JSON.stringify(req.body));
    const cultivos = new Cultivos(req.body);
    cultivos.campo = req.body.idCampo;
    //necestas el id del usuario - necesito req.params.idUser
    //console.log("req.body --> " , req.body);
    //console.log("Cultivos() --> " + new Cultivos());
    const campoCreado = await cultivos.save();
    res.json(campoCreado);
});

router.get('/:idUser/campos/:idCampo/cultivos/:idCultivo', async (req,res) => { //obtner campos almacenados
    const cultivos = await Cultivos.find(req.params.idCultivo);
    console.log("cultivos --> " + cultivos);
    res.json(cultivos); 
});

router.put('/:idUser/campos/:idCampo/cultivos/:idCultivo',async (req,res)=>{
    
    const cultivos = await Cultivos.findByIdAndUpdate(req.params.idCultivo, req.body);
    res.json(cultivos);
});

router.delete('/:idUser/campos/:idCampo/cultivos/:idCultivo', async(req,res)=>{

    const cultivos = await Cultivos.findByIdAndDelete(req.params.idCultivo, req.body);
    res.json(cultivos);
});

module.exports = router;