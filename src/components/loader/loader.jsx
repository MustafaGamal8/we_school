import "./loader.css"
const Loader = () => (
  
  <div id="loader" className="fixed bg-white overflow-hidden h-full w-full flex items-center justify-center text-right after:bg-[#6e237e] after:absolute after:w-full after:h-4 after:-bottom-2 drop-shadow-xl select-none">
    <img className="w-32 md:w-52" src="/logo.jpg" alt="" />
    <div>
      <h1 className="text-xl md:text-3xl drop-shadow">مدرسة وي <br /> للتكنولوجيا التطبيقية</h1>
      <h2 className="mt-2 md:text-2xl drop-shadow text-[#6e237e] font-semibold">في المنصورة</h2>
    </div>



    

    <div className="absolute top-[60%] flex justify-center items-center h-20">
      <div className="loading-dots flex">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
      </div>
    </div>
  </div>
);


export default Loader;