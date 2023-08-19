const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
  contentType: String, 
  fileSize:String,
});

// Create a Mongoose model based on the schema
const fileModel = mongoose.model('File', fileSchema);

module.exports = fileModel;
