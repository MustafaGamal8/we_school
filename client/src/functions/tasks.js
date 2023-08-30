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


export const  uploadTask = async( task,grade, endDate )=>{
  
  const user = JSON.parse(localStorage.getItem('user'));
  try {
    const response = await axios.post(baseUrl + `/tasks-upload`,{
      email:user.email,
      task,
      grade,
      endDate 
    }) 
    toast.success(response.data.msg)
    return response.data
  } catch (error) {
     toast.error(error.response.data.error) 
     return error.response.data
  }
}