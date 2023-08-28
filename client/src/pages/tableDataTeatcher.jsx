import React, { useState } from 'react';
import { useTable } from 'react-table';

function TableDataTeatcher() {
  const userJSON = localStorage.getItem('user');
  const user = JSON.parse(userJSON);

  const data = [
    { id: 1, name: `${user.firstName} ${user.lastName}`, role: `${user.role}`, delete: 'delete' },
  ];

  const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Role', accessor: 'role' },
    {
      Header: 'Delete',
      accessor: 'delete',
      Cell: ({ row }) => (
        <button
          className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded"
          onClick={() => handleDelete(row.original.id)}
        >
          {row.original.delete}
        </button>
      ),
    },
  ];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  const handleDelete = (itemId) => {
    const updatedData = data.filter((item) => item.id !== itemId);
    setData(updatedData);
  };

  return (
    <div className="flex justify-center">
      <table className="table-auto w-3/4 mt-8" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="text-black dark:text-white text-center">
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="px-4 py-2">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={row.id}
                className="bg-gray-100 text-center"
              >
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()} className="border px-4 py-2">
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableDataTeatcher;
