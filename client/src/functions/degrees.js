import axios  from 'axios';
import { toast } from 'react-toastify';

const baseUrl = "https://we-school-api.vercel.app"

export const getDegree = async(StudentCode)=>{
  try {
    const response = await axios.get(baseUrl + `/degrees/${StudentCode}`) 
    return response.data
    
  } catch (error) {
    return error.response.data
    
  }
}
export const getAllDegrees = async()=>{
  try {
    const response = await axios.get(baseUrl + `/degrees`) 
    return response.data   
  } catch (error) {
     console.log(error) 
    
  }
}

export const uploadDegrees = async (excelfileList) => {
  try {
    for (const excelfile of excelfileList) {
      const formData = new FormData();
      formData.append("file", excelfile);

      const response = await axios.post( baseUrl+ "/degrees-upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success(response.data.msg);
      return response.data;
    }
  } catch (error) {
    toast.error(error.response.data.error);
    return error.response.data;
  }
};


export const getTopThree = async ()=>{
  
  const degreeStore = await getAllDegrees();
  const degrees = [];

  degreeStore.map((student) => {
    let finalDegree = 0;
    let studentDegree = 0;

    student.subjects.map((subject) => {
      finalDegree += subject.finalDegree;
      studentDegree += subject.studentDegree;
    });

    degrees.push({
      name: student.name,
      code: student.code,
      picture: student.picture,
      finalDegree: (studentDegree / finalDegree) * 100,
    });
  });

  degrees.sort((a, b) => b.finaldegree - a.finaldegree);


  return degrees.slice(0, 3)
}