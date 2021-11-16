const { update } = require('../model/users');
const users = require('../model/users');

module.exports = {
    async index(req,res){
        const user = await users.find();
        res.json(user);
    },
    async create(req,res){
        const {nome, sobrenome, email, senha, tipo} = req.body;
        let data = {};
        let user = await users.findOne({email});
        if(!user){
            data = {nome, sobrenome, email, senha, tipo};
            user = await users.create(data);
            return res.status(200).json(user);
        }else{
            return res.status(500).json(user);
        }
    },
    async details(req,res){
        const {_id} = req.params;
        const user = await users.findOne({_id})
        res.json(user);
    },
    async delete(req,res){
        const {_id} = req.params;
        const user = await users.findByIdAndDelete({_id})
        res.json(user); 
    },
    async update(req, res){
        const {_id, nome, sobrenome, email, senha, tipo} = req.body;
        const data = {nome, sobrenome, email, senha, tipo};
        const user = await users.findOneAndUpdate({_id}, data, {new:true});
        res.json(user)
    }
}