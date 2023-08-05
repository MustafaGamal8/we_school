
const nodemailer = require('nodemailer');

const crypto = require('crypto');
const UserModel = require('../mongo/userModel');


const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'weschoolmansoura@gmail.com',
    pass: 'yobrmvgmxuxfctyu',
  },
});



// Generate a random confirmation token
const generateConfirmationToken = () => {
  return crypto.randomBytes(20).toString('hex');
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
      <html>
        <body>
          <p>Hello,</p>
          <p>Please click the button below to confirm your Email:</p>
          <a href="${confirmationLink}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">Confirm Email</a>
          <p>Best regards,</p>
          <p>We-school-mansoura</p>
        </body>
      </html>
    `;

    // Send the email
    await transporter.sendMail({
      from: 'weschoolmansoura@gmail.com',
      to: email,
      subject: 'Email Confirmation',
      text: emailContent,
    });
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
  }
};






const confirmEmail = async(token,res)=>{
  try {
    // Find the user with the given token in the database
    const user = await UserModel.findOne({ confirmationToken: token });

    if (!user) {
      // If the token is not valid or the user is not found, handle the error
      return res.status(400).send('Invalid confirmation token.');
    }

    if (user.isConfirmed) {
      // If the user is already confirmed, handle the case where they try to confirm again
      return res.send('Email is already confirmed.');
    }

    // Update the isConfirmed field to true for the user
    user.isConfirmed = true;
    // Clear the confirmation token (optional: once the email is confirmed, you might want to clear the token)
    user.confirmationToken = null;
    // Save the updated user record
    await user.save();

    // Send a response to the user indicating successful email confirmation
    res.send('Email confirmed successfully!');
    setTimeout(() => {
      res.redirect('https://we-school.vercel.app/login');
    }, 1000);
  } catch (error) {
    // Handle any errors that occurred during the database operation
    console.error('Failed to confirm email:', error);
    res.status(500).send('Failed to confirm email.');
  }
  
}

module.exports = {sendMail,confirmEmail}