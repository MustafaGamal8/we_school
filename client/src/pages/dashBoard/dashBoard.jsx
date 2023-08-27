import { useState } from "react";
import { FaFileUpload ,FaSchool,FaUser } from "react-icons/fa";
import Calendar from "../../components/calender";
import Task from "../../components/task";
import { Link } from "react-router-dom";
import UploadPostModal from "../../components/uploadpostmodal";
import { NavLink } from 'react-router-dom'; // Make sure to import Link if you're using it






const DashBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState({
    post:false,
    degree:false,
    task:false
  });

  const [file, setFile] = useState(null);

  const handleOpenModal = (modalName) => {
    setIsModalOpen({
      ...isModalOpen,
      [modalName]: true
    });
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


  const userJSON = localStorage.getItem('user');
  const user = JSON.parse(userJSON);
  console.log(user);

  return (
    <>
 <div className="w-[95%] md:w-[80%] m-auto min-h-[300px] h-fit flex flex-col md:flex-row justify-between bg-[#b285f2] text-white mt-10 rounded-xl">
     <div className="w-full md:w-[50%] p-5 flex flex-col justify-between items-start h-full">
  <h1 className="text-2xl">
    Welcome <NavLink to="/main/profile">{user.firstName} {user.lastName}</NavLink> to We School Dashboard
  </h1>
  <h2 className="text-xl mt-4">
    You can upload by clicking on "Upload" and choose your file. Be careful when selecting a file. Have a nice time!
  </h2>
</div>
        <div className="w-full md:w-[30%] p-5 flex flex-col justify-between items-start h-full m-auto">
          <img src="/assets/undraw_upload_re_pasx.svg" className="w-full" alt="" />
        </div>
      </div>


<div className="w-[80%] m-auto h-fit flex flex-col md:flex-row shadow-2xl text-center mt-10 bg-transparent   gap-2" >
<Headermain icon={<FaSchool  />}  title={"Bransh"} text={"mansoura"} color={"#10b981"} />
<Headermain icon={<FaUser  />} linkTo={"/main/TableData"} title={"students"} text={"1200"} color={"#dade18"}/>

<Headermain icon={<FaUser  />} linkTo={"/main/TableDataTeatcher"} title={"teatchers"} text={"50"}color={"#3b82f6"} />
<Headermain icon={<FaUser  />} title={"engineering"} text={"10"} color={"#10d981"}/>



</div>






<div className="flex flex-col md:flex-row justify-between w-[80%] m-auto h-fit mt-10 space-y-4 md:space-y-0">
  <div className="w-full md:w-[30%]">
    <Calendar />
  </div>
  <div className="w-[80%] m-auto md:w-[50%] flex flex-col md:flex-row  justify-between h-full mt-10 gap-x-3 ">
    <BestPersonCard img="/public/assets/nardin.jpg"name="shady mahmooud"percent="95.5%" text="Innovator"color="#10B981"/>
    <BestPersonCard  img="/public/assets/nardin.jpg"   name="karem mahmoud"   percent="99.9%"  text="Top score"  color="#F59E0B"/>

    <BestPersonCard img="/public/assets/nardin.jpg"name="mustafa gamal "percent="10.3%"text="Go to hell"color="#3B82F6"/>
  </div>
</div>


      {/* لازم تحط الداتا عشان يشتغلو */}
    {/* <div className="w-full h-20 mt-7 "><Task /></div>
    <div className="w-full h-20 mt-7 "><Task /></div>
    <div className="w-full h-20 mt-7 "><Task /></div> */}


<div className="flex flex-col md:flex-row justify-between w-[80%] m-auto h-fit mt-10 space-y-4 md:space-y-0 ">


<div className="md:w-[30%] m-auto w-[80%] md:m-0 flex flex-col justify-center  items-center h-[300px] bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-300 p-6">
   <h1 className="text-center text-main text-2xl mb-4">Upload Your Post</h1>
   <p className="text-md text-sec mb-6 text-center">Simply click the upload button and drag your file</p>
   <button className="w-[50%] py-3 bg-main rounded-lg text-white flex items-center justify-center shadow-md" onClick={()=>handleOpenModal("post")}>Upload</button>
   {isModalOpen.post && <UploadPostModal isOpen={true} onClose={handleCloseModal} />}
</div>

<div className="md:w-[30%] m-auto w-[80%] md:m-0 flex flex-col justify-center items-center  h-[300px] bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-300 p-6">
   <h1 className="text-center text-main text-2xl mb-4">Upload Degree files </h1>
   <p className="text-md text-sec mb-6 text-center">Simply click the upload button and drag your file</p>
   <button className="w-[50%] py-3 bg-main rounded-lg text-white flex items-center justify-center shadow-md" onClick={()=>handleOpenModal("degree")}>Upload</button>
   {isModalOpen.degree && <UploadExcelModal isOpen={true} onClose={handleCloseModal} />}
</div>


<div className="md:w-[30%] m-auto w-[80%] md:m-0 flex flex-col justify-center items-center  h-[300px] bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-300 p-6">
   <h1 className="text-center text-main text-2xl mb-4">Upload Your Task</h1>
   <p className="text-md text-sec mb-6 text-center">Simply click the upload button and drag your file</p>
   <button className="w-[50%] py-3 bg-main rounded-lg text-white flex items-center justify-center shadow-md" onClick={()=>handleOpenModal("task")}>Upload</button>
   {isModalOpen.task && <UploadPostModal isOpen={true} onClose={handleCloseModal} />}
</div>






    </div>
    </>
    

  );
};

export default DashBoard;




const Headermain = ({ icon, title, text, color, linkTo }) => {
  return (
    <NavLink to={linkTo} className={`flex items-center w-full drop-shadow-lg md:w-[25%] relative text-[#351b57] uppercase p-5 h-[120px] mt-5 rounded-lg gap-x-5 text-lg after:left-0 after:top-0 after:w-[1%] after:h-full after:bg-[#de68bf] after:absolute hover:after:w-full after:z-[-1] after:transition-all overflow-hidden hover:text-white`} style={{ background: color }}>
      <h1 className="text-[30px]">{icon}</h1>
      <div className="flex flex-col">
        <h1 className="text-2xl">{title}</h1>
        <h2 className="text-lg">{text}</h2>
      </div>
    </NavLink>
  );
};




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
