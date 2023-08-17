import { NavLink } from 'react-router-dom'; // Make sure to import Link if you're using it
import { FiSettings } from 'react-icons/fi';
import { IoPersonOutline, IoLogOutOutline, IoSchoolOutline,IoArrowUp } from 'react-icons/io5';
import { CiViewTimeline } from 'react-icons/ci';
import { RxDashboard } from 'react-icons/rx';
import { useState,useEffect } from 'react';
import "./sideBar.css"
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { logout } from '../../functions/auth';


const Sidebar = () => {
  const [iscollapsed, setIsCollapsed] = useState(false);
  const [advice, setAdvice] = useState('');
  const [isAdviceHidden, setIsAdviceHidden] = useState(true);

  const fetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => setAdvice(data.slip.advice))
      .catch(error => alert(error ,"check your internet connection"));
  }

  useEffect(() => {
    fetchAdvice();
  }, []);
  
  const userJSON = localStorage.getItem('user');
  const user = JSON.parse(userJSON);

  


  return (
    <aside className={`  ${iscollapsed ? 'sideBarAnimation items-center' : 'sideBarAnimationR items-start'} bg-white drop-shadow-lg  h-[100vh] text-main  flex flex-col relative`}>


      <div className='absolute top-2 right-2 text-lg z-[2] cursor-pointer' onClick={() => setIsCollapsed(!iscollapsed)}>
        {iscollapsed ? <AiOutlinePlus /> : <AiOutlineMinus />}
      </div>

      <header className='w-full capitalize '>

        <div className=" w-full bg-white   overflow-hidden ">
          <div className="flex justify-center mt-4 border-2 border-main w-max m-auto rounded-full ">
            <FaUserCircle className={` ${iscollapsed ? 'text-3xl' : 'text-6xl'} text-gray-200  `} />
          </div>
          <div className="text-center mt-4">
            <p className={`${iscollapsed ? 'text-base' : 'text-xl'} font-semibold text-gray-800 flex items-center justify-center`}>{user.firstName} {iscollapsed  ?  null: user.lastName}</p>
            <p className={` ${iscollapsed ? 'text-sm  ' : 'text-sm'} text-gray-600 flex items-center justify-center `}>Student</p>
          </div>
        </div>

      </header>



      <main className='mt-10 uppercase flex flex-col  '>
        <MenuItem to={"/main/dashboard"} icon={<RxDashboard />} title={"DashBoard"} iscollapsed={iscollapsed} />
        <MenuItem to={"/main/profile"} icon={<IoPersonOutline />} title={"Profile"} iscollapsed={iscollapsed} />
        <MenuItem to={"/main/timeline"} icon={<CiViewTimeline />} title={"Timeline"} iscollapsed={iscollapsed} />
        <MenuItem to={"/main/degree"} icon={<IoSchoolOutline />} title={"Degrees"} iscollapsed={iscollapsed} />

        <MenuItem to={"/main/settings"} icon={<FiSettings />} title={"Settings"} iscollapsed={iscollapsed} />

        <div onClick={logout}><MenuItem to={"/"} icon={<IoLogOutOutline />} title={"Logout"} iscollapsed={iscollapsed} /></div>
        
        <div className='w-full border-[1px] border-solid '>
    
        <Adviceitem title={ advice} iscollapsed={iscollapsed} />
        <button className='w-full' onClick={() => {
          fetchAdvice();
          setIsAdviceHidden(false);
        }}>
          <MenuItem icon={<IoSchoolOutline />} title={"change advice"} iscollapsed={iscollapsed} />
        </button>
      </div>


      </main>





    </aside>);
}

export default Sidebar;




const MenuItem = ({ icon, title, iscollapsed ,to }) => {
  return (
    <NavLink to={to} className="flex items-center  gap-x-5 text-lg hover:bg-main rounded p-2 hover:text-white m-2">
      {icon}
      {!iscollapsed && <h1>{title}</h1>}
    </NavLink>

  );
}
const Adviceitem = ({ icon, title, iscollapsed}) => {
  return (
    <NavLink  className="flex items-center  bg-main text-white p-2 gap-x-5 text-sm hover:bg-main rounded  hover:text-white m-2">
      {icon}
      {!iscollapsed && <h1>{title}</h1>}
    </NavLink>)}


