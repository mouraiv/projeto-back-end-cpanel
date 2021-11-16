const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const dataSchema = new mongoose.Schema({
    nome:String,
    sobrenome:String,
    email:String,
    senha:String,
    tipo:{type:Number, default:1}
},{
    timestamps:true
});

dataSchema.pre('save',function(next){
    if(!this.isModified("senha")){
        return next();
    }
    this.senha = bcrypt.hashSync(this.senha,10);
    next();
});

dataSchema.pre('findOneAndUpdate',function(next){
    var password = this.getUpdate().senha.toString();
    if(password.length < 55){
        this.getUpdate().senha = bcrypt.hashSync(password,10)
    }
    next();
});

const users = mongoose.model('users', dataSchema);
module.exports = users;