import {FaCircleUser} from "react-icons/fa6"
import {AiFillEye, AiOutlineHeart} from "react-icons/ai"
import Slider from './slider';

const slides = [ { img: "/assets/nardin.jpg" }, { img: "/assets/school/school1.jpeg" }, { img: "/assets/school/school2.jpeg" }, { img: "/assets/school/school3.jpeg" }, { img: "/assets/school/school4.jpeg" } ]

const Post = () => {
  return ( 
  <div className=" w-[80%] md:w-[50%] lg:w-[40%] m-auto  border p-2 rounded text-sec bg-white  drop-shadow-xl">

    <div className="flex items-center gap-3 text-xl mt-2">
      <FaCircleUser className="text-gray-500 text-2xl" />
      <div className="flex flex-col items-start">
        <h1 className="text-sec">Eng.Mohamed</h1>
        <p className="text-lg text-gray-600">Teacher</p>
      </div>
    </div>

    <div className="mt-5 rounded p-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque, repellendus, qui cum nobis atque, eius nulla dolorum officiis quia esse libero quas velit numquam quis itaque dolor! Impedit, nemo?r
    </div>
    
    <div className="h-96  p-2   bg-white drop-shadow rounded-md ">
      <Slider slides={slides} /> 
       </div>


    <div className="flex items-center justify-around w-full mt-7 ">
      <div className="flex flex-col items-center gap-2 text-lg">
        <div className="group bg-white drop-shadow-md p-2 rounded-md cursor-pointer"><AiOutlineHeart  className="group-hover:text-red-400 "/></div>
        0
      </div>
      
      
      <button className="p-3 rounded bg-main text-white drop-shadow  flex items-center gap-2 hover:scale-90 transition-all">Show Files <AiFillEye/></button>
      
    </div>
    
    <div className="flex w-full p-1 justify-around capitalize text-white bg-main rounded-b"><h1 className="bg-main  p-1 rounded">photos : {slides.length}</h1>  <h1 className="bg-main  p-1 rounded">files :{"0"}</h1></div>
  

  </div> 
  );
}
 
export default Post;