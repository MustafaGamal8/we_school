import axios  from 'axios';

const baseUrl = "https://we-school-api.vercel.app/auth"

export const getDegree = async(StudentCode)=>{
  try {
    console.log(StudentCode)
    const response = await axios.get(`http://localhost:8000/degrees/${StudentCode}`) 
  return response.data
    
  } catch (error) {

    
    return error.response.data
    
  }

}