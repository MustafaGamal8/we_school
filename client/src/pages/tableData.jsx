import React, { useEffect, useState  } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { getUsers } from '../functions/users';




const baseUrl = 'https://we-school-api.vercel.app/auth/users';

function TableDataTeatcher() {
  const [data, setData] = useState([]);
  

    const { role } = useParams();
    
 

    const fetchUsersData = async () => {
        const response = await getUsers()
        setData(response)
        console.log(response)
    }
  useEffect(() => {
    fetchUsersData()     

  }, []);

  const handleDelete = (itemId) => {
    const updatedData = data.filter((item) => item.id !== itemId);
    setData(updatedData);
  };

  return (
    <div className="flex justify-center">
      <table className="table-auto w-3/4 mt-8">
        <thead>
          <tr className="text-black dark:text-white text-center">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">email</th>
            <th className="px-4 py-2">Role</th>
            {role === "student" ? (<th className="px-4 py-2">grade</th>):null }

            <th className="px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
         role === item.role ?(   <tr key={item.id} className="bg-gray-100 text-center">
         <td className="border px-4 py-2">{item._id}</td>
         <td className="border px-4 py-2">{item.firstName} {item.lastName}</td>
         <td className="border px-4 py-2">{item.email}</td>

         <td className="border px-4 py-2">{item.role}</td>
         {role === "student" ?(<td className="border px-4 py-2">{item.grade}</td>) :null}

         <td className="border px-4 py-2">
           <button
             className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded"
             onClick={() => handleDelete(item.id)}
           >
             Delete
           </button>
         </td>
       </tr>) :null
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableDataTeatcher;
