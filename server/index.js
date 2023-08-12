const express = require('express');
const connectDB = require('./mongo/connect.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const {  InvitationCode, getUsers, loginUser, signUp, createInvitationCode, getInvitationCodes } = require('./functions/users.js');
const multer = require('multer');
const { readAllFiles, readFile, uploadFile,readAllPosts, uploadAndCreatePost } = require('./functions/posts.js');
const { confirmEmail } = require('./functions/mailConfirmation.js');

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

const translate = require('translate-google');
const { default: DegreesModel } = require('./mongo/degreeModel.js');


const startServer = async () => {
  try {
    connectDB(MONGODB_URL);

    app.post('/translate', async (req, res) => {
      const {msg} = req.body

      const myres =  await translate(msg,{ from :"ar",to: "en"})
      res.json({msg:myres})
      
    });


    // Auth 
    app.get('/auth/users', async (req, res) => {
      getUsers(res);
    });

    app.post('/auth/signup', async (req, res) => {
      signUp(req, res);
    });

    app.post('/auth/login', async (req, res) => {
      loginUser(req, res);
    });
    

    app.get('/auth/invitcode', async (req, res) => {
      getInvitationCodes(res)
    })
    app.get('/auth/invitcode/:userType', async (req, res) => {
      const {userType} = req.params
      createInvitationCode(res,userType)
    })

    app.get('/auth/confirm-email', async (req, res) => {
      const { token } = req.query;
      await confirmEmail(token,res)
    });
    
    // Auth end


    // Route to handle post upload
    app.post('/upload-post', upload.array('files'), async (req, res) => {
      uploadAndCreatePost(req, res)
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







    // _________
    app.post('/degrees-upload', upload.single('file'), async (req, res) => {
      try {
        const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(worksheet, { raw: true });
    
        const chunkSize = 100; // Adjust as needed
        for (let i = 0; i < data.length; i += chunkSize) {
          const chunk = data.slice(i, i + chunkSize);
          await DegreesModel.create(chunk);
        }
    
        res.status(201).json({ message: 'Data uploaded successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while uploading data' });
      }
    });
    

    app.listen(8000 || process.env.PORT, () => console.log('Server has started on port http://localhost:8000'));
  } catch (error) {
    console.log(error);
  }
};

startServer();
