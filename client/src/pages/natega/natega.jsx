import React, { useState } from 'react';
import"./natega.css"

function Natega() {
  const [showTable, setShowTable] = useState(false);
  const [studentId, setStudentId] = useState('');

  const handleSearch = () => {
    setShowTable(true);
  };

  return (
    <>
      <h1 className="text-center text-2xl mt-5">ادخل رقم الجلوس</h1>
      <div className="input w-full flex md:w-[600px] m-auto mt-10 justify-between bg-slate-200 rounded-[45px]">
        <input
          type="text"
          className="w-[70%] md:w-[400px] bg-transparent outline-none ml-3"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <button
          className="w-[30%] bg-main text-white p-3 rounded-[45px]"
          onClick={handleSearch}
        >
          search
        </button>
      </div>

      {showTable && (
        <div className="container mx-auto mt-10" id='table'>
            <h1 className='text-center text-2xl mt-4'>الاسم : كارم محمود عبدالقادر</h1>
        <table className="min-w-full bg-white mt-14">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-right text-xs font-semibold uppercase tracking-wider">
                المادة
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-right text-xs font-semibold uppercase tracking-wider">
                الدرجة
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-right text-xs font-semibold uppercase tracking-wider">
                الدرجة النهائية
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                MAth
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                90
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
               100
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                physics
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                85
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
               100
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                اللغة العربية
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                92
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                92
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                English
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                88
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                88
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                soshial
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                95
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
               100
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                programming
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                100
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                100
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              autocatd
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                87
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                100
              </td>
            </tr>
       
          </tbody>
        </table>
      </div>
      )}
    </>
  );
}

export default Natega;