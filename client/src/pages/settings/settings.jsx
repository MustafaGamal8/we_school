

const Settings = () => {
  return (
    <>
      <img
        className=" absolute bottom-0  scale-y-[-1] right-0 z-[-1] w-full h-max drop-shadow-xl "
        src="/assets/wave.svg"
        alt=""
      />


      <h1 className="w-80 bg-main text-white rounded m-auto mt-10 text-center md:text-3xl p-2 uppercase ">Settings</h1>



      <div className="w-[80%] bg-white h-[500px] m-auto mt-10 drop-shadow-xl  rounded overscroll-y-auto flex flex-col items-start">

        <div className="w-full">
          <h1 className="text-2xl font-semibold text-gray-800 text-center">General</h1>
          <div></div>
        </div>
        <hr className=" w-full h-1 " />

      </div>




    </>
  );
}

export default Settings;