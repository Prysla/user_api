
const mongoose  =require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    date_of_birth:Date,
    gender:String,
    email:String,
    Phone_no:Number,
    isCompletedSchool:Boolean,
})

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;