const DegreesModel = require("../mongo/degreeModel");


const xlsx = require('xlsx');

const upload_xlsx = async(req,res)=>{
  try {
    const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(worksheet);

    // Extract subject columns dynamically
    const studentDegreeColumns = Object.keys(data[0]).filter(key => key.includes(' Student Degree'));

    const studentsData = data.map(item => {
      const studentName = item['Student Name'];
      const studentCode = item['Student Code'];

      const subjects = studentDegreeColumns.map(subjectColumn => {
        const subject = subjectColumn.replace(' Student Degree', '');
        return {
          name: subject,
          studentDegree: item[subjectColumn],
          finalDegree:  item[`${subject} Final Degree`] ,
          taqdeer:item[`${subject} Taqdeer`]
        };
      });
          
      return {
        name: studentName,
        code: studentCode,
        subjects: subjects
      };

      console.log(subjects)
    });




    await DegreesModel.insertMany(studentsData);

    res.status(200).json({ msg: 'File uploaded and data processed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

const getDegrees = async (req,res)=>{
  try {
    const degrees = await DegreesModel.find();
    res.status(200).json(degrees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

const getStudentDegrees = async (req, res) => {
  try {
    const studentCode = req.params.code;

    if (!studentCode) {
      return res.status(400).json({ error: 'Student code is required' });
    }

    if (studentCode.length < 2) {
      return res.status(400).json({ error: 'Student code must be at least 2 characters long' });
    }

    const student = await DegreesModel.findOne({ code: studentCode });

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};






module.exports ={upload_xlsx,getDegrees,getStudentDegrees}