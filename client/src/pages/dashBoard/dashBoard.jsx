import { useEffect, useState } from "react";
import { FaSchool, FaUser } from "react-icons/fa";
import Calendar from "../../components/calender";
import { Link } from "react-router-dom";
import { getTopThree } from "../../functions/degrees";
import { FaCircleUser } from "react-icons/fa6";
import UploadPostModal from "../../components/uploadpostmodal";
import UploadTaskModal from "../../components/uploadTaskModal";
import { changeInviteCode, getInviteCodes } from "../../functions/invitCodes";
import UploadDegreeModal from './../../components/uploadDegreeModal';
import { Trans } from "react-i18next";
import Modal from 'react-modal';
import { newYear } from "../../functions/users";

Modal.setAppElement('#root')






const DashBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState({
    post: false,
    degree: false,
    task: false
  });

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const handleOpenConfirmationModal = () => {
    setIsConfirmationModalOpen(true);
  };

  const handleCloseConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
  };

  const handleConfirmNextYear = async () => {
    await newYear()
    setIsConfirmationModalOpen(false);
  };


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

  const fetchTopThree = async () => {
    const response = await getTopThree()

    setTopThree(response)
  };


  useEffect(() => {
    fetchTopThree()

  }, [])







  return (
    <>
      <div className="w-[95%] md:w-[80%] m-auto min-h-[300px] h-fit flex flex-col md:flex-row justify-between bg-[#b285f2] text-white mt-10 rounded-xl">
        <div className="w-full md:w-[50%] p-5 flex flex-col justify-between items-start h-full">
          <h1 className="text-2xl">
            <Trans>مرحبا</Trans> <Link to="/main/profile">{user.firstName} {user.lastName}</Link><Trans>بك في مدرسة وي</Trans>
          </h1>
          <h2 className="text-xl mt-4">
            <Trans>يمكنك التحميل بالضغط على تحميل واختيار الملف الخاص بك. كن حذرًا عند اختيار ملف. استمتع بوقتك!</Trans>
          </h2>
        </div>
        <div className="w-full md:w-[30%] p-5 flex flex-col justify-between items-start h-full m-auto">
          <img src="/assets/undraw_upload_re_pasx.svg" className="w-full" alt="" />
        </div>
      </div>


      <div className="w-[80%] m-auto h-fit flex flex-col md:flex-col md:text-md lg:flex-row shadow-2xl text-center mt-10   gap-2" >
        <Headermain icon={<FaSchool />} title={"المؤسسة"} text={"mansoura"} color={"#10b981"} />
        <Headermain icon={<FaUser />} linkTo={"/main/dashboard/data/student"} title={"الطلاب"} color={"#dade18"} />

        <Headermain icon={<FaUser />} linkTo={"/main/dashboard/data/teacher"} title={"المعلمون"} color={"#3b82f6"} />
        {user.role == "admin" &&<Headermain icon={<FaUser />} linkTo={"/main/dashboard/data/admin"} title={"المسؤولون"} color={"#10d981"} />}

      </div>




      <div className="flex flex-col md:flex-row justify-between w-[80%] m-auto h-fit mt-10 space-y-4 md:space-y-0">
        <div className="w-full md:w-[30%]">
          <Calendar />
        </div>
        <div className="w-full m-auto md:w-[50%]  flex  flex-row  justify-between  mt-10 gap-x-3 ">
          {
            topThree && topThree.map((student, index) => (
              <TopThreeCard key={index} img={student.picture} name={student.name} percent={student.finalDegree + "%"} code={student.code} />

            ))
          }

        </div>
      </div>





      <div className="flex flex-col md:flex-row justify-between w-[80%] m-auto h-fit mt-10 space-y-4 md:space-y-0 ">


        <div className="md:w-[30%] m-auto w-[80%] md:m-0 flex flex-col justify-center  items-center h-[300px] bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-300 p-6">
          <h1 className="text-center text-main dark:text-slate-200 text-2xl mb-4"><Trans>تحميل منشورك</Trans></h1>
          <p className="text-md text-sec  dark:text-slate-200 mb-6 text-center"><Trans>ما عليك سوى النقر على زر التحميل واسحب ملفك</Trans>e</p>
          <button className="w-[50%] py-3 bg-main rounded-lg text-white flex items-center justify-center shadow-md" onClick={() => handleOpenModal("post")}>Upload</button>
          {isModalOpen.post && <UploadPostModal isOpen={true} onClose={handleCloseModal} />}
        </div>

        <div className="md:w-[30%] m-auto w-[80%] md:m-0 flex flex-col justify-center items-center  h-[300px] bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-300 p-6">
          <h1 className="text-center text-main  dark:text-slate-200 text-2xl mb-4"><Trans>تحميل ملف الدرجات</Trans> </h1>
          <p className="text-md text-sec  dark:text-slate-200 mb-6 text-center"><Trans>ما عليك سوى النقر على زر التحميل واسحب ملفك</Trans></p>
          <button className="w-[50%] py-3 bg-main rounded-lg text-white flex items-center justify-center shadow-md" onClick={() => handleOpenModal("degree")}>Upload</button>
          {isModalOpen.degree && <UploadDegreeModal isOpen={true} onClose={handleCloseModal} />}
        </div>


        <div className="md:w-[30%] m-auto w-[80%] md:m-0 flex flex-col justify-center items-center  h-[300px] bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-300 p-6">
          <h1 className="text-center text-main  dark:text-slate-200 text-2xl mb-4"><Trans>قم بتحميل مهمتك</Trans></h1>
          <p className="text-md text-sec  dark:text-slate-200 mb-6 text-center"><Trans>ما عليك سوى النقر على زر التحميل واسحب ملفك</Trans></p>
          <button className="w-[50%] py-3 bg-main rounded-lg text-white flex items-center justify-center shadow-md" onClick={() => handleOpenModal("task")}>Upload</button>
          {isModalOpen.task && <UploadTaskModal isOpen={true} onClose={handleCloseModal} />}
        </div>

      </div>
      


      <InvitationCodes />


      <div className="w-[80%] flex-col flex items-center justify-center md:w-[60%] mt-10 m-auto">
      <Modal
        isOpen={isConfirmationModalOpen}
        onRequestClose={handleCloseConfirmationModal}
        contentLabel="Next Year Confirmation Modal"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg border-none outline-none bg-[#f7f2fb] dark:bg-slate-800 p-2 drop-shadow-lg min-h-[500px] h-fit w-80 md:w-[800px] lg:w-[1000px] "
        overlayClassName="bg-[#48535a] bg-opacity-50 w-full h-full fixed top-0 left-0"
      
      >
        <div className="w-full flex-col flex items-center justify-center  mt-10 m-auto">
        <div className="text-center bg-white drop-shadow-2xl rounded-xl w-[50%] p-5 m-auto">
          <p><Trans> هل انت متاكد من انك تريد ان تقوم بتقديم عام دراسي جديد ان قم بذلك سيتم ترقية الطلاب للصف المقبل وحذف جميع المنشورات</Trans></p>
          <div className="mt-4 flex gap-5 items-center justify-center">
            <button onClick={handleConfirmNextYear} className="mr-4 bg-green-500 text-white px-4 py-2 rounded" ><Trans>نعم</Trans></button>
            <button onClick={handleCloseConfirmationModal} className="bg-red-500 text-white px-4 py-2 rounded"><Trans>لا</Trans></button>
          </div>
        </div>
        </div>
      </Modal>

      {user.role == "admin" && <button className="w-full bg-main  p-3 rounded-3xl h-[50px] flex items-center justify-center text-white" onClick={handleOpenConfirmationModal}>
        <Trans>السنة التالية</Trans>
      </button>}

      
    
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
        <h1 className="text-lg "><Trans>{title}</Trans></h1>
      </div>
    </Link>
  );
};




const TopThreeCard = ({ img, name, percent, code }) => {
  return (
    <div
      className="flex flex-col items-center justify-center p-5 mt-10 md:mt-0 shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer bg-[#e4a039] w-[30%]  h-[100%]">
      <div className="w-32] h-full">
        {
          img ? <img className="rounded-full w-full h-full object-cover " src={img} alt={name} /> : <FaCircleUser className="text-white  w-full h-[40%]" />
        }
      </div>
      <h1 className="text-center text-sm md:text-2xl font-semibold text-white capitalize">{name}</h1>
      <h2 className="text-centertext-sm md:text-lg text-white mt-1">{percent}</h2>
      <p className="text-center text-white mt-2">{code}</p>
    </div>
  );
};



// const InvitationCodes = () => {
//   const [invitationCodes, setInvitationCodes] = useState(null)
//   const fetchInvitationCodes = async () => {

//     const response = await getInviteCodes()
//     setInvitationCodes(response)
//   }

//   useEffect(() => {
//     fetchInvitationCodes()

//   }, [])



//   const handleChangeCode = async (userType) => {
//     const response = await changeInviteCode(userType)
//     response&& fetchInvitationCodes()
//   }




//   return (
//     <div className="w-[70%] md:w-[80%]  mt-10 flex flex-col justify-between items-center drop-shadow-xl  m-auto borer[2px] border-black   mb-5">
//       <table className="border-b-2 border-main dark:border-slate-400 w-full text-center ">
//         <thead>
//           <tr className="bg-main text-white">
//             <th className="p-3 text-lg"><Trans>خاص ب</Trans></th>
//             <th className="p-3 text-lg"><Trans>الكود</Trans></th>
//             <th className="p-3 md:text-lg "><Trans>تغير الكود</Trans></th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             invitationCodes && invitationCodes.map((code, index) => (
//               <tr key={index} className="text-main dark:text-white">
//                 <td className="p-3 capitalize">{code.userType}</td>
//                 <td className="p-3">{code.code}</td>
//                 <td className="p-3 flex justify-center">
//                   <button className="bg-main text-white  w-full p-3 flex items-center justify-center rounded-lg md:w-[35%] text-sm md:text-lg" onClick={()=>handleChangeCode(code.userType)} ><Trans>تغير</Trans></button>
//                 </td>
//               </tr>
//             ))
//           }
//         </tbody>
//       </table>

//     </div>

//   )
// }


const InvitationCodes = () => {
  const [invitationCodes, setInvitationCodes] = useState(null);

  const fetchInvitationCodes = async () => {
    const response = await getInviteCodes();
    setInvitationCodes(response);
  };

  useEffect(() => {
    fetchInvitationCodes();
  }, []);

  const handleChangeCode = async (userType) => {
    const response = await changeInviteCode(userType);
    response && fetchInvitationCodes();
  };

  return (
    <div className="w-[70%] md:w-[80%] mt-10 flex flex-col justify-between items-center drop-shadow-xl m-auto borer[2px] border-black mb-5">
      <table className="border-b-2 border-main dark:border-slate-400 w-full text-center ">
        <thead>
          <tr className="bg-main text-white">
            <th className="p-3 text-lg"><Trans>خاص ب</Trans></th>
            <th className="p-3 text-lg"><Trans>الكود</Trans></th>
            <th className="p-3 md:text-lg "><Trans>تغير الكود</Trans></th>
          </tr>
        </thead>
        <tbody>
          {invitationCodes && (
            <>
              <tr className="text-main dark:text-white">
                <td className="p-3 capitalize">teacher</td>
                <td className="p-3 text-blue-400 select-text">{invitationCodes && invitationCodes.find((code) => code.userType === "teacher")?.code}</td>
                <td className="p-3 flex justify-center">
                  <button
                    className="bg-main text-white w-full p-3 flex items-center justify-center rounded-lg md:w-[35%] text-sm md:text-lg"
                    onClick={() => handleChangeCode('teacher')}
                  >
                    <Trans>تغير</Trans>
                  </button>
                </td>
              </tr>
              <tr className="text-main dark:text-white">
                <td className="p-3 capitalize">studentA</td>
                <td className="p-3 text-blue-400 select-text">{invitationCodes && invitationCodes.find((code) => code.userType === "studentA")?.code}</td>
                <td className="p-3 flex justify-center">
                  <button
                    className="bg-main text-white w-full p-3 flex items-center justify-center rounded-lg md:w-[35%] text-sm md:text-lg"
                    onClick={() => handleChangeCode('studentA')}
                  >
                    <Trans>تغير</Trans>
                  </button>
                </td>
              </tr>
              <tr className="text-main dark:text-white">
                <td className="p-3 capitalize">studentB</td>
                <td className="p-3 text-blue-400 select-text">{invitationCodes && invitationCodes.find((code) => code.userType === "studentB")?.code}</td>
                <td className="p-3 flex justify-center">
                  <button
                    className="bg-main text-white w-full p-3 flex items-center justify-center rounded-lg md:w-[35%] text-sm md:text-lg"
                    onClick={() => handleChangeCode('studentB')}
                  >
                    <Trans>تغير</Trans>
                  </button>
                </td>
              </tr>
              <tr className="text-main dark:text-white">
                <td className="p-3 capitalize">studentC</td>
                <td className="p-3 text-blue-400 select-text">{invitationCodes && invitationCodes.find((code) => code.userType === "studentC")?.code}</td>
                <td className="p-3 flex justify-center">
                  <button
                    className="bg-main text-white w-full p-3 flex items-center justify-center rounded-lg md:w-[35%] text-sm md:text-lg"
                    onClick={() => handleChangeCode('studentC')}
                  >
                    <Trans>تغير</Trans>
                  </button>
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};
