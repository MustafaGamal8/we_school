import { useState } from "react";
import Loader from "./components/loader/loader";
import Home from './pages/home/home';
import Login from './pages/login/login';
import { Routes,Route } from "react-router-dom";
import "./index.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false)
  }, 5000);


  return (
    <>
    
      {/* {isLoading && <Loader />} */}



      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/login"  element={<Login />}/>
      </Routes>

      
    </>
  );
}

export default App;
