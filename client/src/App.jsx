import { useEffect, useState } from "react";
import Loader from "./components/loader/loader";
import Home from './pages/home/home';
import Login from './pages/login/login';
import { Routes,Route } from "react-router-dom";
import "./index.css";
import Natega from "./pages/natega/natega";
import DashBoard from "./pages/dashBoard/dashBoard";
import Profile from "./pages/Profile/Profile";
import  i18n from 'i18next';

import enTranslation from './locales/en.json';
import arTranslation from './locales/ar.json';
import { initReactI18next } from "react-i18next";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const defultLang = localStorage.getItem("lang") 

  setTimeout(() => {
    setIsLoading(false)
  }, 5000);

  useEffect(() => {

    defultLang == "en" ? document.body.dir ="rtl" : document.body.dir ="ltr"
    
  }, []);

  

  

  i18n.use(initReactI18next).init({
    resources:{
      ar: { translation: arTranslation },
      en:{ translation : enTranslation }
    },
    lng: defultLang  || "ar",  // Set default language to Arabic
    fallbackLng: 'ar', // Fallback language if translation is missing for a key
    interpolation: {
      escapeValue: false, // React already sanitizes the output, so no need to escape
    },
  })

  return (
    <>
    
      {/* {isLoading && <Loader />} */}



      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/profile"  element={<Profile />}/>
        <Route path="/natega"  element={<Natega />}/>
        <Route path="/login"  element={<Login />}/>
        <Route path="/dashboard"  element={<DashBoard />}/>
      </Routes>

      
    </>
  );
}

export default App;
