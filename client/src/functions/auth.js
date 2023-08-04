import axios from "axios"




export const login = async (formData)=>{

  try {
   const response =  await axios.post('https://we-school-server.vercel.app/login',{
    email:formData.email,
    password:formData.password
  })


  
  return response.data

    
  } catch (error) {
    return error.response.data
  }


}




export const signUp = async (formData)=>{
  const response =  await axios.post('https://we-school-server.vercel.app/login',{
    firstName:formData.firstName,
    lastName:formData.lastName,
    email:formData.email,
    password:formData.password,
    code:formData.invitationCode, 
    role:"student"
  })

  

}