import { useState } from "react";
import {CiUser } from "react-icons/ci"
import {MdPhone,MdHome,MdListAlt,MdSchool,MdMenu,MdPeopleAlt} from "react-icons/md"
import { Link } from "react-router-dom";
import "./login.css"


const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  
 const [isMenuOpen,setIsMenuOpen] = useState(false)
 const handleMenuClick = ()=>{
  setTimeout(() => {
    setIsMenuOpen(false)
  }, 300);
 }

  return (
    <>
    
    <img className=" absolute top-0 right-0 z-[1] w-full drop-shadow-xl" src="/assets/wave.svg" alt="" />

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
    


    <div className=" flex flex-col gap-5 lg:h-[100vh] ">
        

        <h1 className="text-center text-white text-3xl">{isLogin == true ?'login' :'sign up' }</h1>
  
        <div className="parent2 drop-shadow-md   shadow-xl">
  
          <div className="textt2 ">
  
            <h1 className="text-center">WE SCHOOL</h1>
  
            {
  
              isLogin == true ? <div className="inp2">
              <input type="text" className="placeholder-black" placeholder="Email" required name="" id="" />
              <input type="password" className="placeholder-black" placeholder="Password" required name="" id="" />
            <Link to="" className="text-center mt-5 text-red-600 cursor-pointer p-3"  >Forget password</Link>
            </div>:<>
            <div className="inp">
              <input type="text" className="placeholder-black" placeholder="First Name" name="" id="" />
              <input type="text" className="placeholder-black" placeholder="Last Name" name="" id="" />
  
            </div>
            <div className="inp">
              <input type="email" className="placeholder-black" placeholder="Email" name="" id="" />
              <input type="password" className="placeholder-black" placeholder="Password" name="" id="" />
  
            </div>
            <div className="lastinp"><input type="text" placeholder="Your Code" className="placeholder-black" />
            <br />
            </div>
            <div className="lable flex mt-4">
              <input type="checkbox" />
              <p className="text-sm ">I agree every thing</p>
            </div>
            </>
  
            }
  
            <div className="btn2 ">{isLogin == true ? 'login':'sign up' }</div>
            <div onClick={()=> setIsLogin(!isLogin)} className="btn2 w-[50%] mt-5">{isLogin == true ?' or sign up':'or  login '} </div>
  
  
          </div>
  
  
          <div className="img "><img src="/public/assets/nardin.jpg" alt="" /></div>
  
        </div>
  
      </div>
    </>
  )
}

export default Login