const express = require('express');
const router = express.Router();

const Productos = require('../models/Producto');

router.get('/:idUser/productos', async (req,res) => { //obtener productos de un usuario
    console.log("Obtener campo: " +JSON.stringify(req.params));
    //necestas el id del usuario - necesito req.params.idUser
    const productos = await Productos.find({user: req.params.idUser});
    console.log("productos --> " + productos);
    res.json(productos);
});

router.post('/:idUser/productos', async (req,res)=>{ //nos permite guardar productos 
    console.log("req.body --> " , JSON.stringify(req.body));

    const productos = new Productos(req.body);
    productos.user = req.params.idUser;

    const productoCreado = await productos.save();
    res.json(productoCreado);
});

router.get('/:idUser/productos/:idProducto', async (req,res) => { //obtener datos de un producto almacenados
    
    const producto = await Productos.findById(req.params.idProducto);
    console.log("producto --> " + producto + " con ID " + req.params.idProducto);
    res.json(producto);
});

router.put('/:idUser/productos/:idProducto',async (req,res)=>{
    console.log("req.body --> " , JSON.stringify(req.body));

    const productoActualizado = await Productos.findByIdAndUpdate(req.params.idProducto, req.body);
    res.json(productoActualizado);
});

router.delete('/:idUser/productos/:idProducto', async(req,res)=>{

    const productoEliminado = await Productos.findByIdAndDelete(req.params.idProducto, req.body);
    res.json(productoEliminado);
});

module.exports = router;