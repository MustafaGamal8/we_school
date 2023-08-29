import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import {  AiFillMail,   AiOutlineDelete, AiOutlineFileExcel,  } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { BiLoader } from "react-icons/bi";
import { toast } from "react-toastify";
import { uploadDegrees } from "../functions/degrees";

function UploadDegreeModal({ isOpen, onClose }) 
{const [droppedFiles, setDroppedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef(null);

  const toggleModal = () => {
    onClose();
  };

  const handleSelectFiles = (e, action) => {
    e.preventDefault();
    const newDroppedFiles = [...droppedFiles];
    const files = action === "choose" ? e.target.files : e.dataTransfer.files;

    for (let i = 0; i < files.length; i++) {
      const fileName = files[i].name.toLowerCase();
      if (fileName.endsWith('.xlsx') || fileName.endsWith('.xls')) {
        newDroppedFiles.push(files[i]);
      }else{
        toast.error("Only xls and xlsx files are allowed");
      }
    }

    setDroppedFiles(newDroppedFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSharePost = async () => {
    setUploading(true);
    await uploadDegrees(droppedFiles)

    setTimeout(() => {
      setUploadSuccess(true);
      setUploading(false);
      setDroppedFiles([]);
      toggleModal();
    }, 2000);
  };

  const handleOpenFileExplorer = () => {
    fileInputRef.current.click();
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
      isOpen={isOpen}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg border-none outline-none bg-[#f7f2fb] dark:bg-slate-800 p-2 drop-shadow-lg min-h-[500px] h-fit w-80 md:w-[600px] lg:w-[800px]"
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
        <h1 className="text-center uppercase text-2xl p-3">Upload Degrees</h1>
        <div className="flex flex-col items-center w-full"></div>
        <div
          className="border-dashed border-2 border-gray-300 rounded-lg p-8 mt-4 w-[70%] h-[250px] cursor-pointer relative"
          onDrop={(event) => handleSelectFiles(event, "drop")}
          onDragOver={handleDragOver}
          onClick={handleOpenFileExplorer}
        >
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(event) => handleSelectFiles(event, "choose")}
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
              <AiOutlineFileExcel size={28} className="text-blue-500" />
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
          className={`mt-8 btn-share bg-main hover:bg-sec text-white px-4 py-2 rounded-md cursor-pointer items-center flex`}
          onClick={handleSharePost}
          disabled={uploading}
        >
          {uploading ? <BiLoader className="animate-spin mr-2" /> : null}
          {uploading ? "UPLOADING..." : "Upload degrees"}
        </button>
      </div>
    </Modal>
  );
}

export default UploadDegreeModal;
