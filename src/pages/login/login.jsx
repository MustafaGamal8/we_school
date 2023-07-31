import "./login.css"
import { Link } from "react-router-dom";
import { useState } from "react";


const Login = () => {
  return (
    <div className="bg-[#5c2e91]  h-[120vh] flex  flex-col ">
      {/* <h1 className="mt-5 text-center text-white text-3xl mb-5 ">sign up</h1> */}
{/* 

      <div className="parent drop-shadow-md ">

        <div className="textt">

          <h1>WE SCHOOL</h1>

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
            <p className="text-sm">Iagree every thing</p>
          </div>


          <button className="btn">Sign up</button>


          <div className="lable flex mt-6 items-center flex-col">
            
            
          </div>

        </div>


        <div className="img"><img src="/public/assets/nardin.jpg" alt="" /></div>

      </div> */}











      <div className="bg-[#5c2e91]  h-[120vh] flex  flex-col ">
      <h1 className=" text-center text-white text-3xl  ">Login</h1>


      <div className="parent2 drop-shadow-md ">

        <div className="textt2">

          <h1 className="text-center">WE SCHOOL</h1>

          <div className="inp2">
            <input type="text" className="placeholder-black" placeholder="Email" required name="" id="" />
            <input type="password" className="placeholder-black" placeholder="Password" required name="" id="" />
          <Link to="" className="text-center mt-5 text-red-600 cursor-pointer p-3"  >Forget password</Link>


          </div>


          <button className="btn2">Login</button>
          <button className="btn2">sign up</button>


        </div>


        <div className="img"><img src="/public/assets/nardin.jpg" alt="" /></div>

      </div>

   







    </div>
    </div>

    



  )
}

export default Login