const mongoose = require ('mongoose');
const { Schema } = mongoose;

const ProductoCultivoSchema = new Schema({
    cultivoId: {type: String},
    productoId: {type: String},
    fecha: {type: Date, default: Date.now},
});

var ProductoCultivo = mongoose.model('ProductoCultivo', ProductoCultivoSchema);
module.exports = ProductoCultivo;
