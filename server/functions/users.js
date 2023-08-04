const InvitationModel = require("../mongo/InvitationModel.js");
const UserModel = require("../mongo/userModel.js");
const bcrypt = require('bcrypt');

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
    const isValidInvitation = await InvitationModel.exists({ code: code });
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
    });

    await userModel.save();
    res.status(200).json({ msg: 'Inserted to MongoDB' });
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
      return res.status(401).send({ msg: "Email or Password are wrong" });
    }

    // Password matches, user is authenticated
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

const InvitationCode = async (res) => {
  try {
    // Remove all old invitation codes from the database
    await InvitationModel.deleteMany({});

    // Generate a new invitation code
    const newInvitationCode = generateInvitationCode();

    // Save the new invitation code to the database (Assuming InvitationModel is your MongoDB model)
    const invitation = new InvitationModel({ code: newInvitationCode });
    await invitation.save();

    res.status(200).json({ invitationCode: newInvitationCode });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to generate invitation code' });
  }
}

module.exports = { getUsers, signUp, loginUser, InvitationCode };
