import React from 'react';
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaWhatsapp,FaMailBulk } from 'react-icons/fa';

function Footer() {
  return (
    <div className="w-full  lg:bg-transparent bg-main flex flex-col md:flex-row md:justify-between p-10 md:items-center  z-[-3]">
      <div className='mt-5 w-full md:w-[20%] mb-10 md:mb-0'>
        <div className='flex flex-row  text-2xl items-center'>
          <img src="/public/logo.jpg" className='rounded-[50%] w-[50px]' alt="" />
          <h2 className='ml-5 text-white'>we scchool</h2>
        </div>
        <div className='flex flex-row w-[50%] text-md md:text-lg justify-between items-center text-white mt-10'>
          <div className="w-[50px] h-[50px] flex items-center justify-center text-4xl rounded-[50%]">
            <p><FaFacebook /></p>
          </div>
          <div className="w-[50px] h-[50px] flex items-center justify-center text-4xl rounded-[50%]">
            <p><FaTwitter /></p>
          </div>
          <div className=" w-[50px] h-[50px] flex items-center justify-center text-4xl rounded-[50%]">
            <p><FaWhatsapp /></p>
          </div>
        </div>
      </div>
      <div className='mt-5 w-full md:w-[20%] text-white'>
        <h1 className='text-white text-2xl mb-5 '>contact us</h1>
        <ul>
          <li className='text-white text-md mt-1'>weschoolmansoura@gmail.com</li>
          <li className='text-white text-md mt-1'>010000000</li>
          <li className='text-white text-md mt-1'>010000000</li>
          <li className='text-white text-md mt-1'>010000000</li>
        </ul>
      </div>
      <div className='mt-5 w-full md:w-[20%] text-white'>
        <h1 className='text-white text-2xl mb-5'>sections</h1>
        <ul>
          <li className='text-white text-md mt-1'><a href="#school_contact">school_contact</a></li>
          <li className='text-white text-md mt-1'><a href="#school_terms">school_terms</a></li>
          <li className='text-white text-md mt-1'><a href="#school_debartments">school_debartments</a></li>
          <li className='text-white text-md mt-1'><a href="#school_partners">school_partners</a></li>
        </ul>
      </div>

      <div className='mt-5 w-full md:w-[20%] text-white'>
        <h1 className='text-white text-2xl mb-5'>Developers</h1>
        <ul>
          <li className='text-white text-md mt-1'>Karem Mahmoud</li>
          <li className='text-white text-md mt-1'>Mustafa Gamal</li>
          <li className='text-white text-md mt-1 '><Link to="/login" className='text-lg'>about them</Link> </li>
        </ul>
      </div>


      
    </div>
  );
}

export default Footer;