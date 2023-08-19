import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineDownload } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

Modal.setAppElement('#root');

const FilesModal = ({ postFiles,isOpen ,onClose}) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [files, setFiles] = useState(postFiles);
  console.log(files)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    onClose()
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={toggleModal}
      contentLabel="Example Modal"
      className="absolute top-[50%] left-[50%] right-auto translate-y-[-50%] translate-x-[-50%] lg:w-[30%] md:w-[50%] w-[90%] h-[500px] bg-white drop-shadow rounded overflow-hidden outline-none p-5 overflow-y-scroll"
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

      <div className="flex flex-col gap-4 ">
        <h1 className='text-xl text-sec text-center '>Number of files : {files.length}</h1>
        {!files ? (
          <>No files</>
        ) : (
          files.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between px-10 bg-white drop-shadow rounded-md h-20"
            >
              <div className="flex items-center justify-center w-1/2 bg-white h-full">
                <svg
                  className="h-full p-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  id="file"
                >
                  <path
                    fill="#8c9eff"
                    d="M26,3V29a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V9a1,1,0,0,1,.23-.64l5-6A1,1,0,0,1,12,2H25A1,1,0,0,1,26,3Z"
                  ></path>
                  <path
                    fill="#5f7cf9"
                    d="M14,2v8a1,1,0,0,1-1,1H6V9a1,1,0,0,1,.23-.64l5-6A1,1,0,0,1,12,2Z"
                  ></path>
                </svg>
                <div>
                  <h1>{file.name}</h1>
                  <p>{file.size}</p>
                </div>
              </div>

              <a
                download
                href={file.link}
                className="bg-white drop-shadow-lg hover:bg-main hover:text-white rounded-full p-2 cursor-pointer text-xl"
              >
                <AiOutlineDownload />
              </a>
            </div>
          ))
        )}
      </div>
    </Modal>
  );
};

export default FilesModal;
