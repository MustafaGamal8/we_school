import axios  from 'axios';
import { toast } from 'react-toastify';

const baseUrl = "https://we-school-api.vercel.app/auth/invitecode"


export const getInviteCodes = async () =>{
  try {
    const response = await axios.get(baseUrl )
    return response.data
  } catch (error) {
    toast.error(error.response.data.error)
  }
  
}


export const changeInviteCode = async (userType) =>{
  try {
    const response = await axios.get(`${baseUrl}/${userType}`)
    return response.data
  } catch (error) {
    toast.error(error.response.data.error)
  }
}