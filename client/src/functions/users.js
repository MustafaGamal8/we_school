import axios from 'axios';
import { toast } from 'react-toastify';

const baseUrl = 'https://we-school-api.vercel.app/auth/users';

export const getUsers = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch ( error) {
     toast.error("Couldn't get users")
  }
};
