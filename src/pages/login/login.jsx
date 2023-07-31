import "./login.css"
const Login = () => {
  return (
    <div className="bg-[#5c2e91]  h-[100vh] flex  flex-col ">
      <h1 className="mt-5 text-center text-white text-3xl ">Login</h1>


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
          <div className="lastinp"><input type="text" placeholder="Your Code" className="placeholder-black" /></div>


          <button className="btn">Login</button>

        </div>


        <div className="img"><img src="/public/assets/nardin.jpg" alt="" /></div>

      </div>

    </div>
  )
}

export default Login