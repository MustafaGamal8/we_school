import Post from "../../components/post";
import Task from './../../components/task';


const TimeLine = () => {
  return ( 
<div className="flex flex-col-reverse lg:flex-row  gap-5 w-full">
  
<img className="opacity-0 absolute top-0 right-0 z-[-1] w-full drop-shadow-xl md:opacity-[1]" src="/assets/wave.svg" alt="" />



  <section className="  lg:w-[80%] ">
    <h1 className="text-3xl bg-sec text-white rounded m-auto w-40 p-2 text-center font-semibold uppercase mt-3  mb-5">time line</h1>
    <div className="flex flex-col gap-5">
      <Post />
      <Post />
      <Post />
    </div>
  </section>
  
  <section className="  lg:w-[20%]  p-2  bg-white rounded drop-shadow-md ">
    <h1 className="text-3xl bg-sec text-white rounded m-auto w-40 p-2 text-center font-semibold uppercase mb-3 ">Tasks</h1>
    <div className="flex  lg:flex-col  gap-2 lg:overflow-hidden overflow-x-scroll p-2 lg:w-full w-[80%] m-auto  shadow">
      <div className="w-96"><Task /></div>
      <div className="w-96"><Task /></div>
      <div className="w-96"><Task /></div>
      <div className="w-96"><Task /></div>
      <div className="w-96"><Task /></div>
      <div className="w-96"><Task /></div>
      <div className="w-96"><Task /></div>
      </div>
  </section>
</div>


  );
}
 
export default TimeLine;