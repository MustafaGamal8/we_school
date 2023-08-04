const   mongoose  = require("mongoose");



const postSchema = mongoose.Schema({
  email:{
    type:String,
    required:true
  },
  content:{
    type:String,
    required:true
  },
  files:{
    type:Array,
  }

})


const postModel = mongoose.model("posts",postSchema)



module.exports = postModel;