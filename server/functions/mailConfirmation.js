
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
    
  } catch (error) {
    // Handle any errors that occurred during the database operation
    console.error('Failed to confirm email:', error);
    res.status(500).send('Failed to confirm email.');
  }

  setTimeout(() => {
    res.redirect('https://we-school.vercel.app/login');
  }, 1000);
}

module.exports = {sendMail,confirmEmail}