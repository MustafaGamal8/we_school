import { useEffect, useState } from "react";
import {  FaSchool, FaUser } from "react-icons/fa";
import Calendar from "../../components/calender";
import { Link } from "react-router-dom";
import UploadPostModal from "../../components/uploadpostmodal";
import { getAllDegrees } from "../../functions/degrees";
import { FaCircleUser } from "react-icons/fa6";
import UploadDegreeModal from "../../components/UploadDegreeModal";
import UploadTaskModal from "../../components/uploadTaskModal";






const DashBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState({
    post: false,
    degree: false,
    task: false
  });


  const handleOpenModal = (modalName) => {
    setIsModalOpen({
      ...isModalOpen,
      [modalName]: true
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const user = JSON.parse(localStorage.getItem('user'));

  const [topThree, setTopThree] = useState()

  const getTopThree = async () => {
    const degreeStore = await getAllDegrees();
    const degrees = [];

    degreeStore.map((student) => {
      let finalDegree = 0;
      let studentDegree = 0;

      student.subjects.map((subject) => {
        finalDegree += subject.finalDegree;
        studentDegree += subject.studentDegree;
      });

      degrees.push({
        name: student.name,
        code: student.code,
        picture: student.picture,
        finalDegree: (studentDegree / finalDegree) * 100,
      });
    });

    degrees.sort((a, b) => b.finaldegree - a.finaldegree);

    setTopThree(degrees.slice(0, 3))
  };


  useEffect(() => {
    getTopThree()
      ;
  }, [])







  return (
    <>
      <div className="w-[95%] md:w-[80%] m-auto min-h-[300px] h-fit flex flex-col md:flex-row justify-between bg-[#b285f2] text-white mt-10 rounded-xl">
        <div className="w-full md:w-[50%] p-5 flex flex-col justify-between items-start h-full">
          <h1 className="text-2xl">
            Welcome <Link to="/main/profile">{user.firstName} {user.lastName}</Link> to We School Dashboard
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
        <Headermain icon={<FaSchool />} title={"Bransh"} text={"mansoura"} color={"#10b981"} />
        <Headermain icon={<FaUser />} linkTo={"/main/dashboard/data/student"} title={"students"}  color={"#dade18"} />

        <Headermain icon={<FaUser />} linkTo={"/main/dashboard/data/teacher"} title={"teachers"} color={"#3b82f6"} />
        <Headermain icon={<FaUser />} linkTo={"/main/dashboard/data/admin"} title={"Admin"}  color={"#10d981"} />

      </div>




      <div className="flex flex-col md:flex-row justify-between w-[80%] m-auto h-fit mt-10 space-y-4 md:space-y-0">
        <div className="w-full md:w-[30%]">
          <Calendar />
        </div>
        <div className="w-[80%] m-auto md:w-[50%] flex flex-col md:flex-row  justify-between h-full mt-10 gap-x-3 ">
          {
            topThree && topThree.map((student, index) => (

              <TopThreeCard img={student.picture} name={student.name } percent={student.finalDegree + "%"} code={student.code} />


            ))
          }

        </div>
      </div>





      <div className="flex flex-col md:flex-row justify-between w-[80%] m-auto h-fit mt-10 space-y-4 md:space-y-0 ">


        <div className="md:w-[30%] m-auto w-[80%] md:m-0 flex flex-col justify-center  items-center h-[300px] bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-300 p-6">
          <h1 className="text-center text-main dark:text-slate-200 text-2xl mb-4">Upload Your Post</h1>
          <p className="text-md text-sec  dark:text-slate-200 mb-6 text-center">Simply click the upload button and drag your file</p>
          <button className="w-[50%] py-3 bg-main rounded-lg text-white flex items-center justify-center shadow-md" onClick={() => handleOpenModal("post")}>Upload</button>
          {isModalOpen.post && <UploadPostModal isOpen={true} onClose={handleCloseModal} />}
        </div>

        <div className="md:w-[30%] m-auto w-[80%] md:m-0 flex flex-col justify-center items-center  h-[300px] bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-300 p-6">
          <h1 className="text-center text-main  dark:text-slate-200 text-2xl mb-4">Upload Degree files </h1>
          <p className="text-md text-sec  dark:text-slate-200 mb-6 text-center">Simply click the upload button and drag your file</p>
          <button className="w-[50%] py-3 bg-main rounded-lg text-white flex items-center justify-center shadow-md" onClick={() => handleOpenModal("degree")}>Upload</button>
          {isModalOpen.degree && <UploadDegreeModal isOpen={true} onClose={handleCloseModal} />}
        </div>


        <div className="md:w-[30%] m-auto w-[80%] md:m-0 flex flex-col justify-center items-center  h-[300px] bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-300 p-6">
          <h1 className="text-center text-main  dark:text-slate-200 text-2xl mb-4">Upload Your Task</h1>
          <p className="text-md text-sec  dark:text-slate-200 mb-6 text-center">Simply click the upload button and drag your file</p>
          <button className="w-[50%] py-3 bg-main rounded-lg text-white flex items-center justify-center shadow-md" onClick={() => handleOpenModal("task")}>Upload</button>
          {isModalOpen.task && <UploadTaskModal isOpen={true} onClose={handleCloseModal} />}
        </div>






      </div>




      <div className="w-[70%] md:w-[80%]  flex flex-col justify-between items-center drop-shadow-xl  m-auto borer[2px] border-black  ">
        <div className="flex items-center justify-between mt-5 boreder border-slate-300 w-full text-main dark:text-white">
          <h1 className="text-lg  " > grade</h1>
          <h2 className="text-lg">code</h2>
          <button className="bg-main text-white md:w-[150px] p-3 flex items-center justify-center rounded-lg w-[35%] text-sm md:text-lg ">change code</button>



        </div>




      </div>




    </>


  );
};

export default DashBoard;




const Headermain = ({ icon, title, text, color, linkTo }) => {
  return (
    <Link to={linkTo} className={`flex items-center w-full drop-shadow-lg md:w-[100%] relative text-[#351b57] uppercase p-5 h-[120px] mt-5 rounded-lg gap-x-5 text-lg after:left-0 after:top-0 after:w-[1%] after:h-full after:bg-main after:absolute hover:after:w-full after:z-[-1] after:transition-all overflow-hidden hover:text-white`} style={{ background: color }}>
      <h1 className="text-[30px]">{icon}</h1>
      <div className="flex flex-col">
        <h1 className="text-2xl">{title}</h1>
      </div>
    </Link>
  );
};




const TopThreeCard = ({ img, name, percent, code }) => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full p-5 mt-10 md:mt-0 shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer bg-main ">
      <div className="w-32 h-20">
        {
          img ? <img className="rounded-full w-full h-full object-cover mb-4" src={img} alt={name} /> : <FaCircleUser className="text-white text-2xl w-full h-[80%]" />
        }
      </div>
      <h1 className="text-center text-2xl font-semibold text-white">{name}</h1>
      <h2 className="text-center text-xl text-white mt-1">{percent}</h2>
      <p className="text-center text-white mt-2">{code}</p>
    </div>
  );
};
