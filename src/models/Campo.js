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
    idCampo:{type:String}
});

const CampoTieneEstadosSchema = new Schema({
    idEstado:{type:String},
    idCampo:{type:String}
});


var Campo = mongoose.model('Campo', CampoSchema);
var CampoTieneEstados = mongoose.model('CampoTieneEstados', CampoTieneEstadosSchema);
var EstadosDeCampo = mongoose.model('EstadosDeCampo', EstadosDeCampoSchema);

//EXPORTADOS
module.exports = Campo,CampoTieneEstados,EstadosDeCampo;
//module.exports = CampoTieneEstados;
//module.exports = EstadosDeCampo;