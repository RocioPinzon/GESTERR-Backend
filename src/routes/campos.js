const express = require('express');
const router = express.Router();

const Campos = require('../models/Campo');
//const User = require('../models/User');

router.get('/', async (req,res) => { //obtner camposde un usuaio almacenados

    //necestas el id del usuario - necesito req.params.idUser
    const campos = await Campos.find();
    console.log("campos --> " + campos);
    res.json(campos);
});



router.post('/', async (req,res)=>{ //nos permite guardar campos
    const campos = new Campos();
    
    //necestas el id del usuario - necesito req.params.idUser

    //console.log("req.body --> " , req.body);
    //console.log("Campos() --> " + new Campos());
    await campos.save();
    res.json({
        status: 'Campo creado'
    });
});

router.get('/:idCampo', async (req,res) => { //obtner campos almacenados
    const campos = await Campos.find();
    console.log("campos --> " + campos);
    res.json(campos);
});

router.put('/:idCampo',async (req,res)=>{
    
    await Campos.findByIdAndUpdate(req.params.idCampo, req.body);
    res.json({
        status: 'campo actualizada'
    });
});

router.delete('/:idCampo', async(req,res)=>{

    await Campos.findByIdAndDelete(req.params.id, req.body);
    res.json({
        status: 'campo eliminado'
    });
});

module.exports = router;