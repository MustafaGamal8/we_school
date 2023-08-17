import { useState } from "react";
import { FaFileUpload } from "react-icons/fa";
import Calendar from "../../components/calender";
import Task from "../../components/task";



const DashBoard = () => {
  const [file, setFile] = useState(null);
  const display=document.getElementById("dispaly")

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    console.log(
      display.value 
,
      event.target.files[0]);

  };

  const handleUpload = () => {
    console.log(file);
  };

  return (
    <>
 <div className="w-[80%] m-auto min-h-[300px] h-fit flex flex-col md:flex-row justify-between bg-[#b285f2] text-white mt-10 rounded-xl">
        <div className="w-full md:w-[50%] p-5 flex flex-col justify-between items-start h-full">
          <h1 className="text-2xl">Welcome to We School Dashboard</h1>
          <h2 className="text-xl mt-4">
            You can upload by clicking on "Upload" and choose your file. Be careful when selecting a file. Have a nice time!
          </h2>
          <div className="mt-8 flex flex-col items-start">
            <label htmlFor="fileInput" className="h-[30px] p-5 bg-main w-[120px] rounded-lg hover:scale-[1.1] transition-[2s] flex flex-col justify-center items-center text-white drop-shadow-lg cursor-pointer">
              <FaFileUpload className="mr-2" />
              Upload
            </label>
            <input type="file" id="fileInput" className="hidden" onChange={handleFileChange} />
          </div>
          <button className="mt-4 h-[30px] p-5 bg-main w-[120px] rounded-lg hover:scale-[1.1] transition-[2s] flex flex-col justify-center items-center text-white drop-shadow-lg" onClick={handleUpload}>
            Submit
          </button>
        </div>

        <div className="w-full md:w-[30%] p-5 flex flex-col justify-between items-start h-full m-auto">
          <img src="/assets/undraw_upload_re_pasx.svg" className="w-full" alt="" />
        </div>
      </div>
      <div className=" flex flex-col md:flex-row justify-between w-[80%] m-auto h-fit mt-10 ">

    <div className="w-[50%]"><Calendar /></div>
    <div className="w-[40%] flex flex-col justify-between h-full mt-10 ">
    <div className="w-full h-20 mt-7 "><Task /></div>
    <div className="w-full h-20 mt-7 "><Task /></div>
    <div className="w-full h-20 mt-7 "><Task /></div>



    </div>
    </div>

    </>
    

  );
};

export default DashBoard;
