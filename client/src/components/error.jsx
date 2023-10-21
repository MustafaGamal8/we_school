import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Error = () => {
  const  navigate =useNavigate()

  setTimeout(() => {
    navigate('/')    
  }, 3000);
  return (
    <>
    
    <nav className=" flex items-center justify-center px-2 drop-shadow bg-white h-20 text-main z-[10] dark:bg-slate-700 dark:text-white">
        <img src="/logo.png" alt="" className="h-full" />
        <div></div>
      </nav>
      
    <div className='w-full h-screen flex flex-col justify-center items-center '>
      <img src="/assets/404-error.png" alt="Error 404" className="max-w-xs mb-6" />
      
      <p className="text-gray-600 mb-4">Oops! It looks like you've landed on the wrong page.</p>

      <Link to={"/"} className='text-xl px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300 ease-in-out'>
        Go to Home Page
      </Link>
    </div>
    </>
  );
}

export default Error;
