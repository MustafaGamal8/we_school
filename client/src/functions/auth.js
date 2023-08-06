import axios from "axios"
import * as Yup from 'yup';

const baseUrl = "https://we-school-api.vercel.app/auth"



export const login = async (formData)=>{
  try {
   const response =  await axios.post(baseUrl + "/login",{
    email:formData.email,
    password:formData.password
  })
  return response.data

  } catch (error) {
    return error.response.data
  }
}




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




export const validateForm = async () => {
  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
    firstName: isLogin ? Yup.string() : Yup.string().required('First Name is required'),
    lastName: isLogin ? Yup.string() : Yup.string().required('Last Name is required'),
    invitationCode: isLogin ? Yup.string() : Yup.string().required('Invitation Code is required'),
    role: isLogin ? Yup.string() : Yup.string().required('Please select a role'),
  });

  try {
    await schema.validate(formData, { abortEarly: false });
    
    return null;
  } catch (error) {
    const errors =[];
    error.inner.forEach((err) => {
      errors[err.path] = err.message;
    });
     return errors;
  }
};