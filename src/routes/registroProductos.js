const express = require('express');
const router = express.Router();

const ProductoCultivo = require('../models/RegistroProducto');

router.get('/:idUser/campos/:idCampo/cultivos/:idCultivo/registroproductos', async (req,res) => { //obtener registro productos de un cutlivo
    console.log("Obtener cultivos: " +JSON.stringify(req.params));
    //necestas el id del usuario - necesito req.params.idUser
    const cultivos = await ProductoCultivo.find({idCultivo: req.params.idCultivo});
    console.log("Cultivos --> " + cultivos);
    res.json(cultivos);
});

router.post('/:idUser/campos/:idCampo/cultivos/:idCultivo/registroproductos', async (req,res)=>{ //nos permite crar un nuevo registro de producto de un cultivo
    
    console.log("req.body --> " , JSON.stringify(req.body));
    const registroProducto = new ProductoCultivo(req.body);
    registroProducto.cultivoId = req.params.idCultivo;
    //cultivos.idCampo = req.params.idCampo;

    //necestas el id del usuario - necesito req.params.idUser
    //console.log("req.body --> " , req.body);
    //console.log("Cultivos() --> " + new Cultivos());
    const registroCreado = await registroProducto.save();
    res.json(registroCreado);
});

module.exports = router;