const fileModel = require("../mongo/fileModel.js");
const postModel = require("../mongo/postModel.js");

const uploadFile = async (req, res) => {

  try {

    const postFields = {
      email: req.body.email,
      content: req.body.content,
    };

    if (!req.files || req.files.length === 0) {
      uploadPost(postFields)
      res.status(200).json({ msg: 'post created successfully' });
      return 
    }

    const fileIds = []; // Array to store the file IDs for the post

    for (const file of req.files) {
      const { originalname, buffer, mimetype } = file;

      const newFile = new fileModel({
        name: originalname,
        data: buffer,
        contentType: mimetype,
      });

      await newFile.save();
      fileIds.push({type:mimetype,link:`/files/${newFile._id}`}); // Store the file ID in the array
    }
    
    await uploadPost(postFields, fileIds);

    res.status(200).json({ msg: 'post created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create post' });
  }
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


const uploadPost = async (postFields, fileId) => {
  try {
    const { email, content } = postFields;

    const post = new postModel({
      email,
      content,
      files: fileId, // Assign the file ID to the 'files' field as an array
    });

    await post.save();
    
  } catch (error) {
    throw error;
  }
};

const readAllPosts = async (res)=>{
  try {
    const posts = await postModel.find()
    
    res.status(200).json(posts);

  } catch (error) {
    res.status(500).json({ error: 'Failed to get posts' });
  }


}

// not needed !!!!!!!!!
const readAllFiles = async (res) => {
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








module.exports = { uploadFile, readAllFiles, readFile , readAllPosts };
