import axios  from 'axios';

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