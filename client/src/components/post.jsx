import { FaCircleUser } from "react-icons/fa6"
import { AiFillEye, AiOutlineHeart } from "react-icons/ai"
import Slider from './slider';
import { toggleLike } from "../functions/posts";


const Post = ({ handleOpenModal, post }) => {
  const { _id, user, files, content , likes } = post
  const PostFiles = [];
  const slides = []
  
  const currentUser = JSON.parse(localStorage.getItem('user'))


  const serverUrl = "https://we-school-api.vercel.app/"


  files.map(file => {
    file.fileType.includes("image") ? slides.push({ img: serverUrl + file.fileLink }) : null
    PostFiles.push(file)

  })
  return (
    <div className=" w-[95%] md:w-[50%] lg:w-[40%] m-auto  border p-2 rounded text-sec bg-white  drop-shadow-xl">

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-3 text-xl mt-2">
          <FaCircleUser className="text-sec text-2xl" />
          <h1 className="text-sec capitalize">{user.firstName} {user.lastName}</h1>
        </div>
        <div className="b" >
          <p className="text-sm text-gray-600 ">{user.email}</p>
          <p className="text-sm text-gray-600">{user.role}</p>
        </div>
      </div>

      <div className="mt-5 rounded p-2">
        {content}
      </div>

      <div className="h-96  p-2   bg-white drop-shadow rounded-md ">
        <Slider slides={slides} coverOrContain="object-contain" />
      </div>


      <div className="flex items-center justify-around w-full mt-7 ">
        <div className="flex flex-col items-center gap-2 text-lg">
          <div onClick={()=>toggleLike(currentUser._id,_id)} className={`group ${likes?.some(like => like.userId === currentUser._id) ? 'bg-red-400 text-white' : 'bg-white' } drop-shadow-md p-2 rounded-md cursor-pointer hover:bg-red-400 hover:text-white`}><AiOutlineHeart /></div>
          {likes?.length || "0"}
        </div>


        <button onClick={() => handleOpenModal(PostFiles)} className="p-3 rounded bg-main text-white drop-shadow  flex items-center gap-2 hover:scale-90 transition-all">Show Files <AiFillEye /></button>

      </div>

      <div className="flex w-full p-1 justify-around capitalize text-white bg-main rounded-b"><h1 className="bg-main  p-1 rounded">photos : {slides.length}</h1>  <h1 className="bg-main  p-1 rounded">files :{PostFiles.length}</h1></div>


    </div>
  );
}

export default Post;