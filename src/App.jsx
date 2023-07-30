import { useState } from "react";
import Loader from "./components/loader/loader";
import NavBar from "./components/navBar";
import "./index.css";
import Login from "./pages/login/login";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false)
  }, 5000);

  return (
    <>
      {isLoading && <Loader />}
      <NavBar />

      <Login />
    </>
  );
}

export default App;
