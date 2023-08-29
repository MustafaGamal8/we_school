const taskModel = require("../mongo/task");
const UserModel = require("../mongo/userModel");
const bcrypt = require('bcrypt');
const schedule = require('node-schedule');

const deleteTasksWithEndDateToday = async () => {
  try {
    const date = new Date();
    const today = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    const tasksToDelete = await taskModel.deleteMany({ endDate: today });
    console.log(`${tasksToDelete.deletedCount} tasks deleted with endDate: ${today}`);
  } catch (error) {
    console.error('Error deleting tasks:', error);
  }
};

const scheduledJob = schedule.scheduleJob('0 23 * * *', deleteTasksWithEndDateToday);

const uploadTask = async (req, res) => {
  const { email, password, task, endDate } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const newTask = new taskModel({
        user: {
          _id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          picture: user.picture
        },
        task,
        endDate: endDate || "Undefined"
      });
      await newTask.save();
      res.status(200).json({ msg: 'Task Added Successfully' });
    } else {
      return res.status(401).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = { uploadTask, getTasks };