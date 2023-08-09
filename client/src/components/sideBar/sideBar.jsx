import { NavLink } from 'react-router-dom'; // Make sure to import Link if you're using it
import { FiSettings } from 'react-icons/fi';
import { IoPersonOutline, IoLogOutOutline, IoSchoolOutline } from 'react-icons/io5';
import { CiViewTimeline } from 'react-icons/ci';
import { RxDashboard } from 'react-icons/rx';
import { useState } from 'react';
import "./sideBar.css"
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { logout } from '../../functions/auth';


const Sidebar = () => {
  const [iscollapsed, setIsCollapsed] = useState(false);
  
  const userJSON = localStorage.getItem('user');
  const user = JSON.parse(userJSON);

  


  return (
    <aside className={`  ${iscollapsed ? 'sideBarAnimation items-center' : 'sideBarAnimationR items-start'} bg-white drop-shadow-lg  h-[100vh] text-main  flex flex-col relative`}>


      <div className='absolute top-2 right-2 text-lg z-[2]' onClick={() => setIsCollapsed(!iscollapsed)}>
        {iscollapsed ? <AiOutlinePlus /> : <AiOutlineMinus />}
      </div>

      <header className='w-full capitalize'>

        <div className=" w-full bg-white   overflow-hidden">
          <div className="flex justify-center mt-4 border-2 border-main w-max m-auto rounded-full ">
            <FaUserCircle className={` ${iscollapsed ? 'text-3xl' : 'text-6xl'} text-gray-200  `} />
          </div>
          <div className="text-center mt-4">
            <p className={`${iscollapsed ? 'text-base' : 'text-xl'} font-semibold text-gray-800`}>{user.firstName} {iscollapsed  ?  null: user.lastName}</p>
            <p className={` ${iscollapsed ? 'text-sm ' : 'text-sm'} text-gray-600  `}>Student</p>
          </div>
        </div>

      </header>



      <main className='mt-10 uppercase flex flex-col  '>

        <MenuItem to={"/"} icon={<IoPersonOutline />} title={"Profile"} iscollapsed={iscollapsed} />
        <MenuItem to={"/dashboard"} icon={<RxDashboard />} title={"DashBoard"} iscollapsed={iscollapsed} />
        <MenuItem to={"/"} icon={<IoSchoolOutline />} title={"Degrees"} iscollapsed={iscollapsed} />

        <MenuItem to={"/"} icon={<FiSettings />} title={"Settings"} iscollapsed={iscollapsed} />
        <MenuItem to={"/"} icon={<CiViewTimeline />} title={"Timeline"} iscollapsed={iscollapsed} />

        <div onClick={logout}><MenuItem to={"/"} icon={<IoLogOutOutline />} title={"Logout"} iscollapsed={iscollapsed} /></div>


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



