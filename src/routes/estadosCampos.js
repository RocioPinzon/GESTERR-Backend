const express = require('express');
const router = express.Router();

const EstadosCampo = require('../models/EstadosCampo');

router.get('/:idUser/campos/:idCampo/estados', async (req,res) => { //obtener estado de un campo
    console.log("Obtener estados: " +JSON.stringify(req.params));
    //necestas el id del usuario - necesito req.params.idUser
    const estadosDeCampo = await EstadosCampo.find({idCampo: req.params.idCampo});
    console.log("EstadosDeCampo --> " + estadosDeCampo);
    res.json(estadosDeCampo);
});


module.exports = router;