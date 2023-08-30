import axios from "axios"
import { toast } from "react-toastify";

const baseUrl = "https://we-school-api.vercel.app"



export const login = async (formData)=>{
  try {
   const response =  await axios.post(baseUrl + "/auth/login",{
    email:formData.email,
    password:formData.password
  })


  localStorage.setItem('user', JSON.stringify(response.data.user));

  return response.data

  } catch (error) {
    return error.response.data
  }
}


export const logout = () => {
  localStorage.removeItem('user');
  toast.success("logged out")
  
};


export const signUp = async (formData)=>{  
  try {
    const response =  await axios.post(baseUrl + "/auth/signup",{
    firstName:formData.firstName,
    lastName:formData.lastName,
    email:formData.email,
    password:formData.password,
    code:formData.invitationCode, 
    role:formData.role,
    grade: formData.grade
  })
  console.log(response)
  return response.data
    
  } catch (error) {
    return error.response.data
  }
}



export const sendResetCode = async (email)=>{
  try {
   const response =  await axios.post(baseUrl + "/reset-password/send",{
    email
  })  
  return response.data
  
  } catch (error) { 
    return error.response.data
    
  }
}


export const resetPassword = async (code,newPassword)=>{
  try {
    
   const response =  await axios.post(baseUrl + "/reset-password",{
    code,
    newPassword
  })  
  return response.data
    
  } catch (error) { 
    return error.response.data
    
  }
}




