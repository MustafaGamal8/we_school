const express = require('express');
const connectDB = require('./mongo/connect');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const multer = require('multer');
const { serve, setup } = require('swagger-ui-express');
const swaggerDocument = require('./openapi-spec.json'); // Update this with the correct path

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

app.use('/api-docs', serve, setup(swaggerDocument));

// Import and initialize translate-google
const translate = require('translate-google');

// Import functions for user management and posts
const {
  getUsers,
  editUser,
  makeAdmin,
  deleteUser,
  newYear,
} = require('./functions/users');
const {
  signUp,
  resetPassword,
  loginUser,
  createInvitationCode,
  getInvitationCodes
} = require('./functions/auth');




const { sendMail, confirmEmail, sendResetPasswordEmail } = require('./functions/mailConfirmation');
const {
  readAllFiles,
  readFile,
  uploadAndCreatePost,
  readAllPosts,
  togglePostLike,
  deletePost,
} = require('./functions/posts');
const { upload_xlsx, getDegrees, getStudentDegrees, getTopThree } = require('./functions/degrees');
const { uploadTask, getTasks } = require('./functions/task');

// Connect to MongoDB and start the server
const startServer = async () => {
  try {
    connectDB(MONGODB_URL);

    // Handle translation
    // app.post('/translate', async (req, res) => {
    //   try {
    //     const { msg } = req.body;
    //     // Implement your translation logic here
    //     // Example: const translatedMsg = await translate(msg, { from: 'ar', to: 'en' });
    //     res.json({ msg: translatedMsg }); // Modify this line accordingly
    //   } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ error: 'An error occurred' });
    //   }
    // });

    // Auth routes
    app.post('/auth/signup', signUp);
    app.post('/auth/login', loginUser);
    app.post('/auth/reset-password', resetPassword);
    app.post('/auth/reset-password/send', sendResetPasswordEmail);
    app.get('/auth/invitecode', getInvitationCodes);
    app.get('/auth/invitecode/:userType', createInvitationCode);
    app.get('/auth/confirm-email', confirmEmail);


    
    // users routes
    app.get('/users', getUsers);
    app.put('/users/:user', upload.single('picture'), editUser);
    app.delete('/users/:user', deleteUser);
    app.put('/users/admin/:user', makeAdmin);
    app.put('/users/newYear', newYear);

    // Post routes
    app.get('/posts', readAllPosts);
    app.post('/posts/upload', upload.array('files'), uploadAndCreatePost);
    app.post('/posts/toggle-like', togglePostLike);
    app.delete('/posts/:post/:user',deletePost)

    // Files routes
    app.get('/files', readAllFiles);
    app.get('/files/:id', readFile);

    // Degrees routes
    app.post('/degrees-upload', upload.single('file'), upload_xlsx);
    app.get('/degrees', getDegrees);
    app.get('/degrees/:code', getStudentDegrees);

    // Tasks routes
    app.post('/tasks-upload', uploadTask);
    app.get('/tasks', getTasks);

    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () =>
      console.log(`Server has started on port http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
