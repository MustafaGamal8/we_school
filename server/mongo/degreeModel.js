const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  finalDegree: {
    type: Number,
    required: true
  },
  studentDegree: {
    type: Number,
    required: true
  },
  taqdeer: {
    type: String,
  }
});

const degreesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  subjects: [subjectSchema],
});

const DegreesModel = mongoose.model("Degrees", degreesSchema);

module.exports = DegreesModel;
