
const mongoose = require ('mongoose');
const { Schema } = mongoose;

const ProductoSchema = new Schema({
    user:{type:String},
    cultivoId: {type: String},
    name: {type: String, require:true},
    cantidad: {type: String, require:true},
    precio:{type: Number, require:true},    
    fecha:{type: Date, default: Date.now}
});

var Producto = mongoose.model('Producto', ProductoSchema);

module.exports = Producto;
