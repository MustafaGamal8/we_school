import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaWhatsapp, FaMailBulk } from 'react-icons/fa';
import { Trans } from 'react-i18next';

function Footer() {
  return (
    <div className="bg-main lg:bg-transparent py-10 md:py-20 lg:px-20 md:flex md:justify-between md:items-center">
      <div className="md:w-1/4 mb-10 md:mb-0">
        <div className="flex items-center mb-6">
          <img src="/public/logo.jpg" className="w-10 h-10 rounded-full" alt="" />
          <h2 className="ml-3 text-white text-xl"><Trans>مدرسة وي</Trans></h2>
        </div>
        <div className="flex space-x-4 text-white">
          <FaFacebook className="text-3xl hover:text-blue-500 transition duration-300" />
          <FaTwitter className="text-3xl hover:text-blue-500 transition duration-300" />
          <FaWhatsapp className="text-3xl hover:text-green-500 transition duration-300" />
        </div>
      </div>

      <div className="md:w-1/4 text-white">
        <h1 className="text-xl font-semibold mb-4"><Trans>اتصل بنا</Trans></h1>
        <ul className="space-y-2">
          <li><Trans>weschoolmansoura@gmail.com</Trans></li>
          <li><Trans>01276071829</Trans></li>
          <li><Trans>01008572255</Trans></li>
          <li><Trans>0100723782</Trans></li>
        </ul>
      </div>

      <div className="md:w-1/4 text-white">
  <h1 className="text-xl font-semibold mb-4"><Trans>الأقسام</Trans></h1>
  <ul className="space-y-2">
    <li><a href="#school_contact"><Trans>اتصل بالمدرسة</Trans></a></li>
    <li><a href="#school_terms"><Trans>شروط المدرسة</Trans></a></li>
    <li><a href="#school_debartments"><Trans>أقسام المدرسة</Trans></a></li>
    <li><a href="#school_partners"><Trans>شركاء المدرسة</Trans></a></li>
  </ul>
</div>


      <div className="md:w-1/4 text-white">
        <h1 className="text-xl font-semibold mb-4"><Trans>المطورون</Trans></h1>
        <ul className="space-y-2">
          <li><Trans>كرم محمود</Trans></li>
          <li><Trans>مصطفى جمال</Trans></li>
          <li><Link to="/login" className="text-lg text-blue-500 hover:underline"><Trans>عنهم</Trans></Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
