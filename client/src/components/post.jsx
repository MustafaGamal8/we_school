import { FaCircleUser } from "react-icons/fa6"
import { AiFillEye, AiOutlineHeart } from "react-icons/ai"
import { BiTime } from "react-icons/bi"
import Slider from './slider';
import { toggleLike } from "../functions/posts";
import { useEffect, useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Post = ({ handleOpenModal, post }) => {
  const { _id, user, files, content, likes, postDate } = post
  const [isLiked, setIsLiked] = useState(null)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [postLikes, setPostLikes] = useState(likes)

  const PostFiles = [];
  const slides = []

  const currentUser = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    setIsLiked(postLikes?.some(like => like.userId === currentUser._id))
  }, [])

  const serverUrl = "https://we-school-api.vercel.app/"


  files.map(file => {
    file.fileType.includes("image") ? slides.push({ img: serverUrl + file.fileLink }) : null
    PostFiles.push(file)

  })


  const handleLike = () => {
    toggleLike(currentUser._id, _id)
    if (postLikes?.some(like => like.userId === currentUser._id)) {
      setIsLiked(false);
      const updatedPostLikes = postLikes.filter(like => like.userId !== currentUser._id);
      setPostLikes(updatedPostLikes);
    } else {
      setIsLiked(true);
      setPostLikes([...postLikes, { userId: currentUser._id, _id }]);
    }
  }


  return (
    <div className=" w-[95%] md:w-[50%] : lg:w-[45%] m-auto   border p-2 rounded text-sec bg-white  drop-shadow-xl  dark:bg-slate-800 dark:text-white">

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 text-2xl mt-2">
          {user.picture ? <div className="h-12 bg-white drop-shadow-lg rounded-full overflow-hidden"><img src={serverUrl + user.picture} className="h-full w-full object-cover rounded-full" /></div> : (<FaCircleUser className="text-sec text-2xl" />)}
          <h1 className="text-sec capitalize">{user.firstName} {user.lastName}</h1>
        </div>
        <hr className="h-1 w-1/2 my-2 " />
        <div className="b" >
          <p className="text-sm text-gray-600  select-text dark:text-gray-400">{user.email}</p>
          {postDate && <div className="text-sm text-gray-600 capitalize flex items-center justify-center gap-1 dark:text-gray-400"><BiTime /> <p>{postDate}</p></div>}
        </div>
      </div>

      <div className="mt-5 rounded p-2 capitalize flex text-right select-text">
        {content}
      </div>

    {
      slides.length >= 1 ?
       <div className="h-96  p-2   bg-white drop-shadow rounded-md  dark:bg-slate-700">
      {
        screenWidth > 720 ? 
        (<Slider slides={slides} customStyle={{coverOrContain:"object-contain" ,scale:"scale-150" }} />  ) 
        :
         (<div className=" h-full flex items-center gap-5 overflow-x-scroll">
          {
            slides.map((s) => (
              <LazyLoadImage src={s.img} className="object-contain h-[70%] rounded drop-shadow-lg" />
            ))
          }
        </div>)
      }      
    </div>
    
    :(<div className="h-20"></div>)
    }


      <div className="flex items-center justify-around w-full mt-7 ">
        <div className="flex flex-col items-center gap-2 text-lg">
          <div onClick={handleLike} className={`group ${isLiked ? 'bg-red-500 text-white' : 'bg-white text-red-500'} drop-shadow-md p-2 rounded-md cursor-pointer `}><AiOutlineHeart /></div>
          {postLikes?.length || "0"}
        </div>


        <button onClick={() => handleOpenModal(PostFiles)} className="p-3 rounded bg-sec text-white drop-shadow  flex items-center gap-2 hover:scale-90 transition-all">Show Files <AiFillEye /></button>

      </div>

      <div className="flex w-full p-1 justify-around capitalize text-white bg-sec rounded-b"><h1 className="  p-1 rounded">photos : {slides.length}</h1>  <h1 className=" p-1 rounded">files :{PostFiles.length}</h1></div>


    </div>
  );
}

export default Post;