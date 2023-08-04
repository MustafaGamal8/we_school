const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
  contentType: String, // Store the content type (MIME type) of the file
});

// Create a Mongoose model based on the schema
const fileModel = mongoose.model('File', fileSchema);

module.exports = fileModel;
