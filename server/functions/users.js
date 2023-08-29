const UserModel = require("../mongo/userModel.js");
const profilePictureModel = require("../mongo/profilePicture.js");

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
  }
};


const editUser = async (req, res) => {
  try {
    const userId = req.params.user;
    const { firstName, lastName, password } = req.body;
    const user = await UserModel.findById(userId);

    if (user && (password == user.password)) {
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

      res.status(200).json({ msg: 'Data updated successfully',user });
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







const makeAdmin = async (req, res) => {
  try {
    const userId = req.params.user;
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    user.role = 'admin';
    await user.save();
    res.status(200).json({ msg: 'User updated successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.user;
    const {_id, password} = req.body
    const admin = await UserModel.findById(_id)
    if (!admin && !admin.password == password) {
      return res.status(404).json({ error: 'you are not allowed' });
    }

    const user = await UserModel.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ msg: 'User deleted successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}



const newYear = async (req, res) => {
  try {
    const users = await UserModel.findAll({role:"student"})

    users.forEach(async (user) => {

      switch (user.grade) {
        case'A':user.grade = 'B';break
        case'B':user.grade = 'C';break
        case'C':user.grade = 'graduated';break
      }

        await user.save();
      })
      res.status(200).json({ msg: 'Users updated successfully' });
    } catch (error) {
    res.status(500).json({ error: 'An error occurred' });    
  }
}

module.exports = {
  getUsers,
  editUser,
  getUserProfilePicture,
  makeAdmin,
  deleteUser,
  newYear
};
