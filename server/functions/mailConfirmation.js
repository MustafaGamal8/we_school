const nodemailer = require('nodemailer');
const crypto = require('crypto');
const UserModel = require('../mongo/userModel');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'weschoolmansoura@gmail.com',
    pass: 'isguvgurkplvolqh',
  },
});

// Generate a random confirmation token
const generateConfirmationToken = () => {
  return crypto.randomBytes(20).toString('hex');
};
const generatePasswordToken = () => {
  const min = 100000; // Minimum 6-digit number
  const max = 999999; // Maximum 6-digit number
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Send the confirmation email
const sendMail = async (email) => {
  try {
    // Generate a confirmation token for the user
    const confirmationToken = generateConfirmationToken();

    // Save the confirmation token to the user's record in the database
    const user = await UserModel.findOneAndUpdate(
      { email: email },
      { confirmationToken: confirmationToken },

    );

    // Construct the confirmation link
    const confirmationLink = `https://we-school-api.vercel.app/auth/confirm-email?token=${confirmationToken}`;

    // Email content with the confirmation link
    const emailContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Email Confirmation</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f5f5f5;
          margin: 0;
          padding: 0;
        }
    
        .container {
          max-width: 600px;
          margin: 30px auto;
          background-color: #ffffff;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
        }
    
        .header-img {
          display: block;
          max-width: 50%;
          margin: auto;
          margin-bottom: 20px;
        }
    
        h1 {
          color: #0066cc;
          margin-bottom: 20px;
        }
    
        p {
          margin: 15px 0;
        }
    
        .btn {
          display: inline-block;
          background-color: #0066cc;
          color: white;
          border-radius: 5px;
          padding: 10px 20px;
          text-decoration: none;
          margin-right: 10px;
          transition: background-color 0.3s ease;
        }
    
        .btn:hover {
          background-color: #0052a3;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <img class="header-img" src="https://we-school.vercel.app/logo.jpg" alt="Header Image" />
        <h1>Email Confirmation</h1>
        <p>Hello,</p>
        <p>Please click on the button below to confirm your email:</p>
        <a class="btn" href="${confirmationLink}">Confirm Email</a>
        <p>If the button above does not work, you can also click on the link below:</p>
        <a href="${confirmationLink}">${confirmationLink}</a>
        <p>Best regards,</p>
        <p>We School Mansoura</p>
      </div>
    </body>
    </html>
    `;



    // Send the email
    await transporter.sendMail({
      from: 'weschoolmansoura@gmail.com',
      to: email,
      subject: 'Email Confirmation',
      html: emailContent,
    });
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
  }
};


const confirmEmail = async (req, res) => {
  const { token } = req.query
  try {
    const user = await UserModel.findOne({ confirmationToken: token });

    if (!user) {
      return res.status(400).send('Invalid confirmation token.');
    }

    if (user.isConfirmed) {
      return res.send('Email is already confirmed.');
    }

    user.isConfirmed = true;
    user.confirmationToken = undefined;
    await user.save();

    res.send('Email confirmed successfully!');

  } catch (error) {
    console.error('Failed to confirm email:', error);
    res.status(500).send('Failed to confirm email.');
  }

  setTimeout(() => {
    res.redirect('https://we-school.vercel.app/login');
  }, 1000);
}
const sendResetPasswordEmail = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    const resetToken = generatePasswordToken();
    const expirationTime = new Date(Date.now() + 5 * 60 * 1000); // 30 seconds from now

    user.resetPasswordToken = resetToken;
    user.resetCodeExpiration = expirationTime;
    await user.save();

    const emailContent = `
    <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 0;">
      <div style="max-width: 600px; margin: 30px auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); padding: 20px;">
        <img src="https://we-school.vercel.app/logo.jpg" alt="Header Image" style="display: block; max-width: 50%; margin: auto; margin-bottom: 20px;">
        <h1 style="color: #0066cc; margin-bottom: 20px;">Password Reset Code</h1>
        <p style="margin: 15px 0;">Hello,</p>
        <p style="margin: 15px 0;">Your password reset code is: <strong style="color:blue;" >${resetToken}</strong></p>
        <p style="margin: 15px 0;">This code will expire in ${Math.floor((expirationTime - Date.now()) / 1000)} seconds. Please use it to reset your password.</p>
        <p style="margin: 15px 0;">If you didn't request this, you can safely ignore this email.</p>
        <div style="text-align: center;">
          <p style="margin: 15px 0;">Best regards,</p>
          <p style="margin: 15px 0;">We School Mansoura</p>
        </div>
      </div>
    </div>
  `;

    await transporter.sendMail({
      from: 'weschoolmansoura@gmail.com',
      to: email,
      subject: 'Password Reset Code',
      html: emailContent,
    });

    setTimeout(async () => {
      user.resetPasswordToken = undefined;
      user.resetCodeExpiration = undefined;
      await user.save();
    }, expirationTime - Date.now());

    return res.status(200).json({ msg: 'Reset code sent successfully' });
  } catch (error) {
    res.status(500).json({ error });
  }
};



module.exports = { sendMail, confirmEmail, sendResetPasswordEmail }
