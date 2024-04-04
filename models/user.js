let mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name : {type : String, required : true},
    username : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true},
    age :  {type : Number, default : 0}
});

UserSchema.pre('save', function(next){
    console.log("Pre hook executed before save operation !");
    next();
});

const User = mongoose.model("User", UserSchema);/*Creating User constructor from Schema and this User inside bracket is the
                                                    name of the collection and but in mongodb it will be written in 
                                                    small letters followed by s - users*/

module.exports = User;