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

    const response = await axios.put(`${baseUrl}/auth/users/${user._id}`, formData, {
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