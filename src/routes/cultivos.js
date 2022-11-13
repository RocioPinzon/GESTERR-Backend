const express = require('express');
const router = express.Router();

const Cultivos = require('../models/Cultivo');
//const User = require('../models/User');

router.get('/:idCampo/cultivos', async (req,res) => { //obtner cultivos de un usuaio almacenados

    //necestas el id del usuario - necesito req.params.idUser
    const cultivos = await Cultivos.find({idCampo: req.params.idCampo});
    console.log("Cultivos --> " + cultivos);
    res.json(cultivos);
});



router.post('/:idCampo/cultivos', async (req,res)=>{ //nos permite guardar campos
    const cultivos = new Cultivos();
    
    //necestas el id del usuario - necesito req.params.idUser

    //console.log("req.body --> " , req.body);
    //console.log("Cultivos() --> " + new Cultivos());
    await cultivos.save();
    res.json({
        status: 'Cultivo creado'
    });
});

router.get('/:idCampo/cultivos/:idCultivo', async (req,res) => { //obtner campos almacenados
    const cultivos = await Cultivos.find();
    console.log("cultivos --> " + cultivos);
    res.json(cultivos);
});

router.put('/:idCampo/cultivos/:idCultivo',async (req,res)=>{
    
    await Cultivos.findByIdAndUpdate(req.params.idCultivo, req.body);
    res.json({
        status: 'Cultivo actualizada'
    });
});

router.delete('/:idCampo/cultivos/:idCultivo', async(req,res)=>{

    await Cultivos.findByIdAndDelete(req.params.id, req.body);
    res.json({
        status: 'Cultivo eliminado'
    });
});

module.exports = router;