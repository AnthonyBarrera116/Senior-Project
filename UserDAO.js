const { Db } = require('mongodb');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Email: { type:String, alias:'email', required:true },
    Password: String,
    History: [],
 },
{ collection : 'Users' });

const userModel = mongoose.model('Users', userSchema);

exports.create = async function(newuser){
    const user = new userModel(newuser);
    await user.save();
    return user;
}

exports.findOne = async function(id){
    let user = await userModel.findOne({Email: id});

    return user;
}

exports.login = async function(email, password){
    let user = await userModel.findOne({Email:email, Password:password});
    return user;
}