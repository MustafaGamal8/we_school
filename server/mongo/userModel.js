const mongoose = require("mongoose");
const { bool } = require("yup");

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
    type:Boolean
  }
})


const UserModel = mongoose.model('users',userSchema)

module.exports = UserModel;