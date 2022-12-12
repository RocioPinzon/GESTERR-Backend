const express = require('express');
const router = express.Router();

const ProductoCultivo = require('../models/RegistroProducto');

router.get('/:idUser/campos/:idCampo/cultivos/:idCultivo/registroproductos', async (req,res) => { //obtener registro productos de un cutlivo
    console.log("Obtener regsitros: " +JSON.stringify(req.params));
    //necestas el id del usuario - necesito req.params.idUser
    const registroproductos = await ProductoCultivo.find({cultivoId: req.params.idCultivo});
    console.log("registroproductos --> " + registroproductos);
    res.json(registroproductos);
});

router.post('/:idUser/campos/:idCampo/cultivos/:idCultivo/registroproductos', async (req,res)=>{ //nos permite crar un nuevo registro de producto de un cultivo
    
    console.log("req.body --> " , JSON.stringify(req.body));
    const registroProducto = new ProductoCultivo(req.body);
    registroProducto.cultivoId = req.params.idCultivo;
    registroProducto.productoId = req.body;

    //necestas el id del usuario - necesito req.params.idUser
    //console.log("req.body --> " , req.body);
    //console.log("Cultivos() --> " + new Cultivos());
    const registroCreado = await registroProducto.save();
    res.json(registroCreado);
});

router.delete('/:idUser/campos/:idCampo/cultivos/:idCultivo/registroproductos/:idRegistro', async(req,res)=>{

    const registroproducto = await ProductoCultivo.findByIdAndDelete(req.params.idRegistro, req.body);
    res.json(registroproducto);
});

module.exports = router;