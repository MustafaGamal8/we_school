import React, { useState } from "react";
import Modal from "react-modal";
import {AiFillMail}from "react-icons/ai"
import { BiLoader } from "react-icons/bi";
import {MdClose} from "react-icons/md"

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

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={toggleModal}
      className="modal-styles"
      overlayClassName="overlay-styles"
    >
      <div>
        <button
          onClick={toggleModal}
          className="close-button"
        >
          <MdClose size={24} />
        </button>
        <div className="h-10"></div>
      </div>
      <div className="modal-content">
        <h1 className="modal-title">Upload your Excel file</h1>
        <div
          className="drop-area"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {uploading && (
            <div className="uploading-indicator">
              <BiLoader className="loading-icon" size={32} />
            </div>
          )}
          <AiFillMail size={48} className="icon" />
          {uploading ? (
            <p className="upload-status">UPLOADING...</p>
          ) : (
            <p className="upload-status">
              {uploadSuccess
                ? "Files uploaded successfully!"
                : "Drag and drop your Excel file here"}
            </p>
          )}
        </div>
        <div className="file-list">
          {droppedFiles.map((file, index) => (
            <p key={index} className="file-name">
              {file.name}
            </p>
          ))}
        </div>
        <button
          className={`upload-button`}
          onClick={handleSharePost}
          disabled={uploading || droppedFiles.length === 0 || uploadSuccess}
        >
          {uploading ? <BiLoader className="loading-icon" /> : null}
          {uploading ? "UPLOADING..." : "Share Post"}
        </button>
      </div>
    </Modal>
  );
}

export default UploadPostModal;
