const   mongoose  = require("mongoose");



const postSchema = mongoose.Schema({
  user:{
    type:Object,
    required:true
  },
  content:{
    type:String,
    required:true
  },
  files:[{
    fileType: String, 
    fileLink: String 
  }]

})


const postModel = mongoose.model("posts",postSchema)



module.exports = postModel;