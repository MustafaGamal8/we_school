import {CiUser} from "react-icons/ci"


const Home = () => {
  return ( 

    <>
    <nav className="flex justify-between px-2 drop-shadow bg-white h-20">
      
      <img src="/logo.jpg" alt="" />

      <div className="flex items-center justify-center gap-3">
        <a href="" className="flex items-center justify-center cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:w-0  after:rounded-lg">تواصل</a>
        <a href="" className="flex items-center justify-center cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:w-0  after:rounded-lg">شروط التقديم</a>
        <a href="" className="flex items-center justify-center cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:w-0  after:rounded-lg">عن المدرسة</a>
        <a href="" className="flex items-center justify-center cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:w-0  after:rounded-lg">الصفحة الرئيسية</a>

      </div>
      
      <div className="flex items-center justify-center cursor-pointer relative m-2  px-2 hover:text-white after:-z-[1] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:w-0  after:rounded-lg"><h1>تسجيل الدخول</h1><CiUser className="text-2xl" /> </div>

    </nav>

    <main></main>

    <footer></footer>
    
    </>
   );
}
 
export default Home;