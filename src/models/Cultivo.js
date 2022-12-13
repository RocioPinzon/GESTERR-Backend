const mongoose = require ('mongoose');
const { Schema } = mongoose;

const CultivoSchema = new Schema({
    user:{type:String},
    campoId: {type: String, require:true},
    nombre: {type: String, require:true},
    cantidad: {type: Number, require:true},
    hectareas: {type: Number, require:true},
    estado: {type: String, require:true},
    date: {type: Date, default: Date.now},
});



var Cultivo = mongoose.model('Cultivo', CultivoSchema);


module.exports = Cultivo;
