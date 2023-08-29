

import { FaCircleUser } from "react-icons/fa6";

import React from 'react';

export const PostLoadingAnimition = () => {
  return (
    
    <div className="w-[45%] md:w-[50%] lg:w-[40%] m-auto border p-2 rounded text-sec bg-white drop-shadow-xl animate-pulse dark:bg-slate-700">

    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2 text-2xl mt-2">
        <div className="h-12 bg-gray-300 drop-shadow-lg rounded-full overflow-hidden "></div>
        
        <FaCircleUser className="text-sec text-2xl" />
        <div className="h-8 bg-gray-300 w-20 dark:bg-slate-500"></div>
      </div>
      <hr className="h-1 w-1/2 my-2" />
      <div className="b">
        <p className="text-sm text-gray-600 select-text bg-gray-300 h-5 w-40  dark:bg-slate-500"></p>
      </div>
    </div>
  
    <div className="mt-5 rounded p-2 capitalize flex text-right select-text bg-gray-300 h-6 dark:bg-slate-500 mb-2"></div>
  
    <div className="h-96 p-2 bg-white drop-shadow rounded-md animate-pulse dark:bg-slate-500">
      <div className="h-full flex items-center gap-5  justify-center ">
        <div className="h-[70%] bg-gray-300 rounded w-16 animate-pulse dark:bg-slate-400"></div>
        <div className="h-[70%] bg-gray-300 rounded w-16 animate-pulse dark:bg-slate-400"></div>
        <div className="h-[70%] bg-gray-300 rounded w-16 animate-pulse dark:bg-slate-400"></div>
      </div>
    </div>
  
    <div className="flex items-center justify-around w-full mt-7 mb-1">
      <div className="flex flex-col items-center gap-2 text-lg">
        <div className="h-6 bg-gray-300 w-12 animate-pulse  dark:bg-slate-500"></div>
      </div>
  
      <div className="flex flex-col items-center gap-2 text-lg">
        <div className="h-6 bg-gray-300 w-12 animate-pulse dark:bg-slate-500"></div>
      </div>
    </div>
  
    <div className="flex w-full p-1 justify-around capitalize text-white bg-sec rounded-b">
      <div className="p-1 rounded h-6 w-16 bg-gray-300 animate-pulse dark:bg-slate-500"></div>
      <div className="p-1 rounded h-6 w-16 bg-gray-300 animate-pulse dark:bg-slate-500"></div>
    </div>
  
  </div>
  
  
  );
}


export const TaskLoadingAnimition = () => {
  return ( 
    <div className="group relative lg:w-96 w-60 rounded-md p-3 bg-white flex flex-col gap-2 overflow-hidden group border-x-4 border-main drop-shadow-lg animate-pulse dark:bg-slate-600 m-2">
            <div className='flex items-center gap-2'>
              <FaCircleUser className="text-sec text-2xl" />
              <div className="h-5 w-20 bg-gray-300 dark:bg-slate-500"></div>
            </div>
            <div className="h-4 bg-gray-300 dark:bg-slate-500"></div>
            <div className="flex items-center gap-1 group-hover:-translate-y-2 transition-all duration-150">
              <div className="h-4 w-6 bg-gray-300 dark:bg-slate-500"></div>
              <div className="h-4 w-12 bg-gray-300 dark:bg-slate-500"></div>
            </div>
          </div>
   );
}
 