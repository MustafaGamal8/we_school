
import  axios  from 'axios';
import { toast } from 'react-toastify';



export const getPosts = async ()=>{
  try {
    
  const response = await axios.get('https://we-school-api.vercel.app/posts')
  

  return response.data
    
  } catch (error) {

    toast.error(error)
    return 
    
  }


}