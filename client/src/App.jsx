import { useState } from "react";
import Loader from "./components/loader/loader";
import Home from './pages/home/home';
import Login from './pages/login/login';
import { Routes,Route } from "react-router-dom";
import "./index.css";
import Natega from "./pages/natega/natega";
import DashBoard from "./pages/dashBoard/dashBoard";
import Profile from "./pages/Profile/Profile";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false)
  }, 5000);

  

  return (
    <>
    
      {isLoading && <Loader />}



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
