import { toast } from 'react-toastify';
import  axios  from 'axios';

const baseUrl = 'https://we-school-api.vercel.app'



export const getAllTasks = async()=>{
  try {
    const response = await axios.get(baseUrl + `/tasks`) 
    return response.data 
  } catch (error) {
     toast.error(error) 
  }
}