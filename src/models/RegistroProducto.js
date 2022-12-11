const mongoose = require ('mongoose');
const { Schema } = mongoose;

const ProductoCultivoSchema = new Schema({
    cultivoId: {type: String},
    productoId: {type: String},
    estado:{type: String},
    fechaInicio: {type: Date, default: Date.now},
    fechaFin: {type: Date},
});

var ProductoCultivo = mongoose.model('ProductoCultivo', ProductoCultivoSchema);
module.exports = ProductoCultivo;
