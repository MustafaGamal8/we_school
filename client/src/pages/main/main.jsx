import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../../components/sideBar/sideBar';

const Main = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      {!user ? (
        <div className="flex flex-col justify-center items-center gap-5 h-screen bg-white dark:bg-slate-800">
          <img src="/assets/login.svg" alt=""  className='h-40'/>
          <Link
            to="/login"
            className="glow-on-hover flex items-center justify-center"
          >
            Please Login
          </Link>
        </div>
      ) : (
        <main className="flex flex-col lg:flex-row w-full ">
          <div className=' lg:fixed   '><Sidebar user={user} /></div>
          <div className='lg:w-[200px]'></div>

          <section className="w-full">
            <Outlet />
          </section>
        </main>
      )}
    </>
  );
};

export default Main;
