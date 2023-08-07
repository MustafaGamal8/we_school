import {CgProfile} from 'react-icons/cg'
import { CiViewTimeline } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const SideBar = () => {
    
  const userJSON = localStorage.getItem('user');
  const user = JSON.parse(userJSON);

  return ( 
    <section  className=" bg-white drop-shadow border-r w-[300px] h-[100vh] p-5">


      <Link to="/Profile" className='flex  items-center gap-3 cursor-pointer '>
        <div><CgProfile className='text-3xl text-sec'/></div>
        <div>
        <h1> <span className='text-main text-xl'>{user.firstName}</span> {user.lastName}</h1>
        <p className='text-gray-500'>GradeA</p>
        </div>        
      </Link>




      <section className='p-2 flex flex-col items-center'>

        <div className='flex items-center justify-start gap-2 p-2 rounded-lg hover:bg-sec  hover:text-white w-full cursor-pointer  text-lg transition-all duration-300' ><CiViewTimeline className=' text-xl'/> TimeLine</div>

      </section>
     




    </section>
   );
}
 
export default SideBar;