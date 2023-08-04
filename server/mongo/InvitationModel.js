const mongoose = require("mongoose");



const invitationCodeSchema = mongoose.Schema({
  code:{
    type:String,
    required:true
  }
})


 const  InvitationModel = mongoose.model("invitationCode",invitationCodeSchema) 

 module.exports = InvitationModel;