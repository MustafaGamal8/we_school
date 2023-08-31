import axios from 'axios';
import { toast } from 'react-toastify';

const baseUrl = 'https://we-school-api.vercel.app';

export const getUsers = async () => {
  try {
    const response = await axios.get(baseUrl + "/users");
    return response.data;
  } catch ( error) {
     toast.error("Couldn't get users")
  }
};


export const editUser = async (user) => {
  try {
    const formData = new FormData();
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('password', user.password);
    formData.append('picture', user.picture);

    const response = await axios.put(`${baseUrl}/users/${user._id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    localStorage.setItem('user', JSON.stringify(response.data.user));
    window.location.reload()
    
    toast.success(response.data.msg);
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};


export const deleteUsers = async (users) => {
  const currentUser = JSON.parse(localStorage.getItem('user'));

  try {
    const response = await axios.post(`${baseUrl}/users`,{
      users,
      _id:currentUser._id,
       password: currentUser.password,
    });
    toast.success(response.data.msg);
    window.location.reload()
  } catch (error) {
    toast.error(error.response.data.error);
  }


}




export const  makeAdmin = async (users)=>{
  const currentUser = JSON.parse(localStorage.getItem('user'));
  try {
    const response = await axios.post(`${baseUrl}/users/admin`,{
      users,
      _id:currentUser._id,
       password: currentUser.password,
    });
    toast.success(response.data.msg);
    window.location.reload()
  } catch (error) {
    toast.error(error.response.data.error);
  }
}
export const  makeTeacehr = async (users,grade)=>{
  const currentUser = JSON.parse(localStorage.getItem('user'));
  try {
    const response = await axios.post(`${baseUrl}/users/teacher`,{
      users,
      grade,
      _id:currentUser._id,
       password: currentUser.password,
       
    });
    toast.success(response.data.msg);
    window.location.reload()
  } catch (error) {
    toast.error(error.response.data.error);
  }
}




export const newYear = async() => {
  try {
    const response = await axios.post(`${baseUrl}/users/newYear`);
    toast.success(response.data.msg);
  } catch (error) {
    toast.error(error.response.data.error);
    
  }
}