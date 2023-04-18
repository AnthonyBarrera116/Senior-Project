// Call DBConnection on the Server.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Email: { type:String, alias:'email', required:true },
    password: String,
    history: []
});

const userModel = mongoose.model('user',userSchema);



exports.read = async function(id){
    let user = await userModel.findById(id);
    return user;
}

exports.create = async function(newuser){
    const user = new userModel(newuser);
    await user.save();
    return user;
}

exports.update = async function(upUser){
    const update = userModel.updateOne({Email: upUser.Email}, { $set: {history:upUser.history}}) 
    let user = await userModel.findOne({Email: upUser.Email});
    return user;
}

exports.login = async function(plogin, pwd){
    let user = await userModel.findOne({login:plogin, password:pwd});
    return user;
}

exports.find = async function(em){
    let user = await userModel.findOne({Email: em});
    return user;
}

exports.deleteAll = async function(){
    await userModel.deleteMany();
}

exports.update = async function(user){
    let userr = await userModel.updateOne({Email: user.Email},{$set:{history: user.history}});
    return userr;
}