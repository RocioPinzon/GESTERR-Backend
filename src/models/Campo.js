const mongoose = require ('mongoose');
const { Schema } = mongoose;

const CampoSchema = new Schema({
    name: {type: String, require:true},
    direccion: {type: String, require:true},
    hectareas: {type: Number, require:true},
    date: {type: Date, default: Date.now},
    user:{type:String}

});

const EstadosDeCampoSchema = new Schema({
    estado: {
        type: String,
        enum: ['SINCULTIVAR','CONCULTIVOS','BARBECHO'],
        default: 'SINCULTIVAR',
    },
});

const CampoTieneEstadosSchema = new Schema({
    idEstado:{type:String},
    idCampo:{type:String}

});

const CultivoSchema = new Schema({
    idCampo: {type: String, require:true},
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

const ProductoSchema = new Schema({
    name: {type: String},
    cantidad: {type: String},
});

var Campo = mongoose.model('Campo', CampoSchema);
var CampoTieneEstados = mongoose.model('CampoTieneEstados', CampoTieneEstadosSchema);
var EstadosDeCampo = mongoose.model('EstadosDeCampo', EstadosDeCampoSchema);
var Cultivo = mongoose.model('Cultivo', CultivoSchema);
var ProductoCultivo = mongoose.model('ProductoCultivo', ProductoCultivoSchema);
var Producto = mongoose.model('Producto', ProductoSchema);

module.exports = Campo;
module.exports = CampoTieneEstados;
module.exports = EstadosDeCampo;
module.exports = Cultivo;
module.exports = ProductoCultivo;
module.exports = Producto;