import { useState } from "react";
import { FaFileUpload } from "react-icons/fa";

const DashBoard = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    console.log(file);
  };

  return (
   <></>
  );
};

export default DashBoard;
