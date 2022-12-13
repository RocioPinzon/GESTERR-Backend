const express = require('express');
const router = express.Router();

const Productos = require('../models/Producto');

router.get('/:idUser/productos', async (req,res) => { //obtener todos los productos de un usuario
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

router.get('/:idUser/productos/:idProducto', async (req,res) => { //obtener datos de un producto almacenado
    
    const producto = await Productos.findById(req.params.idProducto);
    console.log("producto --> " + producto + " con ID " + req.params.idProducto);
    res.json(producto);
});

router.put('/:idUser/productos/:idProducto',async (req,res)=>{//Editar un producto
    console.log("req.body --> " , JSON.stringify(req.body));

    const productoActualizado = await Productos.findByIdAndUpdate(req.params.idProducto, req.body);
    res.json(productoActualizado);
});

router.delete('/:idUser/productos/:idProducto', async(req,res)=>{ //Eliminar un producto

    const productoEliminado = await Productos.findByIdAndDelete(req.params.idProducto, req.body);
    res.json(productoEliminado);
});


//   PRODUCTOS ASOCIADOS A CULTIVOS
router.get('/:idUser/campos/:idCampo/cultivos/:idCultivo/productos', async (req,res)=>{ //nos permite obtener productos de un cultivo
    console.log("req.body --> " , JSON.stringify(req.body));

    const productos = await Productos.find({cultivoId: req.params.idCultivo});
    console.log("productos --> " + productos);
    res.json(productos);
});

router.post('/:idUser/campos/:idCampo/cultivos/:idCultivo/productos', async (req,res)=>{ //nos guardar un producto a un cultivo
    console.log("req.body --> " , JSON.stringify(req.body));

    const productos = new Productos(req.body);
    productos.user = req.params.idUser;
    productos.cultivoId = req.params.idCultivo;

    const productoCreado = await productos.save();
    res.json(productoCreado);
});

router.get('/:idUser/campos/:idCampo/cultivos/:idCultivo/productos/:idProducto', async (req,res) => { //obtener datos de un producto almacenado
    
    const producto = await Productos.findById(req.params.idCultivo);
    console.log("producto --> " + producto + " con ID " + req.params.idProducto);
    res.json(producto);
});


router.put('/:idUser/campos/:idCampo/cultivos/:idCultivo/productos/:idProducto',async (req,res)=>{//Editar un producto
    console.log("req.body --> " , JSON.stringify(req.body));
    
    const productoActualizado = await Productos.findByIdAndUpdate(req.params.idProducto, req.body);
    res.json(productoActualizado);
});

router.delete('/:idUser/campos/:idCampo/cultivos/:idCultivo/productos/:idProducto', async(req,res)=>{ //Eliminar un producto

    const productoEliminado = await Productos.findByIdAndDelete(req.params.idProducto, req.body);
    res.json(productoEliminado);
});

//  FIN PRODUCTOS ASOCIADOS A CULTIVOS

module.exports = router;