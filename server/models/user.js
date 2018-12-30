var mongoose = require('mongoose');

var User = mongoose.model('User',{
    name:{
        type:String,
        required: true,
        minlenght:1
    },
    mobileNumber:{
        type:String,
        required:true,
        maxlength:10,
        minlength:10
    },
    password:{
        type:String,
        required:true,
        bcrypt:true
    },
    status:{
        type:Boolean,
        default:false
    }
});

module.exports = {
    User
};