import axios from "axios"
import * as Yup from 'yup';

const baseUrl = "https://we-school-api.vercel.app/auth"



export const login = async (formData)=>{
  try {
   const response =  await axios.post(baseUrl + "/login",{
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
};


export const signUp = async (formData)=>{  
  try {
    const response =  await axios.post(baseUrl + "/signup",{
    firstName:formData.firstName,
    lastName:formData.lastName,
    email:formData.email,
    password:formData.password,
    code:formData.invitationCode, 
    role:formData.role,
    grade:formData.grade
  })
  return response.data
    
  } catch (error) {
    return error.response.data
  }
}





