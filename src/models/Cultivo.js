const mongoose = require ('mongoose');
const { Schema } = mongoose;


const CultivoSchema = new Schema({
    user:{type:String},
    campoId: {type: String, require:true},
    nombre: {type: String, require:true},
    cantidad: {type: Number, require:true},
    date: {type: Date, default: Date.now},
});

const ProductoCultivoSchema = new Schema({
    idCultivo: {type: String},
    idProducto: {type: String},
    fechaInicio: {type: Date, default: Date.now},
    fechaFin: {type: Date},
});

var Cultivo = mongoose.model('Cultivo', CultivoSchema);
var ProductoCultivo = mongoose.model('ProductoCultivo', ProductoCultivoSchema);


module.exports = Cultivo,ProductoCultivo;
