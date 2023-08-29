import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import { AiOutlineDownload, AiOutlineUpload, AiFillMail, AiOutlineMail, AiOutlineFileImage, AiOutlineDelete, AiOutlineFileExcel } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { BiLoader } from "react-icons/bi";
import { uploadPost } from "../functions/posts";
import { toast } from "react-toastify";

function UploadPostModal({ isOpen, onClose }) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [droppedFiles, setDroppedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [content, setContent] = useState("");

  const fileInputRef = useRef(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    onClose();
  };

  const handleSelectFiles = (e,action) => {
    e.preventDefault();
    const newDroppedFiles = [...droppedFiles];
    let files;
    action == "choose" ? files = e.target.files :  files = e.dataTransfer.files;
  

    for (let i = 0; i < files.length; i++) {
      newDroppedFiles.push(files[i]);
    }

    setDroppedFiles(newDroppedFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSharePost =  async() => {
    setUploading(true);
    const isUploaded = await uploadPost(content,droppedFiles)
    setTimeout(() => {
      setUploadSuccess(true);
      setUploading(false);
      setDroppedFiles([]);
      toggleModal()
    }, 2000);
  };

  const handleOpenFileExplorer = () => {
    fileInputRef.current.click(); 
  };



  const getFileIcon = (fileName) => {
    if (fileName.toLowerCase().endsWith('.xlsx') || fileName.toLowerCase().endsWith('.xls')) {
      return <AiOutlineFileExcel size={28} className="text-blue-500" />;
    }
    return <AiOutlineFileImage size={28} className="text-main" />;
  };

  const handleDeleteFile = (index) => {
    const newDroppedFiles = [...droppedFiles];
    newDroppedFiles.splice(index, 1);
    setDroppedFiles(newDroppedFiles);
  };

  useEffect(() => {
    if (uploadSuccess) {
      setTimeout(() => {
        setUploadSuccess(false);
        setDroppedFiles([]);
      }, 3000);
    }
  }, [uploadSuccess]);
  return (
    <Modal
      isOpen={isModalOpen}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg border-none outline-none bg-[#f7f2fb] dark:bg-slate-800 p-2 drop-shadow-lg min-h-[500px] h-fit w-80 md:w-[800px] lg:w-[1000px]"
      overlayClassName="bg-[#48535a] bg-opacity-50 w-full h-full fixed top-0 left-0"
    >
      <div>
        <button
          onClick={toggleModal}
          className="absolute top-2 right-2 text-gray-500 hover:bg-sec hover:rounded-full hover:text-white p-1"
        >
          <MdClose size={24} />
        </button>
        <div className="h-10"></div>
      </div>
      <div className="w-full flex flex-col items-center text-main">
        <h1 className="text-center uppercase text-2xl p-3">Upload your file</h1>
        <div className="flex flex-col items-center w-full">

          <div className="w-[70%] flex flex-col md:flex-row md:w-[70%] border-gray-300 border m-auto rounded-xl bg-gray-100 dark:bg-slate-800 p-2 md:p-5">
            <textarea
              type="text"
              className="w-full  px-4 py-2 rounded-lg dark:bg-transparent dark:text-white dark:placeholder-white focus:outline-none placeholder:text-main outline-none"
              placeholder="Enter your text"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

        </div>

        <div
          className="border-dashed border-2 border-gray-300 rounded-lg p-8 mt-4 w-[70%] h-[250px] cursor-pointer relative"
          onDrop={()=>handleSelectFiles(event,"drop")}
          onDragOver={handleDragOver}
          onClick={handleOpenFileExplorer}
        >
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={()=>handleSelectFiles(event,"choose")} 
          />
          <div className="flex flex-col items-center justify-center h-full">
            <AiFillMail size={48} className="text-main mx-auto" />
            <p className="text-gray-500 mt-2 text-center">
              {uploading ? "UPLOADING..." : "Drag and drop your file here"}
            </p>
          </div>
        </div>
        <div className="w-full">
          {droppedFiles.map((file, index) => (
            <div key={index} className="mt-4 flex items-center justify-between m-auto w-[60%]">
              {getFileIcon(file.name)}
              <p className="ml-2 text-xl">{file.name}</p>
              <button
                onClick={() => handleDeleteFile(index)}
                className="text-red-500 hover:text-red-700 hover:scale-105 duration-75"
              >
                <AiOutlineDelete size={28} />
              </button>
            </div>
          ))}
        </div>
        <button
          className={`mt-8 btn-share bg-main hover:bg-sec text-white px-4 py-2 rounded-md cursor-pointer  items-center flex`}
          onClick={handleSharePost}
          disabled={uploading }
        >
          {uploading ? <BiLoader className="animate-spin mr-2" /> : null}
          {uploading ? "UPLOADING..." : "Share Post"}
        </button>
      </div>
    </Modal>
  );
}

export default UploadPostModal;
