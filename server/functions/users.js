const InvitationModel = require("../mongo/InvitationModel.js");
const UserModel = require("../mongo/userModel.js");
const bcrypt = require('bcrypt');
const { sendMail } = require("./mailConfirmation.js");
const profilePictureModel = require("../mongo/profilePicture.js");
const { body, validationResult } = require('express-validator');

const signUpValidation = [
  body('firstName').trim().notEmpty().withMsg('First name is required'),
  body('lastName').trim().notEmpty().withMsg('Last name is required'),
  body('email').trim().isEmail().withMsg('Invalid email format'),
  body('password').isLength({ min: 6 }).withMsg('Password must be at least 6 characters'),
  body('role').trim().notEmpty().withMsg('Role is required'),
  body('grade').trim().notEmpty().withMsg('Grade is required'),
  body('code').trim().notEmpty().withMsg('Invitation code is required'),
];

// Function to generate a random invitation code
function generateInvitationCode() {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let invitationCode = '';
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    invitationCode += charset[randomIndex];
  }
  return invitationCode;
}

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
  }
};

const signUp = async (req, res) => {

  const errors = validationResult(req.body);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { firstName, lastName, email, password, role, grade, code } = req.body;

  try {
    const isValidInvitation = await InvitationModel.exists({ code: code, userType: role + grade });

    if (!isValidInvitation) {
      return res.status(403).json({ error: 'Invalid invitation code' });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already exists' });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

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
    console.error(err);
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
    console.error(err);
    res.status(500).send({ error: "Server error" });
  }
};

const resetPassword = async (req, res) => {
  const { code, newPassword } = req.body;
  try {
    const user = await UserModel.findOne({
      resetPasswordToken: code,
      resetCodeExpiration: { $gt: Date.now() },
    });

    if (user) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
      user.password = hashedPassword;
      user.resetPasswordToken = undefined;
      user.resetCodeExpiration = undefined;
      await user.save();

      return res.status(200).json({ msg: 'Password reset successfully' });
    } else {
      return res.status(400).json({ error: 'Invalid reset code or code has expired' });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const createInvitationCode = async (req, res) => {
  const { userType } = req.params

  try {
    const existingInvitation = await InvitationModel.findOneAndDelete({ userType });
    const newInvitationCode = generateInvitationCode();

    const invitation = new InvitationModel({ code: newInvitationCode, userType });
    await invitation.save();

    res.status(200).json({ invitationCode: newInvitationCode });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to generate invitation code' });
  }
};

const getInvitationCodes = async (req, res) => {
  const invitCodes = await InvitationModel.find()
  res.json(invitCodes)
}

const editUser = async (req, res) => {
  try {
    const userId = req.params.user;
    const { firstName, lastName, password } = req.body;
    const user = await UserModel.findById(userId);

    if (user && (await bcrypt.compare(password, user.password))) {
      if (req.file) {
        const { originalname, buffer } = req.file;

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

      if (firstName) user.firstName = firstName;
      if (lastName) user.lastName = lastName;
      await user.save();

      res.status(200).json({ msg: 'Data updated successfully' });
    } else {
      return res.status(401).json({ error: 'Password is incorrect' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

const getUserProfilePicture = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userProfilePicture = await profilePictureModel.findOne({ for: userId });
    if (!userProfilePicture) {
      return res.status(404).json({ error: 'Profile picture not found' });
    }
    res.set('Content-Type', userProfilePicture.data.contentType);
    res.send(userProfilePicture.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = {
  getUsers,
  signUp,
  loginUser,
  resetPassword,
  createInvitationCode,
  getInvitationCodes,
  editUser,
  getUserProfilePicture
};
