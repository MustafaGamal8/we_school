import React, { useState } from 'react';
import { getAllDegrees, getDegree } from '../../functions/degrees';
import * as yup from 'yup';
import { toast } from "react-toastify";
import { useEffect } from 'react';
import { Trans } from 'react-i18next';

function Degree() {
  const [studentCode, setStudentCode] = useState("");
  const [studentData, setStudentData] = useState(null);
  const [isThereDegrees, setIsThereDegrees] = useState(null);

  const schema = yup.object().shape({
    studentCode: yup.number().required('Student ID is required').min(3, 'Student ID must be at least 3 characters long'),
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      await schema.validate({ studentCode }, { abortEarly: false });
      const response = await getDegree(studentCode);
      const {error} = response
      error ? toast.error(error):setStudentData(response)
      !error ? toast.success("Congratulations"):null
    } catch (error) {
      toast.error(error.message); 
    }
  };

  const handleIsThereData = async()=>{
    const response = await getAllDegrees()
    setIsThereDegrees(response)
  }

  useEffect(()=>{
    handleIsThereData()
  },[])


  return (
    <>
    <div className='md:h-96 md:w-96  h-40 w-40 rounded-full fixed md:-bottom-40 md:-right-40 -bottom-16 -right-16 bg-main -z-10'></div>
      

      { isThereDegrees == false ? 
      (<div className='mt-20 flex flex-col gap-0  '>
        <div className='md:w-80 w-40  m-auto h-max  md:h-full  '><img className='w-full h-full' src="/assets/empty-folder.svg" alt="" /></div>
      <h1 className='m-auto text-center md:text-3xl text-xl uppercase  text-[#4a486a] mt-5'><Trans>لا يوجد درجات حتى الان</Trans></h1>
      </div>) : (
        <><h1 className="text-center text-2xl mt-5 dark:text-white"><Trans>ادخل رقم الجلوس</Trans></h1>
        <form onSubmit={handleSearch} className="input w-[90%] flex md:w-[600px] m-auto mt-10 justify-between bg-slate-200 rounded-[45px]">
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

        {
          studentData ? (
            <div className="container mx-auto mt-10" id='table'>
              <div className=' mt-4 capitalize bg-sec p-2 text-white  rounded flex gap-2 items-center justify-around mx-5 md:text-xl'>
              <h1 >name :  {studentData.name}</h1>
              <h1 >code :  {studentData.code}</h1>
              </div>
              
              <table className="min-w-full bg-white mt-14 text-left dark:bg-slate-700 dark:text-white ">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-xs font-semibold uppercase tracking-wider">
                      <Trans>المادة</Trans>
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-xs font-semibold uppercase tracking-wider">
                      <Trans>الدرجة</Trans>
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-xs font-semibold uppercase tracking-wider">
                      <Trans>الدرجة النهائية</Trans>
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-xs font-semibold uppercase tracking-wider">
                      <Trans>تقدير</Trans>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {studentData.subjects.map((subject) => (
                    <tr key={subject._id} className="bg-gray-50  dark:bg-slate-700 ">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {subject.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 0 dark:text-gray-400 ">
                        {subject.studentDegree}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-sec dark:text-white">
                        {subject.finalDegree}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 ">
                        {subject.taqdeer}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ):
          (<div className='mt-20 flex flex-col gap-0  '>
          <div className='md:w-80 w-40  m-auto h-max  md:h-full  '><img className='w-full h-full' src="/assets/empty-folder.svg" alt="" /></div>
        <h1 className='m-auto text-center md:text-3xl text-xl uppercase  text-[#4a486a] mt-5'><Trans>ادخل رقم جلوسك</Trans>  </h1>
        </div>)
        }
        
        </>
      )
        
      }
      
    </>
  );
}

export default Degree;
