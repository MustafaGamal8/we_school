import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../../components/sideBar/sideBar';

const Main = () => {
  const userJSON = localStorage.getItem('user');
  const user = JSON.parse(userJSON);

  return (
    <>
      {!user ? (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
          <Link
            to="/login"
            className="p-3 bg-main text-white text-2xl rounded-md hover:bg-opacity-80 transition duration-300"
          >
            Please Login
          </Link>
        </div>
      ) : (
        <main className="flex w-full">
          <div className=' z-50'><Sidebar user={user} /></div>

          <section className="flex-grow overflow-y-scroll">
            <Outlet />
          </section>
        </main>
      )}
    </>
  );
};

export default Main;
