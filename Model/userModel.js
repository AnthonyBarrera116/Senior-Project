const { Db } = require('mongodb');
const mongoose = require('mongoose');

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    History: [],
  });

 const questionModel = mongoose.model('Users', userSchema);

 exports.create = async function(question){
    const mongoQuestion = new questionModel(question);
    await mongoQuestion.save();
    return await exports.read(mongoQuestion._id);
    //Used the read function because in tests it kept returning the _id in the beginning rather than end
 }
 