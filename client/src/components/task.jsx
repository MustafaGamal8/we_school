import { FaCircleUser } from 'react-icons/fa6';
import {LuTimer} from 'react-icons/lu';

const serverUrl = "https://we-school-api.vercel.app"
const Task = ({Task}) => {
  const {user, task, endDate} = Task
  return ( 
    <div className=" group relative lg:w-96 w-60  rounded-md  p-3 bg-white flex flex-col gap-2   overflow-hidden     group border-x-4 border-main drop-shadow-lg ">
      <div className='flex items-center gap-2'>
        {user.picture ? <div className="h-9 bg-white drop-shadow-lg rounded-full overflow-hidden"><img src={serverUrl +  user.picture}   className="h-full w-full object-cover rounded-full"/></div> : (<FaCircleUser className="text-sec text-2xl" />) } 
        <h1 className="text-sec  capitalize">{user.firstName} {user.lastName}</h1>
      </div>
      <h1>{task}</h1>
      <div className="flex items-center  gap-1 group-hover:-translate-y-2 transition-all duration-150"><LuTimer /> {endDate}  </div>
    </div>
   );
}
 
export default Task;