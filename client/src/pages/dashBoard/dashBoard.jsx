import { useState } from "react";
import { FaFileUpload ,FaSchool,FaUser } from "react-icons/fa";
import Calendar from "../../components/calender";
import Task from "../../components/task";
import { Link } from "react-router-dom";
import UploadPostModal from "../../components/uploadpostmodal";






const DashBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [file, setFile] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
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
 <div className="w-[95%] md:w-[80%] m-auto min-h-[300px] h-fit flex flex-col md:flex-row justify-between bg-[#b285f2] text-white mt-10 rounded-xl">
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


<div className="w-[80%] m-auto h-fit flex flex-col md:flex-row shadow-2xl text-center mt-10 bg-transparent  " >

<Headermain icon={<FaSchool  />} title={<h1>Bransh</h1>} text={<h2>mansoura</h2>} />
<Headerorange icon={<FaUser  />} title={<h1>students</h1>} text={<h2>1200</h2>} />

<Headerblue icon={<FaUser  />} title={<h1>teatchers</h1>} text={<h2>50</h2>} />
<Headergreen icon={<FaUser  />} title={<h1>engineering</h1>} text={<h2>10</h2>} />



</div>






<div className="flex flex-col md:flex-row justify-between w-[80%] m-auto h-fit mt-10 space-y-4 md:space-y-0">
  <div className="w-full md:w-[40%]">
    <Calendar />
  </div>
  <div className="w-[70%] m-auto md:w-[50%] flex flex-col md:flex-row  justify-between h-full mt-10 gap-x-3 ">
    <BestPersonCard img="/public/assets/nardin.jpg"name="shady mahmooud"percent="95.5%" text="Innovator"color="#10B981"/>
    <BestPersonCard  img="/public/assets/nardin.jpg"   name="karem mahmoud"   percent="99.9%"  text="Top score"  color="#F59E0B"/>

    <BestPersonCard img="/public/assets/nardin.jpg"name="mustafa gamal "percent="10.3%"text="Go to hell"color="#3B82F6"/>
  </div>
</div>


      {/* لازم تحط الداتا عشان يشتغلو */}
    {/* <div className="w-full h-20 mt-7 "><Task /></div>
    <div className="w-full h-20 mt-7 "><Task /></div>
    <div className="w-full h-20 mt-7 "><Task /></div> */}
  <div className="w-[70%] m-auto md:w-[50%] flex flex-col md:flex-row  justify-between h-full mt-10 gap-x-3 ">

   <h1 className="text-center text-main text-2xl">upload post </h1>
    <p className="text-xl text-sec">just click on upload button and drag your file</p>
    <button className="w-[25%] h-[35px] p-3 bg-main " onClick={handleOpenModal}>upload</button>
    {isModalOpen &&
    <UploadPostModal isOpen={true}  onClose={handleCloseModal} />
    
    }
    </div>
    </>
    

  );
};

export default DashBoard;
const Headermain = ({ icon, title ,text }) => {
  return (
    <div className="flex items-center  w-full drop-shadow-lg md:w-[25%]  relative text-main uppercase  p-5 h-[120px] mt-5 rounded-lg  gap-x-5 text-lg after:left-0 after:top-0 after:w-[1%] after:h-full after:bg-main after:absolute  hover:after:w-full after:z-[-1] after:transition-all overflow-hidden hover:text-white  ">
    
      {<h1 className="text-[30px]">{icon}</h1>}
      <div className="flex flex-col ">
      {<h1 className="text[2xl]" >{title}</h1>}
      {<h2 className="text[lg]" >{text}</h2>}
      </div>
    </div>

  );
}
const Headerorange = ({ link,icon, title ,text }) => {
  return (
   

    <div className="flex items-center w-full drop-shadow-lg md:w-[25%] relative text-red-500 uppercase  p-5 h-[120px] mt-5 rounded-lg  gap-x-5 text-lg after:left-0 after:top-0 after:w-[1%] after:h-full after:bg-red-500 after:absolute  hover:after:w-full after:z-[-1] after:transition-all overflow-hidden hover:text-white  ">
    
      {<h1 className="text-[30px]">{icon}</h1>}
      <div className="flex flex-col ">
      {<h1 className="text[2xl]" >{title}</h1>}
      {<h2 className="text[lg]" >{text}</h2>}
      </div>
    </div>

  );
}
const Headerblue = ({ link,icon, title ,text }) => {
  return (
   

    <div className="flex items-center w-full drop-shadow-lg md:w-[25%] relative text-blue-500 uppercase  p-5 h-[120px] mt-5 rounded-lg  gap-x-5 text-lg after:left-0 after:top-0 after:w-[1%] after:h-full after:bg-blue-500 after:absolute  hover:after:w-full after:z-[-1] after:transition-all overflow-hidden hover:text-white  ">
    
      {<h1 className="text-[30px]">{icon}</h1>}
      <div className="flex flex-col ">
      {<h1 className="text[2xl]" >{title}</h1>}
      {<h2 className="text[lg]" >{text}</h2>}
      </div>
    </div>
 
  );
}
const Headergreen = ({ link,icon, title ,text }) => {
  return (
    

    <div className="flex items-center w-full drop-shadow-lg md:w-[25%] relative text-green-500 uppercase  p-5 h-[120px] mt-5 rounded-lg  gap-x-5 text-lg after:left-0 after:top-0 after:w-[1%] after:h-full after:bg-green-500 after:absolute  hover:after:w-full after:z-[-1] after:transition-all overflow-hidden hover:text-white  ">
      {<h1 className="text-[30px]">{icon}</h1>}
      <div className="flex flex-col ">
      {<h1 className="text[2xl]" >{title}</h1>}
      {<h2 className="text[lg]" >{text}</h2>}
      </div>
    </div>
  
  );
}


const BestPersonCard = ({ img, name, percent, text, color }) => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full p-5 mt-10 md:mt-0 shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
      style={{ backgroundColor: color }}>
      <img className="rounded-full w-32 h-32 object-cover mb-4" src={img} alt={name} />
      <h1 className="text-center text-2xl font-semibold text-white">{name}</h1>
      <h2 className="text-center text-xl text-white mt-1">{percent}</h2>
      <p className="text-center text-white mt-2">{text}</p>
    </div>
  );
};
