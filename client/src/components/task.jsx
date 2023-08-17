import {LuTimer} from 'react-icons/lu';

const Task = () => {
  return ( 
    <div className=" relative lg:w-96 w-40  rounded-md  p-3 bg-white drop-shadow flex flex-col gap-2   after:left-0 after:top-0 after:w-[2%] after:h-full after:bg-main after:absolute  hover:after:w-full after:z-[-1] after:transition-all overflow-hidden hover:text-white  ">
      <h1>Review Unit 8 </h1>
      <div className="flex items-center "><LuTimer/>  <span>7 dec,2019</span>| <span>12</span>  </div>
    </div>
   );
}
 
export default Task;