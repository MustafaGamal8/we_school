import { useState } from "react";
import { FaFileUpload } from "react-icons/fa";

const DashBoard = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    console.log(file);
  };

  return (
    <div className="w-[90%] md:w-[60%] m-auto bg-main flex flex-col justify-between items-center   h-[250px] border-[2px] border-black border-solid rounded-lg mt-[70px] p-2 md:p-5 " >
      <input
        type="text"
        placeholder="أدخل النص هنا"
        className=" w-full md:w-[95%] p-4 mb-4 rounded-lg text-center outline-none"
      />
      <label className=" w-full bg-white text-main px-4 py-2 md:w-[70%] rounded-lg flex items-center justify-center">
        <FaFileUpload className="mt-2" />
        <span>تحميل الملف</span>
        <input
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept="*/*"
        />
      </label>
      <button
        className="w-full md:w-[50%] bg-white text-main px-4 py-2 rounded-lg mt-5"
        onClick={handleUpload}
        disabled={!file}
      >
        رفع الملف
      </button>
    </div>
  );
};

export default DashBoard;
