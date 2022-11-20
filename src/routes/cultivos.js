const express = require('express');
const router = express.Router();

const Cultivos = require('../models/Cultivo');

router.get('/:idUser/campos/:idCampo/cultivos', async (req,res) => { //obtener cultivos de un campo
    console.log("Obtener cultivos: " +JSON.stringify(req.params));
    //necestas el id del usuario - necesito req.params.idUser
    const cultivos = await Cultivos.find({campoId: req.params.idCampo});
    console.log("Cultivos --> " + cultivos);
    res.json(cultivos);
});

router.post('/:idUser/campos/:idCampo/cultivos', async (req,res)=>{ //nos permite guardar cultivos
    
    console.log("req.body --> " , JSON.stringify(req.body));
    const cultivos = new Cultivos(req.body);
    cultivos.campoId = req.params.idCampo;
    cultivos.user = req.params.idUser;

    //necestas el id del usuario - necesito req.params.idUser
    //console.log("req.body --> " , req.body);
    //console.log("Cultivos() --> " + new Cultivos());
    const cultivoCreado = await cultivos.save();
    res.json(cultivoCreado);
});

router.get('/:idUser/campos/:idCampo/cultivos/:idCultivo', async (req,res) => { //obtner campos almacenados
    const cultivos = await Cultivos.findById(req.params.idCultivo);
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