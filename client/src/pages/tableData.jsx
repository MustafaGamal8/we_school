import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { getUsers } from '../functions/users';
import 'react-toastify/dist/ReactToastify.css';

function TableData() {
    const [data, setData] = useState([]);
    const [confirmingAction, setConfirmingAction] = useState(null);
    const { role } = useParams();

    const fetchUsersData = async () => {
        const response = await getUsers();
        setData(response);
        console.log(response);
    };

    useEffect(() => {
        fetchUsersData();
    }, []);

    const handleDelete = (itemId) => setConfirmingAction('delete');

    const handleMakeAdmin = () => setConfirmingAction('makeAdmin');

    const handleConfirm = (itemId) => {
        if (confirmingAction === 'delete') {
            const updatedData = data.filter((item) => item._id !== itemId);
            setData(updatedData);
            toast.success('User deleted successfully');
        } else if (confirmingAction === 'makeAdmin') {
            toast.success('User promoted to admin');
        }
        setConfirmingAction(null);
    };

    return (
        <div className="flex justify-center">
            <div className="overflow-x-auto w-full">
                <table className="table-auto m-auto min-w-[90%] mt-8">
                    <thead>
                        <tr className="bg-main text-white">
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Role</th>
                            {role === 'student' && <th className="px-4 py-2">Grade</th>}
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => role === item.role ? (
                            <tr key={item._id} className="border-b border-slate-200 text-center text-black dark:text-white">
                                <td className="px-4 py-2">{item._id}</td>
                                <td className="px-4 py-2">{item.firstName} {item.lastName}</td>
                                <td className="px-4 py-2">{item.email}</td>
                                <td className="px-4 py-2">{item.role}</td>
                                {role === 'student' && <td className="px-4 py-2">{item.grade}</td>}
                                <td className="px-4 py-2">
                                    {role === 'student' ? (
                                        <div>
                                            <button className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded" onClick={() => handleDelete(item._id)}>
                                                Delete
                                            </button>
                                            {confirmingAction === 'delete' && (
                                                <div className="confirmation-popup">
                                                    <div className="flex items-center justify-center flex-col">
                                                        <p>Are you sure?</p>
                                                        <div className="flex justify-between items-center w-full">
                                                            <button className="bg-green-600 text-white rounded-lg w-[40%]" onClick={() => handleConfirm(item._id)}>
                                                                Yes
                                                            </button>
                                                            <button className="bg-red-600 text-white rounded-lg w-[40%]" onClick={() => setConfirmingAction(null)}>
                                                                No
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ) : role === 'teacher' ? (
                                        <div className="flex justify-around">
                                            <button className="bg-green-500 hover:bg-green-700 w-[45%] text-white px-2 py-1 rounded" onClick={handleMakeAdmin}>
                                                Make Admin
                                            </button>
                                            <button className="bg-red-500 hover:bg-red-700 w-[45%] text-white px-2 py-1 rounded" onClick={() => handleDelete(item._id)}>
                                                Delete
                                            </button>
                                            {confirmingAction === 'delete' && (
                                                <div className="confirmation-popup">
                                                    <div className="confirmation-popup-inner">
                                                        <p>Are you sure?</p>
                                                        <div className="flex justify-between items-center">
                                                            <button className="bg-green-600 text-white rounded-lg w-[40%]" onClick={() => handleConfirm(item._id)}>
                                                                Yes
                                                            </button>
                                                            <button className="bg-red-600 text-white rounded-lg w-[40%]" onClick={() => setConfirmingAction(null)}>
                                                                No
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <button className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded" onClick={() => handleDelete(item._id)}>
                                            Delete
                                        </button>
                                    )}
                                    {confirmingAction === 'delete' && (
                                        <div className="confirmation-popup">
                                            <div className="flex items-center justify-center flex-col">
                                                <p>Are you sure?</p>
                                                <div className="flex justify-between items-center w-full">
                                                    <button className="bg-green-600 text-white rounded-lg w-[40%]" onClick={() => handleConfirm(item._id)}>
                                                        Yes
                                                    </button>
                                                    <button className="bg-red-600 text-white rounded-lg w-[40%]" onClick={() => setConfirmingAction(null)}>
                                                        No
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ) : null)}
                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </div>
    );
}

export default TableData;
