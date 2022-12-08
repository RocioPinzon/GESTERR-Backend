const mongoose = require ('mongoose');
const { Schema } = mongoose;

const CampoSchema = new Schema({
    name: {type: String, require:true},
    direccion: {type: String, require:true},
    hectareas: {type: Number, require:true},
    date: {type: Date, default: Date.now},
    estadoCampos: {type: String},
    user:{type:String},
    provincia:{type:String},
    estado: {type:String},
});

var Campo = mongoose.model('Campo', CampoSchema);

//EXPORTADOS
module.exports = Campo;
//module.exports = CampoTieneEstados;
//module.exports = EstadosDeCampo;