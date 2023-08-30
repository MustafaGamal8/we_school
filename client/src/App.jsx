import { useEffect, useState } from "react";
import Loader from "./components/loader/loader";
import Home from './pages/home/home';
import Login from './pages/auth/login';
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import i18n from 'i18next';
import enTranslation from './locales/en.json';
import arTranslation from './locales/ar.json';
import { initReactI18next, Trans } from "react-i18next";
import "./index.css";
import Main from './pages/main/main';
import DashBoard from './pages/dashBoard/dashBoard';
import TimeLine from './pages/timeLine/timeLine';
import Degree from "./pages/degree/degree";
import Settings from "./pages/settings/settings";
import SignUp from "./pages/auth/signup";
import Error from "./components/error";
import TableDataTeatcher from "./pages/tableData";
import ToDoList from "./pages/ToDoList";
import About from "./pages/about/about";
import TableData from "./pages/tableData";

function App() {
  const [isLoading, setIsLoading] = useState(true);






  const defultLang = localStorage.getItem("lang")

  const currentUser = JSON.parse(localStorage.getItem('user'))

  setTimeout(() => {
    setIsLoading(false)
  }, 5000);

  useEffect(() => {
    // lang
    const direction = defultLang === "en" ? "ltr" : "rtl";
    const alignment = defultLang === "en" ? "left" : "right";

    document.body.dir = direction;
    document.querySelectorAll("p, h2").forEach((p) => {
      p.style.textAlign = alignment;
    });

    const theme = localStorage.getItem("theme")
    if (theme == "dark") {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }



  }, [defultLang]);






  i18n.use(initReactI18next).init({
    resources: {
      ar: { translation: arTranslation },
      en: { translation: enTranslation }
    },
    lng: defultLang || "ar",
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false,
    },
  })



  return (
    <main className="w-screen overflow-hidden">

      {/* {isLoading && <Loader />} */}






      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />


        <Route path="/main/" element={<Main />}>
          <Route path="profile" element={<Profile />} />
          { currentUser && (currentUser.role === 'teacher' || currentUser.role === 'admin') &&
            (<>

              <Route path="dashboard" element={<DashBoard />} />
          <Route path="dashboard/data/:role" element={<TableData />} />


            </>)
          }

          <Route path="timeline" element={<TimeLine />} />
          <Route path="degree" element={<Degree />} />
          <Route path="todolist" element={<ToDoList />} />

          <Route path="settings" element={<Settings />} />
          
        </Route>


        <Route path="*" element={<Error />} />

      </Routes>




    </main>
  );
}

export default App;
