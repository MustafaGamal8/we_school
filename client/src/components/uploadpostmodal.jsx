import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { AiOutlineDownload, AiOutlineUpload, AiFillMail, AiOutlineMail, AiOutlineFileImage } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { BiLoader } from "react-icons/bi";

function UploadPostModal({ isOpen, onClose }) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [droppedFiles, setDroppedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    onClose();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const newDroppedFiles = [...droppedFiles];
    const files = e.dataTransfer.files;

    for (let i = 0; i < files.length; i++) {
      newDroppedFiles.push(files[i]);
    }

    setDroppedFiles(newDroppedFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSharePost = () => {
    setUploading(true);

    setTimeout(() => {
      setUploadSuccess(true);
      setUploading(false);

      // Reset the droppedFiles array after success
      setDroppedFiles([]);
    }, 2000);
  };

  const getFileIcon = (fileName) => {
    // الكود هنا كما سبق
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
      onRequestClose={toggleModal}
      className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] rounded-lg border-none outline-none bg-[#f7f2fb] p-2 drop-shadow-lg min-h-[500px] h-fit w-80 md:w-[600px] lg:w-[800px]"
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
        <h1 className="text-center uppercase text-2xl">Upload your file</h1>
        <input
  type="text"
  className="w-[70%] px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary placeholder:text-main mt-5" placeholder="enter your text"/>
        <div
          className="border-dashed border-2 border-gray-300 rounded-lg p-8 mt-4 w-[70%] h-[250px] cursor-pointer relative"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {uploading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50">
              <BiLoader className="animate-spin text-gray-500" size={32} />
            </div>
          )}
          <AiFillMail size={48} className="text-main mx-auto" />
          {uploading ? (
            <p className="text-gray-500 mt-2 text-center">UPLOADING...</p>
          ) : (
            <p className="text-gray-500 mt-2 text-center">
              {uploadSuccess
                ? "Files uploaded successfully!"
                : "Drag and drop your file here"}
            </p>
          )}
        </div>
        <div className="w-full">
          {droppedFiles.map((file, index) => (
            <p key={index} className="mt-4">
              {getFileIcon(file.name)} {file.name}
            </p>
          ))}
        </div>
        <button
          className={`mt-8  btn-share bg-main hover:bg-sec text-white px-4 py-2 rounded-md`}
          onClick={handleSharePost}
          disabled={uploading || droppedFiles.length === 0 || uploadSuccess}
        >
          {uploading ? <BiLoader className="animate-spin mr-2" /> : null}
          {uploading ? "UPLOADING..." : "Share Post"}
        </button>
      </div>
    </Modal>
  );
}

export default UploadPostModal;
