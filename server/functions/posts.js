const fileModel = require("../mongo/fileModel.js");
const postModel = require("../mongo/postModel.js");
const UserModel = require("../mongo/userModel.js");




const createPost = async (postFields, files) => {
  try {
    const { user, content } = postFields;
    const {firstName,lastName,email,role,picture} = user
 
    const post = new postModel({
      user:{
        firstName,
        lastName,
        email,
        role,
        picture
      } ,
      content,
      files,
      likes: [], 
    });

    await post.save();
  } catch (error) {
    throw error;
  }
};

const uploadAndCreatePost = async (req, res) => {
  try {
    
    const  user =   await UserModel.findOne({ email:req.body.email });

    const postFields = {
      user: user,
      content: req.body.content,
    };

     
    if (!user) {
      return res.json({ error: 'Email dose not exist ' })
    }  
    if (user.role != "admin"| "teacher") {
      return res.json({ error: 'You are not allowed to post ' })
    }  



    const fileIds = [];

    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const { originalname, buffer, mimetype} = file;
        
    const fileSizeInBytes = buffer.length;
    const fileSizeInMB = fileSizeInBytes / (1024 * 1024); 
    const fileSize = fileSizeInMB.toFixed(2) + "Mb";

        
        const fileId = await uploadFile(buffer, originalname, mimetype,fileSize);
        fileIds.push({  fileName:originalname,fileSize,fileType: mimetype, fileLink: `/files/${fileId}` });
      }
    }

    await createPost(postFields, fileIds);

    res.status(200).json({ msg: 'post created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create post' });
  }
};

const readAllPosts = async (req,res)=>{
  try {
    const posts = await postModel.find()
    
    res.status(200).json(posts);

  } catch (error) {
    res.status(500).json({ error: 'Failed to get posts' });
  }


}



const togglePostLike = async (req, res) => {
  try {
    const { postId, userId } = req.body;

    const post = await postModel.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const likeIndex = post.likes.findIndex((like) => like.userId.toString() === userId);

    if (likeIndex === -1) {
      post.likes.push({ userId });
      await post.save();
      res.status(200).json({ msg: 'Post like added successfully' });
    } else {
      post.likes.splice(likeIndex, 1);
      await post.save();
      res.status(200).json({ msg: 'Post like removed successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};








const uploadFile = async (buffer, originalname, mimetype,fileSize) => {
  const newFile = new fileModel({
    name: originalname,
    data: buffer,
    contentType: mimetype,
    fileSize
  });

  await newFile.save();
  return newFile._id; // Return the file ID
};

const readFile = async (req, res) => {
  try {
    const fileId = req.params.id;
    const file = await fileModel.findById(fileId);

    if (!file) {
      return res.status(404).json({ error: 'File not found' });
    }

    res.set('Content-Type', file.contentType); // Set the content type for the file response
    res.send(file.data); // Send the file data as the response
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to get file' });
  }
};

const readAllFiles = async (req,res) => {
  try {
    const files = await fileModel.find({}, 'name contentType');

    if (files.length === 0) {
      return res.status(404).json({ message: 'No files found' });
    }

    // Map the files to add a download link to each file
    const filesWithLinks = files.map((file) => ({
      name: file.name,
      contentType: file.contentType,
      Link: `/files/${file._id}`, // Construct the download link using the file ID
    }));

    res.status(200).json(filesWithLinks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to get files' });
  }
};










module.exports = { uploadFile, readAllFiles, readFile , readAllPosts , uploadAndCreatePost,togglePostLike };
