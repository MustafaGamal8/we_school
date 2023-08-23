const InvitationModel = require("../mongo/InvitationModel.js");
const UserModel = require("../mongo/userModel.js");
const bcrypt = require('bcrypt');
const { sendMail } = require("./mailConfirmation.js");
const profilePictureModel = require("../mongo/profilePicture.js");

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const signUp = async (req, res) => {
  const { firstName, lastName, email, password, role, grade, code } = req.body;


  try {
    // Check if the invitation code exists in the database
    const isValidInvitation = await InvitationModel.exists({ code: code, userType: role + grade });

    if (!isValidInvitation) {
      return res.status(403).json({ error: 'Invalid invitation code' });
    }

    // Check if the email is already registered in the database
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already exists' });
    }

    // Hash the password using bcrypt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user with the hashed password
    let user = new UserModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
      grade,
      isConfirmed: false
    });

    await user.save();
    await sendMail(email)
    res.status(200).json({ msg: 'Account Created Successfully, Please Confirm Your Email' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to insert data' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send({ error: "Email or Password are wrong" });
    }

    if (!user.isConfirmed) {
      return res.status(401).send({ error: "Email not confirmed. Please check your email for the confirmation link." });
    }

    res.status(200).send({ msg: "Login successful", user });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Server error" });
  }
};



function generateInvitationCode() {
  const length = 8;
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let invitationCode = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    invitationCode += charset[randomIndex];
  }
  return invitationCode;
}

const createInvitationCode = async (req, res) => {
  const { userType } = req.params

  try {
    // Check if an invitation code with the given user type already exists
    const existingInvitation = await InvitationModel.findOneAndDelete({ userType });


    const newInvitationCode = generateInvitationCode();

    // Save the new invitation code to the database
    const invitation = new InvitationModel({ code: newInvitationCode, userType });
    await invitation.save();

    res.status(200).json({ invitationCode: newInvitationCode });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to generate invitation code' });
  }
};


const getInvitationCodes = async (req, res) => {
  const invitCodes = await InvitationModel.find()
  res.json(invitCodes)
}



// 
const editUser = async (req, res) => {
  try {
    const userId = req.params.user;
    const { firstName, lastName, password } = req.body;
    const user = await UserModel.findById(userId);

    if (user && (await bcrypt.compare(password, user.password))) {
      if (req.file) {
        const { originalname, buffer, mimetype } = req.file;

        const fileSizeInBytes = buffer.length;
        const fileSizeInMB = fileSizeInBytes / (1024 * 1024);
        const fileSize = fileSizeInMB.toFixed(2) + 'Mb';

        const profilePicture = new profilePictureModel({
          name: originalname,
          for: user._id,
          data: buffer,
          fileSize,
        });

        await profilePicture.save();
        user.picture =  `/files/${profilePicture._id}`
        
      }

      firstName ? user.firstName = firstName : null 
      lastName  ? user.lastName = lastName : null
      await user.save();

      res.status(200).json({ message: 'Data updated successfully' });
    } else {
      return res.status(401).json({ error: 'Password is incorrect' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};


module.exports = { getUsers, signUp, loginUser, createInvitationCode, getInvitationCodes, editUser };

