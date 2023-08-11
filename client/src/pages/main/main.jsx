
import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../../components/sideBar/sideBar';






const Main = () => {

  const userJSON = localStorage.getItem('user');
  const user = JSON.parse(userJSON);





  return ( 
    <>
    {
      !user ? <><Link to="/login"  className='p-1 bg-main text-white text-2xl m-auto rounded-md'>please login</Link></> :
       <main className='flex justify-between  w-full'>
       <Sidebar />
        

        <section className=' w-full'>
        <Outlet />
        </section>
       
       
       
       
       </main>
    }
    </>
   );
}
 
export default Main;