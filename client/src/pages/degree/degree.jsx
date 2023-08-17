import React, { useState } from 'react';
import { getDegree } from '../../functions/degrees';
import * as yup from 'yup';
import { toast } from "react-toastify";
function Degree() {
  const [showTable, setShowTable] = useState(false);
  const [studentCode, setStudentCode] = useState("");
  const [studentData, setStudentData] = useState(null);

  const schema = yup.object().shape({
    studentCode: yup.number().required('Student ID is required').min(3, 'Student ID must be at least 3 characters long'),
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      await schema.validate({ studentId }, { abortEarly: false });
      const response = await getDegree(studentId);
      setStudentData(response);
      setShowTable(true);
    } catch (error) {
      toast.success(error.message); 
    }
  };

  return (
    <>
    <div className='h-96 w-96 rounded-full fixed -bottom-40 -right-40 bg-main'></div>
      <h1 className="text-center text-2xl mt-5">ادخل رقم الجلوس</h1>
      <form onSubmit={handleSearch} className="input w-full flex md:w-[600px] m-auto mt-10 justify-between bg-slate-200 rounded-[45px]">
        <input
          type="text"
          className="w-[70%] md:w-[400px] bg-transparent outline-none ml-3"
          value={studentCode}
          onChange={(e) => setStudentCode(e.target.value)}
        />
        <button
          className="w-[30%] bg-main text-white p-3 rounded-[45px]"
        >
          search
        </button>
      </form>

      {showTable && studentData && (
        <div className="container mx-auto mt-10" id='table'>
          <h1 className='text-center text-2xl mt-4'>name :  {studentData.name}</h1>
          <table className="min-w-full bg-white mt-14 text-left">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-xs font-semibold uppercase tracking-wider">
                  المادة
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-xs font-semibold uppercase tracking-wider">
                  الدرجة
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-xs font-semibold uppercase tracking-wider">
                  الدرجة النهائية
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-xs font-semibold uppercase tracking-wider">
                  تقدير
                </th>
              </tr>
            </thead>
            <tbody>
              {studentData.subjects.map((subject) => (
                <tr key={subject._id} className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {subject.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {subject.studentDegree}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-sec">
                    {subject.finalDegree}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {subject.taqdeer}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Degree;
