
const mongoose = require ('mongoose');
const { Schema } = mongoose;

const ProductoSchema = new Schema({
    name: {type: String},
    cantidad: {type: String},
    user:{type:String},
    idCultivo: {type: String}
});


var Producto = mongoose.model('Producto', ProductoSchema);

module.exports = Producto;
