
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  user:{
    type:Object,
    required:true
  },
  task:{
    type:String,
    required:true
  },
  grade:{
    type:String,
    required:true
  },
  endDate:{
    type:String,
    required:true
  }
});

const taskModel = mongoose.model('tasks', taskSchema);

module.exports = taskModel;
