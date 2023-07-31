import { useState } from "react";
import {CiUser } from "react-icons/ci"
import {MdPhone,MdHome,MdListAlt,MdSchool,MdMenu} from "react-icons/md"
import { Link } from "react-router-dom";
import "./home.css"


const Home = () => {
 const [isMenuOpen,setIsMenuOpen] = useState(false)

 const handleMenuClick = ()=>{
  setTimeout(() => {
    setIsMenuOpen(false)
  }, 300);
 }
  
  return ( 

    <>
    <nav className="relative flex items-center justify-between px-2 drop-shadow bg-white h-20 text-main z-[10]  ">

      {/* sm screen */}
      <div onClick={()=> setIsMenuOpen(!isMenuOpen)} className="flex md:hidden text-3xl hover:bg-main hover:text-white rounded-full cursor-pointer p-1 transition-all "><MdMenu/></div>


      <div className={` ${isMenuOpen ?  "menuAnimitionOpen flex md:hidden":"hidden"} absolute top-[100%] left-0 bg-white text-main  w-full h-0  flex-col-reverse items-center justify-center   whitespace-nowrap`}>
        <Link onClick={handleMenuClick} to="" className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] z-[2]  hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg"><h1>تواصل</h1> <MdPhone className="text-xl" /></Link>
        <Link onClick={handleMenuClick} to="" className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] z-[2] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg"><h1>شروط التقديم</h1> <MdListAlt /></Link>
        <Link onClick={handleMenuClick} to="" className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] z-[2] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg"><h1>عن المدرسة</h1> <MdSchool  className="text-xl"/></Link>
        <Link onClick={handleMenuClick} to="" className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] z-[2] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg"><h1>الصفحة الرئيسية</h1> <MdHome className="text-xl"/></Link>

      </div>
      
      {/* end of sm screen */}
      
      <img src="/logo.jpg" alt=""  className="h-full "/>

      <div className="hidden  md:flex items-center justify-center gap-3  whitespace-nowrap">
        <Link to="" className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg"><h1>تواصل</h1> <MdPhone className="text-xl" /></Link>
        <Link to="" className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg"><h1>شروط التقديم</h1> <MdListAlt /></Link>
        <Link to="" className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg"><h1>عن المدرسة</h1> <MdSchool  className="text-xl"/></Link>
        <Link to="" className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg"><h1>الصفحة الرئيسية</h1> <MdHome className="text-xl"/></Link>

      </div>
      
      <Link to="/login" className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg font-semibold">تسجيل الدخول<CiUser className="md:text-2xl text-lg " /> </Link>





    </nav>

    <main className="relative  w-full flex flex-col gap-8">
      <img className=" absolute top-0 right-0 -z-10 w-full drop-shadow-xl" src="/assets/wave.svg" alt="" />


      <div className="text-center  mt-20 bg-white rounded-lg w-80  m-auto py-2 drop-shadow">
      <h1 className="text-xl md:text-3xl drop-shadow">مدرسة وي <br /> للتكنولوجيا التطبيقية</h1>
      <h2 className="mt-2 md:text-2xl  text-[#6e237e] relative w-max m-auto text-animition ">في المنصورة</h2>
    </div>

      <section className="flex flex-col md:flex-row items-center justify-around px-5 w-full  mt-50  md:pt-40 pt-20 text-right">
      <div className="overflow-hidden bg-white p-2 rounded-lg drop-shadow-2xl relative">
      <img
        className="md:h-96 h-60 rounded-lg transition-all duration-500 transform hover:scale-105"
        src="/assets/student.jpg"
        alt="الطلاب في مدرسة WeTech للتكنولوجيا التطبيقية"
      />

      <div className="absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <h2 className="text-2xl font-semibold mb-4">مدرسة وي للتكنولوجيا التطبيقية</h2>
        <p className="text-lg text-center">
          تعلم  البرمجة واستكشف عالمًا مشوقًا في تقنية الاتصالات والشبكات في مدرسة وي.
        </p>
        <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-4 py-2 mt-4 rounded">
          استكشف البرامج
        </button>
      </div>
    </div>

      <div className="md:w-[520px]  flex flex-col items-end justify-end  gap-3 mt-5"> 
        <p className="font-semibold text-lg">ما هي ؟</p>
        <h1 className="text-main text-3xl semi semi">مدرسة وي للتكنولوجيا التطبيقية</h1>
        <p className="md:text-lg">مرحبًا بك في "مدرسة وي للتكنولوجيا التطبيقية"! مدرستنا هي مؤسسة رائدة متخصصة في تقديم تعليم متميز في مجالات البرمجة والاتصالات والشبكات. في "وي للتكنولوجيا التطبيقية"، نسعى لتمكين طلابنا بالمعرفة والمهارات اللازمة للتفوق في عالم التكنولوجيا سريع التطور.</p>
      </div>  

      </section>

      <img className="m-auto h-12 mt-10"  src="/assets/mouseAnimition.gif" />

      <section   className="w-full h-36 bg-white  border-y flex items-center justify-evenly gap-5 p-5">
        <img className="h-full " src="/assets/Picture1.png" alt="" />
        <img className="h-full " src="/assets/Picture2.png" alt="" />
        <img className="h-full " src="/assets/Picture3.png" alt="" />
        <img className="h-full " src="/assets/Picture4.png" alt="" />
        <img className="h-full " src="/assets/Picture5.png" alt="" />
        <img className="h-full " src="/assets/Picture6.png" alt="" />
      </section>
      
    </main>

    <footer></footer>
    
    </>
   );
}
 
export default Home;