const express = require('express');
const connectDB = require('./mongo/connect');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const multer = require('multer');
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;
const MONGODB_URL = process.env.MONGO_URI;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Middleware to check the secret key in the request headers
const checkSecretKey = (req, res, next) => {
  const requestSecretKey = req.headers['x-secret-key'];

  if (requestSecretKey !== SECRET_KEY) {
    return res.status(403).json({ error: 'Access forbidden' });
  }

  next();
};

// app.use(checkSecretKey); // Uncomment this to use a passcode to the server

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from We School!',
  });
});

// Import and initialize translate-google
const translate = require('translate-google');

// Import functions for user management and posts
const {
  getUsers,
  signUp,
  loginUser,
  createInvitationCode,
  getInvitationCodes,
  editUser
} = require('./functions/users');

const {
  readAllFiles,
  readFile,
  uploadAndCreatePost,
  readAllPosts,
  togglePostLike,
} = require('./functions/posts');

const { confirmEmail } = require('./functions/mailConfirmation');
const DegreesModel = require('./mongo/degreeModel');
const {
  upload_xlsx,
  getDegrees,
  getStudentDegrees,
} = require('./functions/degrees');

// Connect to MongoDB and start the server
const startServer = async () => {
  try {
    connectDB(MONGODB_URL);

    // Handle degrees upload
    app.post('/degrees-upload', upload.single('file'), upload_xlsx);
    app.get('/degrees', getDegrees);
    app.get('/degrees/:code', getStudentDegrees);

    // Handle translation
    app.post('/translate', async (req, res) => {
      try {
        const { msg } = req.body;
        // Implement your translation logic here
        // Example: const translatedMsg = await translate(msg, { from: 'ar', to: 'en' });
        res.json({ msg: translatedMsg }); // Modify this line accordingly
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
      }
    });

    // Auth routes
    app.post('/auth/signup', signUp);
    app.post('/auth/login', loginUser);
    app.get('/auth/invitcode', getInvitationCodes);
    app.get('/auth/invitcode/:userType', createInvitationCode);
    app.get('/auth/confirm-email', confirmEmail);
    app.get('/auth/users', getUsers);
    app.post('/auth/edit-user/:user', upload.single('picture'), editUser);

    // Post routes
    app.get('/posts', readAllPosts);
    app.post('/posts/upload', upload.array('files'), uploadAndCreatePost);
    app.post('/posts/toggle-like',togglePostLike );
    
    
    // files routes
    app.get('/files', readAllFiles);
    app.get('/files/:id', readFile);

    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () =>
      console.log(`Server has started on port http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
