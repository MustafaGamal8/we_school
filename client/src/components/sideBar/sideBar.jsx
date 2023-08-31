import { NavLink } from 'react-router-dom'; // Make sure to import Link if you're using it
import { FiSettings } from 'react-icons/fi';
import { IoPersonOutline, IoLogOutOutline, IoSchoolOutline,IoArrowUp,IoPencil } from 'react-icons/io5';
import { CiViewTimeline } from 'react-icons/ci';
import { RxDashboard } from 'react-icons/rx';
import { useState,useEffect } from 'react';
import "./sideBar.css"
import { AiOutlinePlus, AiOutlineMinus, AiOutlineInfoCircle } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { logout } from '../../functions/auth';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Trans } from 'react-i18next';


const Sidebar = ({user}) => {
  const [iscollapsed, setIsCollapsed] = useState(true);
  const [advice, setAdvice] = useState('');
  const [isAdviceHidden, setIsAdviceHidden] = useState(true);

  const fetchAdvice = () => {
  axios.get('https://api.adviceslip.com/advice')
    .then(response => setAdvice(response.data.slip.advice))
    .catch(error => toast.error("check your internet connection"));
}

  useEffect(() => {
    fetchAdvice();
  }, []);
  


  return (
    <aside className={`  ${iscollapsed ? 'sideBarAnimation items-center' : 'sideBarAnimationR items-start'} bg-white drop-shadow-lg  lg:h-[100vh]   text-main  flex flex-col  items-center  relative dark:bg-slate-700 dark:text-white`}>


      <div className='absolute top-2 right-2 text-lg z-[2] cursor-pointer' onClick={() => setIsCollapsed(!iscollapsed)}>
        {iscollapsed ? <AiOutlinePlus /> : <AiOutlineMinus />}
      </div>

      <header className='w-full capitalize  '>

        <div className=" flex  lg:flex-col items-center justify-center gap-2  m-auto  lg:w-full w-max bg-white   overflow-hidden   dark:bg-slate-700 dark:text-white mt-5">
          <div className="flex  justify-center lg:mt-4 border-2 border-main m-auto rounded-full  h-16 w-16 overflow-hidden ">
            {user.picture ? ( <img  src={  "https://we-school-api.vercel.app"+user.picture} alt="" className='h-full w-full object-cover' />):<FaUserCircle className={` ${iscollapsed ? 'lg:text-3xl text-lg' : 'lg:text-6xl text-xl'} text-gray-200   w-full h-full`} />}

          </div>
          <div className="text-center mt-4">
          <div className="lg:mt-4 ">
            <p className={`${iscollapsed ? 'text-base' : 'text-xl'} font-semibold text-gray-800 flex items-center justify-center dark:text-white`}>{user.firstName} {iscollapsed  ?  null: user.lastName}</p>
            <p className={` ${iscollapsed ? 'text-sm ' : 'text-sm'} text-gray-600    flex items-center justify-center dark:text-gray-200`}>{user.role}</p>
          </div>
        </div>
        </div>
      </header>



      <main className={`  ${iscollapsed ?  '' : 'flex-col h-max' }  items-start lg:mt-10 my-3 uppercase flex lg:flex-col  h-full  gap-y-3 p-2`}>
        { (user.role === 'teacher' || user.role === 'admin') && 
        <MenuItem to={"/main/dashboard"} icon={<RxDashboard />} title={"لوحة التحكم"} iscollapsed={iscollapsed} />
        }
        <MenuItem to={"/main/profile"} icon={<IoPersonOutline />} title={"الملف الشخصي"} iscollapsed={iscollapsed} />
        <MenuItem to={"/main/timeline"} icon={<CiViewTimeline />} title={"المنشورات"} iscollapsed={iscollapsed} />
        <MenuItem to={"/main/degree"} icon={<IoSchoolOutline />} title={"الدرجات"} iscollapsed={iscollapsed} />
        <MenuItem to={"/main/todolist"} icon={<IoPencil />} title={"قائمة الانشطة"} iscollapsed={iscollapsed} />


        <MenuItem to={"/main/settings"} icon={<FiSettings />} title={"الاعدادات"} iscollapsed={iscollapsed} />

        <div  onClick={logout} className='w-full'><MenuItem to={"/"} icon={<IoLogOutOutline />} title={"تسجيل الخروج"} iscollapsed={iscollapsed} /></div>
        
        <div className={` ${iscollapsed ? 'hidden'  :null} w-full`}>
    
        <button className='w-full' onClick={() => {
          fetchAdvice();
          setIsAdviceHidden(false);
        }}>
          <MenuItem icon={<AiOutlineInfoCircle  />} title={"change advice"} iscollapsed={iscollapsed} />
          <Adviceitem title={ advice} iscollapsed={iscollapsed} />
        </button>
      </div>


      </main>





    </aside>);
}

export default Sidebar;




const MenuItem = ({ icon, title, iscollapsed ,to }) => {
  return (
    <NavLink to={to} className="flex items-center  gap-x-2 lg:gap-x-5 text-lg hover:bg-main rounded p-2 hover:text-white  lg:h-max h-full    w-full cd client">
      {icon}
      {!iscollapsed && <h1><Trans>{title}</Trans></h1>}
    </NavLink>

  );
}
const Adviceitem = ({ icon, title, iscollapsed}) => {
  return (
    <div  className="flex items-center  text-main bg-white p-1 gap-x-5 md:text-lg text-md hover:bg-main rounded  hover:text-white dark:bg-slate-800 dark:text-white">
      {icon}
      {!iscollapsed && <h1><Trans>{title}</Trans></h1>}
    </div>)}


