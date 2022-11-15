const mongoose = require ('mongoose');
const bcrypt = require ('bcryptjs');

const { Schema } = mongoose;


const UserSchema = new Schema({
    name: {type: String, require:true},
    apellidos: {type: String, require:true,},
    username: {type: String, require:true,unique: true},
    email: {type: String, require:true,unique: true},
    password: {type: String, require:true},
    date: {type: Date, default: Date.now} 

});

UserSchema.methods.encryptPassword = async(password) => {
    
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password,salt);

    return hash;
};

UserSchema.methods.matchPassword = async function(password){
    
    return await bcrypt.compare(password, this.password);
};

var User = mongoose.model('User', UserSchema);

module.exports = User;