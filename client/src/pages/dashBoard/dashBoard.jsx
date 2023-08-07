
import { Link } from 'react-router-dom';
import SideBar from '../../components/sideBar';






const DashBoard = () => {

  const userJSON = localStorage.getItem('user');
  const user = JSON.parse(userJSON);





  return ( 
    <>
    {
      !user ? <><Link to="/login"  className='p-1 bg-main text-white text-2xl m-auto rounded-md'>please login</Link></> :
       <main className='flex justify-between  w-full'>
       <SideBar />
        

        <section className='bg-blue-400 h-80 w-full m-2'>
        heloo {user.firstName}
        </section>
       
       
       
       
       </main>
    }
    </>
   );
}
 
export default DashBoard;