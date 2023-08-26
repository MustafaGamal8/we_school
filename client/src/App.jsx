import { useEffect, useState } from "react";
import Loader from "./components/loader/loader";
import Home from './pages/home/home';
import Login from './pages/auth/login';
import { Routes,Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import  i18n from 'i18next';
import enTranslation from './locales/en.json';
import arTranslation from './locales/ar.json';
import { initReactI18next ,Trans} from "react-i18next";
import "./index.css";
import Main from './pages/main/main';
import DashBoard from './pages/dashBoard/dashBoard';
import TimeLine from './pages/timeLine/timeLine';
import Degree from "./pages/degree/degree";
import Settings from "./pages/settings/settings";
<<<<<<< HEAD
import TableData from "./components/TableData/TableData";
=======
import SignUp from "./pages/auth/signup";
>>>>>>> 161dfeffc8ce1144e2bd2344af4f68873220a34a

function App() {
  const [isLoading, setIsLoading] = useState(true);


  

  

  const defultLang = localStorage.getItem("lang") 

  setTimeout(() => {
    setIsLoading(false)
  }, 5000);

  useEffect(() => {
    // lang
    const direction = defultLang === "en" ? "ltr" : "rtl";
    const alignment = defultLang === "en" ? "left" : "right";
  
    document.body.dir = direction;
    document.querySelectorAll("p").forEach((h1) => {
      h1.style.textAlign = alignment;
    });
    // theme
    
    const theme =  localStorage.getItem("theme")
    if (theme ==  "dark") {
     document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }



  }, [defultLang]);
  

  

  

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
        <Route path="/login"  element={<Login />}/>
        <Route path="/signup"  element={<SignUp />}/>

        <Route path="/main/"  element={<Main />}>
          <Route path="profile"  element={<Profile />}/>
          <Route path="dashboard"  element={<DashBoard />}/>
          <Route path="dashboard/tabledata"  element={<TableData />}/>

          <Route path="timeline"  element={<TimeLine />}/>
          <Route path="degree"  element={<Degree />}/>
          <Route path="settings"  element={<Settings />}/>
        </Route>

      </Routes>



      
    </>
  );
}

export default App;
