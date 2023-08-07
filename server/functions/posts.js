const fileModel = require("../mongo/fileModel.js");
const postModel = require("../mongo/postModel.js");


const uploadFile = async (buffer, originalname, mimetype) => {
  const newFile = new fileModel({
    name: originalname,
    data: buffer,
    contentType: mimetype,
  });

  await newFile.save();
  return newFile._id; // Return the file ID
};

const createPost = async (postFields, fileIds) => {
  try {
    const { email, content } = postFields;

    const post = new postModel({
      email,
      content,
      files: fileIds,
    });

    await post.save();
  } catch (error) {
    throw error;
  }
};

const uploadAndCreatePost = async (req, res) => {
  try {
    const postFields = {
      email: req.body.email,
      content: req.body.content,
    };

    const fileIds = [];

    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const { originalname, buffer, mimetype } = file;
        const fileId = await uploadFile(buffer, originalname, mimetype);
        fileIds.push({ type: mimetype, link: `/files/${fileId}` });
      }
    }

    await createPost(postFields, fileIds);

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








module.exports = { uploadFile, readAllFiles, readFile , readAllPosts , uploadAndCreatePost };
