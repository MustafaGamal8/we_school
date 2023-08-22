import { useEffect,  useState } from "react";
import Post from "../../components/post";
import Task from './../../components/task';
import FilesModal from "../../components/filesModal";
import { getPosts } from "../../functions/posts";
import Search from "../../components/search";

const TimeLine = () => {  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postFiles, setPostFiles] = useState([]);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]); 


  const handleOpenModal = (PostFiles) => {
    setPostFiles(PostFiles);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  
  const fetchPosts = async ()=>{
    const posts =  await getPosts()
    setPosts(posts)
    setFilteredPosts(posts)
  }
  useEffect(()=>{
    fetchPosts()
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
        <h1 className="text-3xl bg-sec text-white rounded m-auto w-40 p-2 text-center font-semibold uppercase mt-3  mb-5">time line</h1>
        
        <div className="lg:w-[60%] md:w-[70%] w-[90%] my-7 drop-shadow-md m-auto h-max">
          <Search onSearch={handleSearch} />
        </div>
        
        <div className="flex flex-col gap-5">
          {!filteredPosts ? (<h1 className="text-main text-xl text-center"> There is no posts</h1>) : (
            filteredPosts.map(post => (
              <Post key={post._id} post={post} handleOpenModal={handleOpenModal} />
            ))
          )}
        </div>
      </section>

  
  <section className=" h-full  lg:w-[25%] lg:mt-0 mt-5  p-2  bg-white rounded drop-shadow-md  border-l-2 border-main">
    <h1 className="text-3xl bg-sec text-white rounded m-auto w-40 p-2 text-center font-semibold uppercase mb-3 ">Tasks</h1>
    <div className="scrollbar-hide rounded  flex  lg:flex-col gap-y-5 gap-2 lg:overflow-hidden overflow-x-scroll p-2 lg:w-full w-[95%] m-auto  shadow">
      <div className="w-96"><Task /></div>
      <div className="w-96"><Task /></div>
      <div className="w-96"><Task /></div>
      <div className="w-96"><Task /></div>
      <div className="w-96"><Task /></div>
      <div className="w-96"><Task /></div>
      <div className="w-96"><Task /></div>
      </div>
  </section>




   {isModalOpen && (
    
        <FilesModal  postFiles={postFiles} isOpen={true}  onClose={handleCloseModal} />
      )}

  

</div>


  );
}
 
export default TimeLine;