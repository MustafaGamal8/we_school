const InvitationModel = require("../mongo/InvitationModel.js");
const UserModel = require("../mongo/userModel.js");
const bcrypt = require('bcrypt');
const { sendMail } = require("./mailConfirmation.js");
const getUsers = async (res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const signUp = async (req, res) => {
  const { firstName, lastName, email, password, role, code } = req.body;

  try {
    // Check if the invitation code exists in the database
    const isValidInvitation = await InvitationModel.exists({ code: code,userType:role });
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
    let userModel = new UserModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
      isConfirmed:false
    });

    await userModel.save();
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
    // Find the user in the database by email
    const user = await UserModel.findOne({ email });

    // If the user is not found or the password doesn't match, return an error
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send({ error: "Email or Password are wrong" });
    }

    // Check if the user's email is confirmed
    if (!user.isConfirmed) {
      return res.status(401).send({ error: "Email not confirmed. Please check your email for the confirmation link." });
    }

    // Password matches, user is authenticated and email is confirmed
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

const InvitationCode = async (res, userType) => {
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

module.exports = { getUsers, signUp, loginUser, InvitationCode };

