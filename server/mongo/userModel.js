const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id:{
    type:Number,
  },
  firstName:{
      type:String,
      required:true
  },
  lastName:{
      type:String,
      required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  role:{
    type:String,
    required:true
  },
  isConfirmed:{
    type:Boolean,
    required:true
  },
  confirmationToken: {
    type: String,
  }
})


const UserModel = mongoose.model('users',userSchema)

module.exports = UserModel;