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
    fileName:String,
    fileType: String, 
    fileLink: String ,
    fileSize:String,
  }],
  likes: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users', 
      },
    },
  ],

})


const postModel = mongoose.model("posts",postSchema)



module.exports = postModel;