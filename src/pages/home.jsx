import {CiUser } from "react-icons/ci"
import {LuSchool} from "react-icons/lu"
import {MdPhone,MdHome,MdListAlt,MdSchool} from "react-icons/md"
import { Link } from "react-router-dom";


const Home = () => {
  return ( 

    <>
    <nav className="flex justify-between px-2 drop-shadow bg-white h-20">
      
      <img src="/logo.jpg" alt="" />

      <div className="flex items-center justify-center gap-3">
        <Link to="" className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg"><h1>تواصل</h1> <MdPhone className="text-xl" /></Link>
        <Link to="" className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg"><h1>شروط التقديم</h1> <MdListAlt /></Link>
        <Link to="" className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg"><h1>عن المدرسة</h1> <MdSchool  className="text-xl"/></Link>
        <Link to="" className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg"><h1>الصفحة الرئيسية</h1> <MdHome className="text-xl"/></Link>

      </div>
      
      <Link to="/login" className="flex items-center justify-center cursor-pointer relative m-2  px-2 hover:text-white after:-z-[1] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg"><h1>تسجيل الدخول</h1><CiUser className="text-2xl" /> </Link>

    </nav>

    <main></main>

    <footer></footer>
    
    </>
   );
}
 
export default Home;