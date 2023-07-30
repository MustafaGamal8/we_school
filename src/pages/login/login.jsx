import "./login.css"
const Login=()=>{
    return(
        <>
    <div className="parent">


            <div className="textt">

                <h1>WE SCHOOL</h1>

                <div className="inp">
                    <input type="text" className="placeholder-black" placeholder="First Name" name="" id="" />
                    <input type="text" className="placeholder-black" placeholder="LAST Name" name="" id="" />

                </div>
                <div className="inp">
                    <input type="email" className="placeholder-black" placeholder="Email" name="" id="" />
                    <input type="password" className="placeholder-black" placeholder="password" name="" id="" />

                </div>
                <div className="lastinp"><input type="text" placeholder="Your Code" className="placeholder-black" /></div>


                <button className="btn">Submit</button>

            </div>




            <div className="img"><img src="/public/assets/nardin.jpg" alt="" /></div>

    </div>
        
        </>
    )
}

export default Login