
const mongoose = require ('mongoose');
const { Schema } = mongoose;

const ProductoSchema = new Schema({
    name: {type: String},
    cantidad: {type: String},
    user:{type:String},
    cultivoId: {type: String},
    precio:{type: Number}
});


var Producto = mongoose.model('Producto', ProductoSchema);

module.exports = Producto;
