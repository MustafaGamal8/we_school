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


export const  uploadTask = async( task, endDate )=>{
  
  const user = JSON.parse(localStorage.getItem('user'));
  try {
    const response = await axios.post("http://localhost:8000" + `/tasks-upload`,{
      email:user.email,
      task,
      endDate 
    }) 
    toast.success(response.data.msg)
  } catch (error) {
     toast.error(error.response.data.error) 
  }
}