import React, { useState } from 'react';

function TableData() {
  const userJSON = localStorage.getItem('user');
  const user = JSON.parse(userJSON);

  const [data, setData] = useState([
    { id: 1, name: `${user.firstName} ${user.lastName}`, grade: 'A', delete: 'delete' },
  ]);

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
            <th className="px-4 py-2">Grade</th>
            <th className="px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="bg-gray-100 text-center">
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.grade}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(item.id)}
                >
                  {item.delete}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableData;
