import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { deleteUsers, getUsers, makeAdmin, makeTeacehr } from '../functions/users';
import 'react-toastify/dist/ReactToastify.css';

function TableData() {
  const [data, setData] = useState([]);
  const [confirmingAction, setConfirmingAction] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [grade, setGrade] = useState(null);
  const { role } = useParams();

  const currentUser = JSON.parse(localStorage.getItem('user'));

  const fetchUsersData = async () => {
    const response = await getUsers();
    setData(response);
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  const handleDelete = () => {
    if (selectedUsers.length == 0) {
      return toast.error("You Have to Select at least one user")
    }
    setConfirmingAction('delete');
  };

  const handleMakeAdmin = () => {
    if (selectedUsers.length == 0) {
      return toast.error("You Have to Select at least one user")
    }
    setConfirmingAction('makeAdmin');
  };
  const handleMakeTeacher = () => {
    if (selectedUsers.length == 0 && grade) {
      return toast.error("You Have to Select at least one user and grade")
    }
    setConfirmingAction('makeTeacher');
  };

  const handleConfirm = async () => {
    if (confirmingAction === 'delete') {
      await deleteUsers(selectedUsers)

    } else if (confirmingAction === 'makeAdmin') {
      
      await  makeAdmin(selectedUsers)
    
    } else if (confirmingAction === 'makeTeacher') {
      
      await  makeTeacehr(selectedUsers,grade)
    }

    setConfirmingAction(null);
  };


  const handleUserSelect = (userId) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter(id => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };


  return (
    <div className="flex flex-col justify-around h-screen   ">
      
    <div>
      
    <h1 className='text-center text-2xl w-full mt-10  text-main uppercase '>{role}s</h1>
    </div>

      <div className="overflow-auto w-full h-full scrollbar-hide">
        <table className="table-auto m-auto min-w-[90%] mt-8 ">
          <thead>
            <tr className="bg-main text-white">
              <th className="px-1 py-2">select</th>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              {role !== 'admin' && <th className="px-4 py-2">Grade</th>}
            </tr>
          </thead>
          
          <tbody className='text-xs md:text-base '>
            {data.map((item) =>
              role === item.role ? (
                <tr
                  key={item._id}
                  className="border-b border-slate-200 text-center text-black dark:text-white"
                >
                  <td className="px-4 py-2">
                    <label className="container">
                      <input type="checkbox"
                        checked={selectedUsers.includes(item._id)}
                        onChange={() => handleUserSelect(item._id)} />
                      <span className="checkmark"></span>
                    </label>
                  </td>
                  <td className="px-4 py-2">{item._id}</td>
                  <td className="px-4 py-2">
                    {item.firstName} {item.lastName}
                  </td>
                  <td className="px-4 py-2">{item.email}</td>
                  <td className="px-4 py-2">{item.role}</td>
                  {role !== 'admin' && (
                    <td className="px-4 py-2">{item.grade}</td>
                  )}
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>



      {confirmingAction && (
          <div className="confirmation-popup bg-white dark:text-slate-800 w-[40%] m-auto rounded drop-shadow-md mb-5 p-2">
            <div className="flex items-center  justify- flex-col">
              <p>Are you sure?</p>
              <div className="flex justify-around items-center w-full  gap-2">
                <button
                  className="bg-green-600 text-white rounded-lg w-14 h-10 p-2 text-center"
                  onClick={() => handleConfirm()}
                >
                  Yes
                </button>

                <button
                  className="bg-red-600 text-white rounded-lg w-14 h-10 p-2 "
                  onClick={() => setConfirmingAction(null)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}


      {
        currentUser.role == "admin" && (
          <div className='flex w-[50%]  m-auto mb-5 gap-3  '>

        <button onClick={handleDelete} className='text-white bg-red-400 p-3 rounded m-auto h-12 w-20 '>Delete</button>
        {
          role === 'teacher' && (
            <button onClick={handleMakeAdmin} className='text-white bg-green-400 p-3 rounded m-auto h-12 w-max  whitespace-nowrap'>Make Admin</button>
          )
        }      

        {
          role === 'admin' && (
            <div className='flex flex-col items-center justify-center'>
            <button onClick={handleMakeTeacher} className='text-white bg-green-400 p-3 rounded m-auto h-12 w-max  whitespace-nowrap'>Make Teacher</button>
             <select
              className="w-full border mt-6 border-gray-300 bg-white text-gray-900 rounded-md p-2 focus:text-main appearance-none"
              name="role"
              value={grade}
              onChange={(e) => {
                setGrade(e.target.value);
              }}
            >
              <option value="" disabled>
                Select grade
              </option>
              <option value="A">Grade A</option>
              <option value="B">Grade B</option>
              <option value="C">Grade C</option>
            </select>
          </div>
          )
        }      

      </div>
        )
      }
    </div>
  );
}

export default TableData;




