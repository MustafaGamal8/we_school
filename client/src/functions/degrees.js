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
    }
  } catch (error) {
    toast.error(error.response.data.error);
  }
};