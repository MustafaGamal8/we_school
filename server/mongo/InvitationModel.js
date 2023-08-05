const mongoose = require("mongoose");



const invitationCodeSchema = mongoose.Schema({
  code:{
    type:String,
    required:true
  },
  userType: {
    type: String,
    required: true,
    enum: ["student", "teacher"], // The userType can be either "student" or "teacher"
  },
})


 const  InvitationModel = mongoose.model("invitationCode",invitationCodeSchema) 

 module.exports = InvitationModel;