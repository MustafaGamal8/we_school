const express = require('express');
const connectDB = require('./mongo/connect.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { InvitationCode, getUsers, loginUser, signUp } = require('./functions/users.js');

const multer = require('multer');
const { readAllFiles, readFile, uploadFile,readAllPosts } = require('./functions/posts.js');

const app = express();

app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const storage = multer.memoryStorage();
const upload = multer({ storage });

const SECRET_KEY = process.env.SECRET_KEY;
const MONGODB_URL = process.env.MONGO_URI;

// Middleware to check the secret key in the request headers
const checkSecretKey = (req, res, next) => {
  const requestSecretKey = req.headers['x-secret-key'];

  if (requestSecretKey !== SECRET_KEY) {
    return res.status(403).json({ error: 'Access forbidden' });
  }

  next();
};

// app.use(checkSecretKey); // un comment this to use passcode to the server 

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from we school!',
  });
});

const startServer = async () => {
  try {
    connectDB(MONGODB_URL);

    app.get('/users', async (req, res) => {
      getUsers(res);
    });

    app.post('/signup', async (req, res) => {
      signUp(req, res);
    });

    app.post('/login', async (req, res) => {
      loginUser(req, res);
    });
    app.get('/invitationcode', async (req, res) => {
      InvitationCode(res)
    })


    // Route to handle file upload
    app.post('/upload-post', upload.array('files'), async (req, res) => {
      uploadFile(req, res)
    });

    // Route to get all posts
    app.get('/posts', async (req, res) => {
      readAllPosts(res)
    });
    // Route to get all files
    app.get('/files', async (req, res) => {
      readAllFiles(res)
    });

    // Route to retrieve and download a specific file
    app.get('/files/:id', async (req, res) => {
      readFile(req, res)
    });

    app.listen(8000 || process.env.PORT, () => console.log('Server has started on port http://localhost:8000'));
  } catch (error) {
    console.log(error);
  }
};

startServer();
