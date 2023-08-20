
import  axios  from 'axios';
import { toast } from 'react-toastify';

const baseUrl = 'https://we-school-api.vercel.app/posts'


export const getPosts = async ()=>{
  try {
    
  const response = await axios.get(baseUrl)
  return response.data
    
  } catch (error) {

    toast.error(error)
    return 
    
  }
}

export const toggleLike = async (userId,postId)=>{
  try {
    const response = await axios.post(baseUrl+"/toggle-like",{
      userId,
      postId
    })
    return toast.success(response.data.msg)
  } catch (error) {
    return toast.error(error.response.data)
  }
}