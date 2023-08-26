import { useEffect,  useState } from "react";
import Post from "../../components/post";
import Task from './../../components/task';
import FilesModal from "../../components/filesModal";
import { getPosts } from "../../functions/posts";
import Search from "../../components/search";
import { getAllTasks } from "../../functions/tasks";
import { FaCheckCircle  } from "react-icons/fa";

const TimeLine = () => {  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postFiles, setPostFiles] = useState([]);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]); 
  const [tasks, setTasks] = useState([]);


  const handleOpenModal = (PostFiles) => {
    setPostFiles(PostFiles);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  
  const fetchPosts = async ()=>{
    const posts =  await getPosts()
    setFilteredPosts(posts)
    setPosts(posts)
  }
  const fetchTasks = async ()=>{
    const tasks =  await getAllTasks()
    setTasks(tasks)
    console.log(tasks)
  }
  useEffect(()=>{
    fetchPosts()
    fetchTasks()
  }
    ,[]
  )


  const handleSearch = (searchTerm, searchCategory) => {
    if (!searchTerm) {
      setFilteredPosts(posts);
      return;
    }
  
    const filtered = posts.filter(post => {
      const searchTermLC = searchTerm.toLowerCase();
      
      if (searchCategory === "userName") {
        return (
          post.user.firstName.toLowerCase().includes(searchTermLC) ||
          post.user.lastName.toLowerCase().includes(searchTermLC)
        );
      }
      
      if (searchCategory === "content") {
        return post.content.toLowerCase().includes(searchTermLC);
      }
      
      if (searchCategory === "email") {
        return post.user.email.toLowerCase().includes(searchTermLC);
      }
      
      return false;
    });
  
    setFilteredPosts(filtered);
  };
  
  


  return ( 
<div className="flex flex-col-reverse lg:flex-row  gap-5 w-full lg:pt-14">
  
<img className=" absolute lg:top-0 top-80 right-0 z-[-1] w-full drop-shadow-xl " src="/assets/wave.svg" alt="" />


<section className="lg:w-[75%]   ">
        <h1 className="text-3xl bg-white rounded-b m-auto w-80 p-2 text-center font-semibold uppercase mt-3  mb-5">time line</h1>
        
        <div className="lg:w-[60%] md:w-[70%] w-[90%] my-7 drop-shadow-md m-auto h-max">
          <Search onSearch={handleSearch} />
        </div>
        
        <div className="flex flex-col gap-5 w-full">
          {!filteredPosts ? null: (
            filteredPosts.map(post => (
              <Post key={post._id} post={post} handleOpenModal={handleOpenModal} />
            ))
          )}
        </div>
      </section>

  
  <section className=" h-full  lg:w-[30%]  lg:mt-0 mt-5  lg:m-10 p-2  bg-white rounded drop-shadow-md  border-b-2 border-main">
    <h1 className="text-3xl bg-sec text-white rounded m-auto w-40 p-2 text-center font-semibold uppercase mb-3 ">Tasks</h1>

    <div className="scrollbar-hide rounded  flex   lg:flex-col gap-y-5 gap-2 lg:overflow-hidden overflow-x-scroll p-3 w-full  m-auto ">
      {tasks ? tasks.map(task=>(
        <div className="w-full  "><Task  Task={task}/></div>
      )): <div className="capitalize flex items-center justify-around w-[50%] m-auto text-xl text-center"> <h1 className=" text-main ">tasks was  finished</h1><FaCheckCircle className="text-green-400" /></div> }
      
      </div>
  </section>




   {isModalOpen && (
    
        <FilesModal  postFiles={postFiles} isOpen={true}  onClose={handleCloseModal} />
      )}

  

</div>


  );
}
 
export default TimeLine;