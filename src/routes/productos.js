const express = require('express');
const router = express.Router();

const Productos = require('../models/Producto');

router.get('/', async (req,res) => { //obtner producos de un cultivo almacenados

    //necestas el id del usuario - necesito req.params.idUser
    const productos = await Productos.find();
    console.log("productos --> " + productos);
    res.json(productos);
});



router.post('/', async (req,res)=>{ //nos permite guardar campos
    
    //necestas el id del usuario - necesito req.params.idUser
    const productos = new Productos();

    //console.log("req.body --> " , req.body);
    //console.log("Productos() --> " + new Productos());
    await productos.save();
    res.json({
        status: 'producto creado'
    });
});

router.get('/:idProducto', async (req,res) => { //obtner campos almacenados
    const productos = await Productos.find();
    console.log("productos --> " + productos);
    res.json(productos);
});

router.put('/:idProducto',async (req,res)=>{
    
    await Productos.findByIdAndUpdate(req.params.idProducto, req.body);
    res.json({
        status: 'producto actualizada'
    });
});

router.delete('/:idProducto', async(req,res)=>{

    await Productos.findByIdAndDelete(req.params.id, req.body);
    res.json({
        status: 'producto eliminado'
    });
});

module.exports = router;