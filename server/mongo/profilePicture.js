const mongoose = require("mongoose");

const profilePictureSchema = new mongoose.Schema({
  name: String,
  for:String,
  data: Buffer,
  fileSize:String,
  link:String
});

// Create a Mongoose model based on the schema
const profilePictureModel = mongoose.model('profilePictures', profilePictureSchema);

module.exports = profilePictureModel;
