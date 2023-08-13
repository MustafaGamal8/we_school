import Calendar from "../../components/calender";
import Search from "../../components/search";
import Task from "../../components/task";


const TimeLine = () => {
  return ( 
  <div className="m-2">
  time line
  
  <div className="h-10 w-96"><Search /></div>
  <div className="w-96"><Calendar /> </div>
  <div className="w-96 m-5"><Task /> </div>
  </div>
  );
}
 
export default TimeLine;