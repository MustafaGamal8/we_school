const InvitationModel = require("../mongo/InvitationModel.js");
const UserModel = require("../mongo/userModel.js");
const bcrypt = require('bcrypt');
const { sendMail } = require("./mailConfirmation.js");

function generateInvitationCode() {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let invitationCode = '';
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    invitationCode += charset[randomIndex];
  }
  return invitationCode;
}

const signUp = async (req, res) => {

  const { firstName, lastName, email, password, role, grade, code } = req.body;
  const userType = role == "student"? "student" + grade : "teacher";

  try {
    const isValidInvitation = await InvitationModel.exists({ code, userType });

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
  const  {userType}  = req.params

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


module.exports = {
  signUp,
  loginUser,
  resetPassword,
  createInvitationCode,
  getInvitationCodes,
};
