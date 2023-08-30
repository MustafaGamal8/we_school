import React, { useState } from 'react';
import { FiSun, FiMoon, FiLogOut } from 'react-icons/fi'; // Import icons from react-icons library

import { Trans } from 'react-i18next';
import { logout } from '../../functions/auth';
import i18n from 'i18next';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme")); 
  const Navigate = useNavigate()

  

  const toggleLanguage = () => {

    const currentLanguage = i18n.language

    i18n.changeLanguage(currentLanguage == "en" ? "ar" : "en")
    localStorage.setItem("lang", currentLanguage == "en" ? "ar" : "en")
    window.location.reload()
  }
  const toggleDarkMode = () => {

    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme)

    localStorage.setItem("theme", newTheme);
    document.documentElement.classList[newTheme === "dark" ? "add" : "remove"]("dark");
  };

  const handleLogout = () => {
    logout();
    Navigate("/")
  };





  return (
    <div className="">
      <img
        className="absolute bottom-0 scale-y-[-1] right-0 z-[-1] w-full h-max drop-shadow-xl"
        src="/assets/wave.svg"
        alt=""
      />

      <h1 className="w-80 bg-main text-white rounded m-auto mt-10 text-center md:text-3xl p-2 uppercase">
        <Trans>settings</Trans>
      </h1>

      <div className="w-[80%] bg-white text-black  h-[500px] m-auto mt-10 drop-shadow-xl rounded overscroll-y-auto flex flex-col items-start dark:bg-slate-700 dark:text-white p-5">

        <div className="w-full h-full capitalize">

          <h1 className="text-2xl font-semibold  text-center ">
            <Trans>general</Trans>
          </h1>

          <div className="flex flex-col   justify-around p-4 h-full">

            <div className="flex items-center w-full  justify-around">
              <h1 className="mr-2 text-xl flex items-center gap-1 "><Trans>Dark Mode</Trans>      {theme === 'light' ? <FiMoon /> : <FiSun />}</h1>
              <label className="switch">
                <input type="checkbox" onChange={toggleDarkMode} checked={theme === 'dark'} />
                <span className="slider round"></span>
              </label>
            </div>

            <hr className="w-full h-1 my-3" />



            <div className="flex items-center w-full justify-around ">
              <label htmlFor="language" className="mr-2 text-xl flex items-center gap-1">
                Language / اللغة
              </label>
              <select
                id="language"
                onChange={toggleLanguage}
                value={i18n.language}
                className="border rounded p-1 text-slate-700"
              >
                <option value="en">English</option>
                <option value="ar">العربية</option>
              </select>
            </div>

            <hr className="w-full h-1 my-3" />


            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-80 m-auto flex items-center justify-center">
              <FiLogOut />
              <h1 className="ml-2">Log Out</h1>
            </button>

          </div>


        </div>
      </div>


    </div>
  );
};

export default Settings;
