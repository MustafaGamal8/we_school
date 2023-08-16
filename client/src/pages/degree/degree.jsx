import React, { useState } from 'react';
import { getDegree } from '../../functions/degrees';
import * as yup from 'yup';

function Degree() {
  const [showTable, setShowTable] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [studentData, setStudentData] = useState(null);

  const schema = yup.object().shape({
    studentId: yup.string().required('Student ID is required').min(2, 'Student ID must be at least 2 characters long'),
  });

  const handleSearch = async () => {
    try {
      await schema.validate({ studentId }, { abortEarly: false });
      const response = await getDegree(studentId);
      setStudentData(response); // Save the response data
      setShowTable(true);
    } catch (error) {
      console.log(error.message); // Log validation error messages
    }
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

      {showTable && studentData && (
        <div className="container mx-auto mt-10" id='table'>
          <h1 className='text-center text-2xl mt-4'>{studentData.name}</h1>
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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
