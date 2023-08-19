import { NavLink } from 'react-router-dom'; // Make sure to import Link if you're using it
import { FiSettings } from 'react-icons/fi';
import { IoPersonOutline, IoLogOutOutline, IoSchoolOutline,IoArrowUp } from 'react-icons/io5';
import { CiViewTimeline } from 'react-icons/ci';
import { RxDashboard } from 'react-icons/rx';
import { useState,useEffect } from 'react';
import "./sideBar.css"
import { AiOutlinePlus, AiOutlineMinus, AiOutlineInfoCircle } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { logout } from '../../functions/auth';
import axios from 'axios';


const Sidebar = ({user}) => {
  const [iscollapsed, setIsCollapsed] = useState(true);
  const [advice, setAdvice] = useState('');
  const [isAdviceHidden, setIsAdviceHidden] = useState(true);

  const fetchAdvice = () => {
  axios.get('https://api.adviceslip.com/advice')
    .then(response => setAdvice(response.data.slip.advice))
    .catch(error => alert(error, "check your internet connection"));
}

  useEffect(() => {
    fetchAdvice();
  }, []);
  


  return (
    <aside className={`  ${iscollapsed ? 'sideBarAnimation items-center' : 'sideBarAnimationR items-start'} bg-white drop-shadow-lg  lg:h-[100vh]   text-main  flex flex-col  items-center  relative`}>


      <div className='absolute top-2 right-2 text-lg z-[2] cursor-pointer' onClick={() => setIsCollapsed(!iscollapsed)}>
        {iscollapsed ? <AiOutlinePlus /> : <AiOutlineMinus />}
      </div>

      <header className='w-full capitalize  '>

        <div className=" flex  lg:flex-col items-center justify-center gap-2  m-auto  lg:w-full w-max bg-white   overflow-hidden  ">
          <div className="flex  justify-center lg:mt-4 border-2 border-main w-max m-auto rounded-full ">
            <FaUserCircle className={` ${iscollapsed ? 'lg:text-3xl text-lg' : 'lg:text-6xl text-xl'} text-gray-200  `} />
          </div>
          <div className="text-center mt-4">
          <div className="lg:mt-4 ">
            <p className={`${iscollapsed ? 'text-base' : 'text-xl'} font-semibold text-gray-800 flex items-center justify-center`}>{user.firstName} {iscollapsed  ?  null: user.lastName}</p>
            <p className={` ${iscollapsed ? 'text-sm ' : 'text-sm'} text-gray-600    flex items-center justify-center`}>{user.role}</p>
          </div>
        </div>
        </div>
      </header>



      <main className={`  ${iscollapsed ?  '' : 'flex-col h-max' }  items-start lg:mt-10 my-3 uppercase flex lg:flex-col  h-full  gap-y-3 p-2`}>
        <MenuItem to={"/main/dashboard"} icon={<RxDashboard />} title={"DashBoard"} iscollapsed={iscollapsed} />
        <MenuItem to={"/main/profile"} icon={<IoPersonOutline />} title={"Profile"} iscollapsed={iscollapsed} />
        <MenuItem to={"/main/timeline"} icon={<CiViewTimeline />} title={"Timeline"} iscollapsed={iscollapsed} />
        <MenuItem to={"/main/degree"} icon={<IoSchoolOutline />} title={"Degrees"} iscollapsed={iscollapsed} />

        <MenuItem to={"/main/settings"} icon={<FiSettings />} title={"Settings"} iscollapsed={iscollapsed} />

        <div  onClick={logout} className='w-full'><MenuItem to={"/"} icon={<IoLogOutOutline />} title={"Logout"} iscollapsed={iscollapsed} /></div>
        
        <div className={` ${iscollapsed ? 'hidden'  :null} w-full border-[1px] border-solid `}>
    
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
      {!iscollapsed && <h1>{title}</h1>}
    </NavLink>

  );
}
const Adviceitem = ({ icon, title, iscollapsed}) => {
  return (
    <div  className="flex items-center  text-main bg-white p-1 gap-x-5 md:text-sm text-xs hover:bg-main rounded  hover:text-white ">
      {icon}
      {!iscollapsed && <h1>{title}</h1>}
    </div>)}


