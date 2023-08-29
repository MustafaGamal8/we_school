import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUsers } from '../functions/users';

const baseUrl = 'https://we-school-api.vercel.app/auth/users';

function TableDataTeacher() {
    const [data, setData] = useState([]);

    const { role } = useParams();

    const fetchUsersData = async () => {
        const response = await getUsers();
        setData(response);
        console.log(response);
    };

    useEffect(() => {
        fetchUsersData();
    }, []);

    const handleDelete = (itemId) => {
        const updatedData = data.filter((item) => item._id !== itemId);
        setData(updatedData);
    };

    return (
        <div className="flex justify-center">
            <table className="table-auto w-[90%] mt-8">
                <thead>
                    <tr className="text-black dark:text-white text-center bg-gray-300">
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Role</th>
                        {role === 'student' && <th className="px-4 py-2">Grade</th>}
                        {role === 'teacher' && <th className="px-4 py-2">Upgrade</th>}
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) =>
                        role === item.role ? (
                            <tr key={item._id} className="text-center">
                                <td className="border px-4 py-2">{item._id}</td>
                                <td className="border px-4 py-2">
                                    {item.firstName} {item.lastName}
                                </td>
                                <td className="border px-4 py-2">{item.email}</td>
                                <td className="border px-4 py-2">{item.role}</td>
                                {role === 'student' && <td className="border px-4 py-2">{item.grade}</td>}
                                {role === 'teacher' && (
                                    <td className="border px-4 py-2">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded">
                                            Make Admin
                                        </button>
                                    </td>
                                )}
                                <td className="border px-4 py-2">
                                    <div className="flex justify-around">
                                        <button
                                            className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded"
                                            onClick={() => handleDelete(item._id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ) : null
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default TableDataTeacher;
