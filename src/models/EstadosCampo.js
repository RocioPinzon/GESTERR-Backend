const mongoose = require ('mongoose');
const { Schema } = mongoose;

const EstadosDeCampoSchema = new Schema({
    estado: {
        type: String,
        enum: ['SINCULTIVAR','CONCULTIVOS','BARBECHO'],
        default: 'SINCULTIVAR',
    },
    campoId:{type:String}
});

const CampoTieneEstadosSchema = new Schema({
    idEstado:{type:String},
    campoId:{type:String}
});

var EstadosDeCampo = mongoose.model('EstadosDeCampo', EstadosDeCampoSchema);
var CampoTieneEstados = mongoose.model('CampoTieneEstados', CampoTieneEstadosSchema);

//EXPORTADOS
module.exports = EstadosDeCampo,CampoTieneEstados;