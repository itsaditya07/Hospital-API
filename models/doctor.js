const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter your name"],
    },
    email:{
        type: String,
        required: [true, "Please enter your Email"],
    },
    password:{
        type: String,
        required: [true, "Please enter your Password"],
    }
});

const Doctor =new mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;